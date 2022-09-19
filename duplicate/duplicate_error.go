package main

import (
	"fmt"
	"io"
	"os"
)

type errWriter struct {
	w   io.Writer
	err error
}

func (ew *errWriter) write(buf []byte) {
	if ew.err != nil {
		fmt.Println(ew.err.Error())
		return
	}
	_, ew.err = ew.w.Write(buf)
}

func main() {
	fd, err := os.OpenFile("./duplicate/test.txt", os.O_WRONLY, 0777)
	defer func(fd *os.File) {
		err := fd.Close()
		if err != nil {
			fmt.Println(err.Error())
		}
	}(fd)
	if err != nil {
		panic(err)
	}
	ew := &errWriter{w: fd}
	ew.write([]byte("hello"))
	ew.write([]byte("world"))
	ew.err = io.EOF
	ew.write([]byte("hello"))
}
