// Example program showing a goroutine leak. It launches a
// goroutine that sends on a channel but sometimes there is
// no other goroutine available to receive.
package main

import (
	"fmt"
	"time"

	"golang.org/x/net/context"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	for {
		select {
		case <-ctx.Done():
			fmt.Printf("context done: %v", ctx.Err())
			return

		case <-time.After(1 * time.Second):
			fmt.Println("time.After 1s")
		}
	}
}
