package main

import "fmt"

func main() {
	s1 := []int{1, 2, 3, 4, 5}
	//s2 :=
	//s3 := append(s2, []int{10, 10, 10}...)

	//println(len(s2))
	//println(cap(s2))

	fmt.Printf("%v\n", s1)

	s3 := make([]int, 2)
	copy(s3, s1[1:3])
	//fmt.Printf("%v\n", s2)

	//fmt.Printf("%v\n", s3)

	f(s3)

	fmt.Printf("%v\n", s1)
}

func f(s []int) {
	s = append(s, 123)
	fmt.Printf("%v\n", s)
}
