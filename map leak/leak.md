1. 为什么使用 delete(map, key) 删除 map 内的数据达不到预期缩容效果？
    - 因为map bucket的数量只会增加,不会减少,所以即使删除了数据,也不会减少bucket的数量,所以内存也不会减少

2. 有什么方式可以对问题 1 中提到的问题进行优化？
    - 重新创建一个map，然后将原来的map的数据复制到新的map中。
    - 使用指针类型的map,可以有效的减少内存的占用