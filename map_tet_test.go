package main

import "fmt"

type Data struct {
	ID    string
	Value string
}

func main() {
	dataReceived := []Data{
		Data{ID: "D1", Value: "V1"},
		Data{ID: "D2", Value: "V2"},
		Data{ID: "D3", Value: "V3"},
		Data{ID: "D4", Value: "V4"},
		Data{ID: "D5", Value: "V5"},
	}

	dataManaged := map[string]Data{}

	for _, v := range dataReceived {
		fmt.Println("Received ID:", v.ID, "Value:", v.Value)
		dataManaged[v.ID] = v
	}

	fmt.Println()

	for m, n := range dataManaged {
		n.Value = "UpdatedData for " + n.ID
		fmt.Println("Data key:", m, "Value:", n.Value)
	}

	fmt.Println()

	for o, p := range dataManaged {
		fmt.Println("Data key:", o, "Value:", p.Value)
	}
}
