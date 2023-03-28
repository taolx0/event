### 1. 为什么需要sync.Map, mutex+原生map的实现方式会有什么问题?

在读多写少的场景下，比mutex+原生map性能更好，因为sync.Map读取 read 字段里的 value 不需要申请锁。

mutex+原生map增加心智负担，需要自己去LOCK，UNLOCK，新司机可能会写出死锁代码，比如写锁里嵌套读锁...

### 2. sync.Map是否适用于所有并发场景,如果不是请给出适用的场景?

sync.Map更加适合读多、更新多、删多、写少的场景。

不适合频繁写的场景，这种场景，sync.Map不仅基本等价于mutex+map，且需要承担 read 和 dirty 字段之间数据转换的额外开销。如果数据量很大，read
和 dirty 字段之间数据转换还可能会产生性能抖动。

