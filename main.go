package main

import (
	"fmt"
)

func main() {
	query := "SELECT * FROM tbl_sensor WHERE device = 'device1' AND ts BETWEEN '2022-01-01' AND '2022-02-01'"
	formattedQuery, err := sqlfmt.(query)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("Formatted query:\n", formattedQuery)
}
