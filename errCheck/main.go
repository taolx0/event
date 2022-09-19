package main

import (
	"errors"
	"fmt"
)

var ErrorNotFound = errors.New("not found")

func IsNotFound(err error) error {
	if err == ErrorNotFound {
		return fmt.Errorf("not found: %w", err)
	}

	return nil
}

func main() {
	err := IsNotFound(ErrorNotFound)
	// 当多层调用返回的错误被一次次地包装起来，我们在调用链上游拿到的错误如何判断是否是底层的某个错误呢？
	// 它递归调用 Unwrap 并判断每一层的 err 是否相等，如果有任何一层 err 和传入的目标错误相等，则返回 true。
	if errors.Is(err, ErrorNotFound) {
		fmt.Println("not found")
	}
}
