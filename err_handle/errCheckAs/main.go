package main

import (
	"errors"
	"fmt"
)

type PathError struct {
	msg string
}

func (e PathError) Error() string {
	return fmt.Sprintf("path error: %s", e.msg)
}

func main() {
	pathError := PathError{msg: "path not found"}
	err := fmt.Errorf("path error: %w", pathError)

	// 这个和上面的 errors.Is 大体上是一样的，区别在于 Is 是严格判断相等，即两个 error 是否相等
	// 而 As 则是判断类型是否相同，并提取第一个符合目标类型的错误，用来统一处理某一类错误
	if errors.As(err, &pathError) {
		fmt.Println("path error")
	}
}
