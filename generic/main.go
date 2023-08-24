package main

import "fmt"

type Slice[T int | float64 | string] []T

func main() {
	intSlice := Slice[int]{1, 2, 3}
	fmt.Println(intSlice)

	float64Slice := Slice[float64]{1.1, 2.2, 3.3}
	fmt.Println(float64Slice)

	stringSlice := Slice[string]{"1", "2"}
	fmt.Println(stringSlice)

	for _, v := range reverseWithGenerics(intSlice) {
		println(v)
	}
}

func reverseWithGenerics[T any](s []T) []T {
	l := len(s)
	r := make([]T, l)

	for i, e := range s {
		r[l-i-1] = e
	}
	return r
}
