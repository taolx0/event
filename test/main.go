package main

import "fmt"

func main() {
	m := make(map[string]map[string]string)
	if m["a"] == nil {
		fmt.Printf("m[a] is nil\n")
	}
	m["b"] = make(map[string]string)
	test := m["b"]
	fmt.Printf("test: %v\n", test["c"])
	if test["c"] == "" {
		fmt.Printf("test[c] is empty\n")
	}
}

func t1(c chan struct{}) {
	select {
	case <-c:
		println("t1")
		return
	}
}

func t2(c chan struct{}) {
	select {
	case <-c:
		println("t2")
		return
	}
}
