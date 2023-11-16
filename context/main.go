package main

import (
	"context"
	"errors"
	"time"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	doSomething(ctx)

	if errors.Is(ctx.Err(), context.DeadlineExceeded) {
		println("deadline exceeded")
	}
}

func doSomething(ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			println(ctx.Err().Error())
			return
		default:
			println("default")
			return
		}
	}
}
