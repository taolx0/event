// Example program showing a goroutine leak. It launches a
// goroutine that sends on a channel but sometimes there is
// no other goroutine available to receive.
package main

import "fmt"

func main() {
outerBreaker:
	for i := 0; i < 10; i++ {
		for j := 0; j < 10; j++ {
			fmt.Printf("j: %d\n", j)
			break outerBreaker
		}
		fmt.Printf("i: %d\n", i)
	}
}
