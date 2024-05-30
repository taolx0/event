package main

import (
	"fmt"
	"runtime"
	"sync"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	var group sync.WaitGroup

	for i := 0; i < 5; i++ {
		group.Add(1)
		go func() {
			defer group.Done()
			fmt.Printf("%-2d", i) // 这里打印的i不是所期望的
		}()
	}
	group.Wait()
}
