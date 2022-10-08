package main

import "errors"

type timeoutError interface {
	error
	Timeout() bool // Is the error a timeout?
}

type errorHandler struct {
	err error
}

func (e *errorHandler) Timeout() bool {
	return true
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
		err: errors.New("timeout error"),
	}

	if isTimeout(e) {
		println("timeout error")
	}
}
