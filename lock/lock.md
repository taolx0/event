### 什么是悲观锁和乐观锁如何实现并各适用什么场景？

悲观锁: 操作共享资源前加锁，比如 golang 的 互斥锁和读写锁。因为悲观锁是在操作共享变量前加锁，对共享变量占用的时间较长，适用于写多读少的场景。

乐观锁: 操作共享资源前不加锁，但是在变更值之前会判断，在拿到变量和修改变量的这段时间，是否有其他线程修改了变量。如果有，就重试，如果没有，就修改变量。
乐观锁没有真正的锁，只是通过判断变量是否被修改来实现的。适用于读多写少的场景。

golang 的 sync/atomic 包中的 func CompareAndSwapInt32(addr *int32, old, new int32) (swapped bool) 函数就是乐观锁的实现。
通过比较 addr 的值和 old 的值是否相等,决定是否更新 addr 的值为 new 的值，就是所谓的 CAS。

但是如下面的代码所示的 ABB 问题,如果想要解决这个问题(如果是更新数据库表记录，貌似也没啥问题)，就需要引入一个递增的数，就是所谓的版本号机制。

   ```go
package main

import (
	"sync/atomic"
	"time"
)

func main() {
	var a int32 = 1
	go func() {
		atomic.CompareAndSwapInt32(&a, 1, 2)
		println(a)
	}()
	time.Sleep(time.Second)
	go func() {
		atomic.CompareAndSwapInt32(&a, 2, 1)
		println(a)
	}()
	time.Sleep(time.Second)
	go func() {
		atomic.CompareAndSwapInt32(&a, 1, 3)
		println(a)
	}()
}

   ```

### go 的 sync.Mutex 的实现使用了哪些方式减少了 goroutine 上下文切换并避免出现饥饿问题



