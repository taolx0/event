## 书籍地址:

https://github.com/teivah/100-go-mistakes#control-structures

http://10.186.18.11/confluence/download/attachments/72417956/100%20Go%20Mistakes%20and%20How%20to%20Avoid%20Them-2022-%E8%8B%B1%E6%96%87%E7%89%88.pdf?version=1&modificationDate=1681222445000&api=v2

## 阅读书中 Functions and methods 章节随机2个小case，并运行资料内的代码示例，给出自己的解释

1. Not knowing which type of receiver to use

Golang对于方法的接收者都是值传递，不管是指针类型还是值类型，都是值传递，只不过指针类型的接收者传递的是指针的副本，值类型的接收者传递的是值的副本。
如果你的方法需要修改接收者的值，必须使用指针接收者。否则，你的方法会对副本进行操作，而不是原始值。

2. Returning a nil receiver
   现象:运行下面这段代码,发现返回的是错误结构体是nil,依然报错 2021/05/08 13:47:28 customer is invalid: <nil>

```
package main

import (
	"errors"
	"log"
	"strings"
)

type Customer struct {
	Age  int
	Name string
}

func main() {
	customer := Customer{Age: 33, Name: "John"}
	if err := customer.Validate(); err != nil {
		log.Fatalf("customer is invalid: %v", err)
	}
}

type MultiError struct {
	errs []string
}

func (m *MultiError) Add(err error) {
	m.errs = append(m.errs, err.Error())
}

func (m *MultiError) Error() string {
	return strings.Join(m.errs, ";")
}

func (c Customer) Validate() error {
	var m *MultiError
	if c.Age < 0 {
		m = &MultiError{}
		m.Add(errors.New("age is negative"))
	}
	if c.Name == "" {
		if m == nil {
			m = &MultiError{}
		}
		m.Add(errors.New("name is nil"))
	}

	return m
}
```

原因:MultiError是nil,error接口值是非nil.Golang的方法是一个语法糖的设计,Golang方法等同于第一个参数是方法接收者的函数.即使方法接收者是nil,方法依然可以被正常调用.




