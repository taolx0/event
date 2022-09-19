package main

import (
	"errors"
	"net/http"
)

type AppError struct {
	Code    int
	Message string
	err     error
}

func main() {
	http.HandleFunc("/app/error", appError)
	_ = http.ListenAndServe(":8080", nil)
}

func appError(w http.ResponseWriter, _ *http.Request) {
	e := &AppError{
		Code:    500,
		Message: "Internal Server Error",
		err:     errors.New("test error"),
	}
	http.Error(w, e.Message, e.Code)
}
