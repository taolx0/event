package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	timeout, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	doSomething(timeout)

	select {
	case <-timeout.Done():
		fmt.Println("timeout")
		break
	}

	fmt.Println("Done")
}

func doSomething(ctx context.Context) {
	ctx.Done()
}
