package main

import "testing"

var strArray = []string{"foo", "bar", "baz"}

var m = map[string]string{
	"foo": "bar",
	"t":   "bar",
	"baz": "bar",
}

var m2 = []string{"foo", "t", "baz"}

func main() {
	if v, ok := m["t"]; ok {
		println(v)
		m["t"] = "bar"
	}
	println(m["t"])
}

func Benchmark_testMap(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, str := range strArray {
			if _, ok := m[str]; ok {

			}
		}

		for _, _ = range m {

		}
	}
}

func Benchmark_testSlice(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, str := range strArray {
			for _, m := range m2 {
				if str == m {

				}
			}
		}
	}
}
