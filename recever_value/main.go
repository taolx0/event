package main

func main() {
	m := Meta{Type: "bar"}
	m.SetMeta()
	println(m.Type)
}

type Meta struct {
	Type string
}

func (m *Meta) SetMeta() {
	m.Type = "foo"
}
