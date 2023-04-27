package main

import "errors"

var timeout = 3 //minutes

type timeoutError interface {
	error
	Timeout() bool // Is the error a timeout?
}

type errorHandler struct {
	time int
	err  error
}

func (e *errorHandler) Timeout() bool {
	if e.time > timeout {
		return true
	}
	return false
}

func (e *errorHandler) Error() string {
	return e.err.Error()
}

func isTimeout(err error) bool {
	e, ok := err.(timeoutError)
	return ok && e.Timeout()
}

func main() {
	e := &errorHandler{
		time: 4,
		err:  errors.New("timeout error"),
	}

	if isTimeout(e) {
		println("timeout error")
	}
}
