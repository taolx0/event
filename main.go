package main

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
