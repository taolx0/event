// Example program showing a goroutine leak. It launches a
// goroutine that sends on a channel but sometimes there is
// no other goroutine available to receive.
package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"runtime"
	"time"
)

func main() {

	// Capture starting number of goroutines.
	startingGs := runtime.NumGoroutine()

	if err := process("gophers"); err != nil {
		log.Print(err)
	}

	// Hold the program from terminating for 1 second to see
	// if any goroutines created by process terminate.
	time.Sleep(time.Second)

	// Capture ending number of goroutines.
	endingGs := runtime.NumGoroutine()

	// Report the results.
	fmt.Println("========================================")
	fmt.Println("Number of goroutines before:", startingGs)
	fmt.Println("Number of goroutines after :", endingGs)
	fmt.Println("Number of goroutines leaked:", endingGs-startingGs)
}

// result wraps the return values from search. It allows us
// to pass both values across a single channel.
type result struct {
	record string
	err    error
}

// process is the work for the program. It finds a record
// then prints it. It fails if it takes more than 100ms.
func process(term string) error {

	// Create a context that will be canceled in 100ms.
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)
	defer cancel()

	// Make a channel for the goroutine to report its result.
	ch := make(chan result, 1)

	// Launch a goroutine to find the record. Create a result
	// from the returned values to send through the channel.
	go func() {
		record, err := search(term)
		fmt.Printf("record: %v, err: %v", record, err)
		ch <- result{record, err}
		fmt.Printf("ch: %v", ch)
	}()

	// Block waiting to either receive from the goroutine's
	// channel or for the context to be canceled.
	select {
	case <-ctx.Done():
		return errors.New("search canceled")
	case result := <-ch:
		if result.err != nil {
			return result.err
		}
		fmt.Println("Received:", result.record)
		return nil
	}
}

// search simulates a function that finds a record based
// on a search term. It takes 200ms to perform this work.
func search(term string) (string, error) {
	time.Sleep(200 * time.Millisecond)
	return "some value", nil
}
