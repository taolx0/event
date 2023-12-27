package main

import (
	"context"
	"fmt"
	"time"
)

func worker(ctx context.Context, done chan bool) {
	for {
		select {
		case <-ctx.Done():
			fmt.Println("Worker stopped")
			done <- true
			return
		default:
			fmt.Println("working...")
			time.Sleep(time.Second)
		}
	}
}

func main() {
	// 创建一个带有取消功能的上下文
	ctx, cancel := context.WithCancel(context.Background())

	// 创建一个用于通知主goroutine工作goroutine已经停止的通道
	done := make(chan bool)

	// 启动工作goroutine
	go worker(ctx, done)

	// 让工作goroutine工作一段时间
	time.Sleep(3 * time.Second)

	// 停止工作goroutine
	fmt.Println("Stopping worker...")
	cancel()

	// 等待工作goroutine停止
	<-done
	fmt.Println("Worker has stopped")
}
