package main

import "time"

type Cache struct {
	defaultExpiration time.Duration
}

func main() {
	c := new(Cache)
	c.defaultExpiration = 5 * time.Minute
	println(c.defaultExpiration.String())
}
