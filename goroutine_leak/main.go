// Example program showing a goroutine leak. It launches a
// goroutine that sends on a channel but sometimes there is
// no other goroutine available to receive.
package main

import (
	"time"
)

var s1 = `
 	[
      {
        "data": [
          "ddl_avoid_full_text",
          "MySQL",
          "禁止使用全文索引",
          "全文索引的使用会增加存储开销，并对写操作性能产生一定影响。",
          "error",
          "使用建议",
          null,
          "150",
          "1",
          "0"
        ]
      },
      {
        "data": [
          "ddl_avoid_geometry",
          "MySQL",
          "禁止使用空间字段和空间索引",
          "使用空间字段和空间索引会增加存储需求，对数据库性能造成一定影响",
          "error",
          "使用建议",
          null,
          "151",
          "1",
          "0"
        ]
      }
    ]
`

type DataItem struct {
	Data []interface{} `json:"data"`
}

func main() {
	println(time.Now().Format("20060102150405.000"))
}
