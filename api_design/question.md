Q: 针对以下接口，请问是否需要考虑幂等，如需要考虑，请简述幂等的实现方式

1. 为爱可生公司创建一个研发部
2. 删除爱可生研发部

A:

1. 需要考虑幂等, 避免重复创建研发部
2. 不需要考虑幂等，因为可以通过唯一id删除记录，多次调用删除接口，返回内容一致，不会有问题

Q: 针对以下接口，请简述发生什么样的变更时需要升级接口(即不向后兼容)

为爱可生的研发部批量创建员工，且员工信息从csv文件导入

A:

字段变更，如增/减字段，字段类型变更，字段名变更