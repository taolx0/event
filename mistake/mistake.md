## 阅读书中 Control Structures 章节随机2个小case，并运行资料内的代码示例，给出自己的解释

1. for range 循环的value是切片的副本，修改副本，不会影响切片本身，只会修改副本的值。如果想要修改切片的值，需要使用索引，或者指针。

```
func TestErrIterateRangeCopyRange(t *testing.T) {
	accounts := []account{
		{balance: 100.},
		{balance: 200.},
		{balance: 300.},
	}
	for _, a := range accounts {
		a.balance += 1000
		t.Log(a.balance)
		t.Log(accounts[0].balance)
	}
	assert.NotEqual(t, 1100., accounts[0].balance)
	assert.NotEqual(t, 1200., accounts[1].balance)
	assert.NotEqual(t, 1300., accounts[2].balance)
}
```

```
func TestIterateRange(t *testing.T) {
	accounts := []account{
		{balance: 100.},
		{balance: 200.},
		{balance: 300.},
	}
	for i := range accounts {
		accounts[i].balance += 1000
		t.Log(accounts[i].balance)
	}
	assert.Equal(t, 1100., float64(accounts[0].balance))
	assert.Equal(t, 1200., float64(accounts[1].balance))
	assert.Equal(t, 1300., float64(accounts[2].balance))
}
```

2. for 循环嵌套 switch,select. switch ,select 内部 break 只会跳出 switch,select，不会跳出 for 循环。使用标签跳出 for 循环。

```
func TestNestSwitchWithLoop(t *testing.T) {
Loop:
	for i := 0; i < 5; i++ {
		fmt.Printf("%d ", i)
		switch i {
		default:
		case 2:
			break Loop
		}
	}
}
```

## 可阅读书中 Optimizations 章节随机1个小case，可忽略

Stack vs. heap

变量被分配到 stack 还是 heap 上,只有编译器知道,编译器推断如果变量在函数外部被引用，那么它必须在 heap
上分配，如果函数返回值没有被外部引用，那么它可以在 stack 上分配。stack 相比 heap，不需要 GC,所以更加快。

现代CPU 对于值的复制也很高效。

对于大变量，一般会分配在heap上。

不必过早优化，可读性优先级高于性能。
