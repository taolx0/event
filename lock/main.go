package main

import (
	"sync/atomic"
	"time"
)

func main() {
	var a int32 = 1
	go func() {
		atomic.CompareAndSwapInt32(&a, 1, 2)
		println(a)
	}()
	time.Sleep(time.Second)
	go func() {
		atomic.CompareAndSwapInt32(&a, 2, 1)
		println(a)
	}()
	time.Sleep(time.Second)
	go func() {
		atomic.CompareAndSwapInt32(&a, 1, 3)
		println(a)
	}()
}
