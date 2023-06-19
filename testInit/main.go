package main

import (
	"fmt"
	"io/ioutil"
)

func init() {
	// read config file from yml
	data, err := ioutil.ReadFile("./etc/rule.yml")
	if err != nil {
		panic(err)
	}
	fmt.Println(data)
}

func main() {
	fmt.Println("main")
}
