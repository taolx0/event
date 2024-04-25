/*
This is a simulated oauth2 server used for test, it's not fully functioning.
Forked from: https://github.com/go-oauth2/oauth2/blob/master/example/server/server.go
*/

package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"time"

	"actiontech.cloud/universe/ucore-common/v5/component"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/go-oauth2/oauth2/v4/errors"
	"github.com/go-oauth2/oauth2/v4/generates"
	"github.com/go-oauth2/oauth2/v4/manage"
	"github.com/go-oauth2/oauth2/v4/models"
	"github.com/go-oauth2/oauth2/v4/server"
	"github.com/go-oauth2/oauth2/v4/store"
	"github.com/go-session/session"
)

func main() {

	flag.Parse()
	if len(flag.Args()) < 1 {
		fmt.Println("Usage:\n\t./oauth2-fake-server {client-host} ")
		os.Exit(1)
	}
	clientHost := flag.Arg(0)

	manager := manage.NewDefaultManager()
	manager.SetAuthorizeCodeTokenCfg(manage.DefaultAuthorizeCodeTokenCfg)

	// token store
	manager.MustTokenStorage(store.NewMemoryTokenStore())

	// generate jwt access token
	manager.MapAccessGenerate(generates.NewJWTAccessGenerate("", []byte("00000000"), jwt.SigningMethodHS512))

	clientStore := store.NewClientStore()
	//nolint:errcheck
	clientStore.Set("actiontech", &models.Client{
		ID:     "actiontech",
		Secret: "hcetnoitca",
		Domain: clientHost,
	})
	manager.MapClientStorage(clientStore)

	srv := server.NewServer(server.NewConfig(), manager)

	srv.SetPasswordAuthorizationHandler(func(username, password string) (userID string, err error) {
		if username == "test1" && password == "123456" {
			userID = "test1"
		} else if username == "test2" && password == "123456" {
			userID = "test2"
		}
		return
	})

	srv.SetUserAuthorizationHandler(userAuthorizeHandler)

	srv.SetInternalErrorHandler(func(err error) (re *errors.Response) {
		log.Println("Internal Error:", err.Error())
		return
	})

	srv.SetResponseErrorHandler(func(re *errors.Response) {
		log.Println("Response Error:", re.Error.Error())
	})

	http.HandleFunc("/login", loginHandler)
	http.HandleFunc("/auth", authHandler)

	http.HandleFunc("/authorize", func(w http.ResponseWriter, r *http.Request) {
		store, err := session.Start(r.Context(), w, r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		var form url.Values
		if v, ok := store.Get("ReturnUri"); ok {
			form, ok = v.(url.Values)
			if !ok {
				http.Error(w, "invalid return_uri", http.StatusInternalServerError)
			}
		}
		r.Form = form

		store.Delete("ReturnUri")
		store.Save() //nolint:errcheck

		err = srv.HandleAuthorizeRequest(w, r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
		}
	})

	http.HandleFunc("/token", func(w http.ResponseWriter, r *http.Request) {
		err := srv.HandleTokenRequest(w, r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	http.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		token, err := srv.ValidationBearerToken(r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		data := map[string]interface{}{
			"expires_in": int64(time.Until(token.GetAccessCreateAt().Add(token.GetAccessExpiresIn()))),
			"client_id":  token.GetClientID(),
			"user_id":    token.GetUserID(),
		}
		e := json.NewEncoder(w)
		e.SetIndent("", "  ")
		e.Encode(data) //nolint:errcheck
	})

	log.Printf("Server is running at %v port.\n", component.DefaultUmcOauth2MockHttpPort)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", component.DefaultUmcOauth2MockHttpPort), nil))
}

func userAuthorizeHandler(w http.ResponseWriter, r *http.Request) (userID string, err error) {
	store, err := session.Start(r.Context(), w, r)
	if err != nil {
		return
	}

	uid, ok := store.Get("LoggedInUserID")
	if !ok {
		if r.Form == nil {
			r.ParseForm() //nolint:errcheck
		}

		store.Set("ReturnUri", r.Form)
		store.Save() //nolint:errcheck

		w.Header().Set("Location", "/login")
		w.WriteHeader(http.StatusFound)
		return
	}

	userID, ok = uid.(string)
	if !ok {
		return "", errors.New("userID must be a string")
	}
	store.Delete("LoggedInUserID")
	store.Save() //nolint:errcheck
	return
}

func loginHandler(w http.ResponseWriter, r *http.Request) {

	store, err := session.Start(r.Context(), w, r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if r.Method == "POST" {
		if r.Form == nil {
			if err := r.ParseForm(); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
		}
		store.Set("LoggedInUserID", r.Form.Get("username"))
		store.Save() //nolint:errcheck

		w.Header().Set("Location", "/auth")
		w.WriteHeader(http.StatusFound)
		return
	}
	outputHTML(w, r, "./static/oauth2/login.html")
}

func authHandler(w http.ResponseWriter, r *http.Request) {
	store, err := session.Start(context.TODO(), w, r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if _, ok := store.Get("LoggedInUserID"); !ok {
		w.Header().Set("Location", "/login")
		w.WriteHeader(http.StatusFound)
		return
	}

	outputHTML(w, r, "./static/oauth2/auth.html")
}

func outputHTML(w http.ResponseWriter, req *http.Request, filename string) { // NO_DUPL_CHECK
	file, err := os.Open(filename)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	defer file.Close()
	fi, _ := file.Stat()
	http.ServeContent(w, req, file.Name(), fi.ModTime(), file)
}
