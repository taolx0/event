package main

import (
	"fmt"
	"strings"
)

func main() {
	data := `id,select_type,table,partitions,type,possible_keys,key,key_len,ref,rows,filtered,Extra,info
"1","SIMPLE","test2","p44","const","PRIMARY","PRIMARY","4","const","1","100","Using index","set_1711592374_3, explain
select column3 from tt.test2 where (column3 = 2)"`

	// Split the data by newline to get each row
	rows := strings.Split(data, "\n")

	// Prepare the header and divider for the markdown table
	header := "| " + strings.Join(strings.Split(rows[0], ","), " | ") + " |"
	divider := "| " + strings.Repeat("--- | ", len(strings.Split(rows[0], ","))) + "--- |"

	// Prepare the rows for the markdown table
	var markdownRows []string
	for _, row := range rows[1:] {
		// Remove the double quotes around each element
		row = strings.ReplaceAll(row, `"`, "")
		markdownRows = append(markdownRows, "| "+strings.Join(strings.Split(row, ","), " | ")+" |")
	}

	// Join all parts to form the markdown table
	markdownTable := header + "\n" + divider + "\n" + strings.Join(markdownRows, "\n")

	fmt.Println(markdownTable)
}
