1. 请使用 runtime/trace 包，写一个使用trace的例子

```
func main() {
	// 创建 trace 文件
	f, err := os.Create("trace.out")
if err != nil {
		fmt.Println("Error creating trace file:", err)
    return
        }
	defer f.Close()

	// 启动 trace
	err = trace.Start(f)
if err != nil {
		fmt.Println("Error starting trace:", err)
    return
        }
	defer trace.Stop()

	// 模拟一些工作负载
	for i := 0; i < 10; i++ {
go func(i int) {
			fmt.Printf("Goroutine %d running\n", i)
			time.Sleep(time.Second)
		}(i)
	}

	// 等待所有 goroutine 结束
	time.Sleep(11 * time.Second)
}
```

2. 请描述 runtime/trace 包的使用场景

debug代码,程序链路追踪,性能分析,性能优化
