package main

import "fmt"

func main() {
	t := make([]int, 10)
	t = append(t, 1)
	fmt.Println(len(t))
}
