package main

const (
	mutexLocked = 1 << iota // mutex is locked
	mutexWoken
	mutexWaiterShift = iota
)

func main() {
	//var a int32 = 1
	//go func() {
	//	atomic.CompareAndSwapInt32(&a, 1, 2)
	//	println(a)
	//}()
	//time.Sleep(time.Second)
	//go func() {
	//	atomic.CompareAndSwapInt32(&a, 2, 1)
	//	println(a)
	//}()
	//time.Sleep(time.Second)
	//go func() {
	//	atomic.CompareAndSwapInt32(&a, 1, 3)
	//	println(a)
	//}()

	println(mutexLocked)
	println(mutexWoken)
	println(mutexWaiterShift)
}
