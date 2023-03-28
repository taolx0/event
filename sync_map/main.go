package main

import "sync"

func main() {
	m := sync.Map{}
	m.Store("foo", "bar")
	value, ok := m.Load("foo")
	println(value.(string), ok)
}
