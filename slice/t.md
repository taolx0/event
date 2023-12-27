阅读书中 “ Unexpected side effects using slice append” 章节,完成以下题目

1. slice的结构体是什么样子的

```
type slice struct {
	ptr unsafe.Pointer // 指向被引用底层数组的指针
	len int            // 长度
	cap int            // 容量, 从ptr开始到被引用数组末尾的长度
}
```

2. 有哪些方法可以避免 第一个示例(Figure 3.10)的这个问题

Figure 3.10 的问题是: 在引用原始数组的slice上追加元素, 会导致原始数组的元素被修改

避免方法:

- 使用copy函数, 将原始数组的slice复制到一个新的slice上, 然后在新的slice上追加元素
- 使用 Full slice expressions , 限制slice的容量大小, 使得追加元素时, 不会修改原始数组的元素