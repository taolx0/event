# api 接口 (https://cloud.google.com/apis/design)

http://10.186.18.11/confluence/pages/viewpage.action?pageId=38406181

## 部门

### 创建部门

POST /api/v1/departments

#### 请求参数

| 参数名  | 位置   | 类型     | 必填  | 描述   |
|:-----|:-----|:-------|:----|:-----|
| name | body | string | 是   | 部门名称 |
| desc | body | string | 否   | 部门描述 |

#### 返回参数

| 参数名  | 类型     | 描述                  |
|:-----|:-------|:--------------------|
| id   | string | 部门id                |

### 更新部门

PUT /api/v1/departments/:id

#### 请求参数

| 参数名  | 位置   | 类型     | 必填  | 描述   |
|:-----|:-----|:-------|:----|:-----|
| id   | path | string | 是   | 部门id |
| name | body | string | 是   | 部门名称 |
| desc | body | string | 否   | 部门描述 |

### 获取部门信息

GET /api/v1/departments/:id

#### 请求参数

| 参数名  | 位置｜类型 | 必填     | 描述  |
|:-----|:------|:-------|:----|
| id   | path  | string | 是   | 部门id |

#### 返回参数

| 参数名  | 类型     | 描述                  |
|:-----|:-------|:--------------------|
| id   | string | 部门id                |
| name | string | 部门名称                |
| desc | string | 部门描述                |

### 删除部门

DELETE /api/v1/departments/:id

#### 请求参数

| 参数名 | 位置   | 类型     | 必填  | 描述   |
|:----|:-----|:-------|:----|:-----|
| id  | path | string | 是   | 部门id |

### 获取部门列表

GET /api/v1/departments

#### 返回参数（数组）

| 参数名  | 类型     | 描述                  |
|:-----|:-------|:--------------------|
| id   | string | 部门id                |
| name | string | 部门名称                |
| desc | string | 部门描述                |

## 员工

### 创建员工

POST /api/v1/departments/:id/employees

#### 请求参数

| 参数名  | 位置｜类型 | 必填     | 描述  |
|:-----|:------|:-------|:----|
| id   | path  | string | 是   | 部门id |
| name | body  | string | 是   | 员工名称 |
| desc | body  | string | 是   | 员工描述 |
| age  | body  | int    | 是   | 员工年龄 |

#### 返回参数

| 参数名  | 类型     | 描述                  |
|:-----|:-------|:--------------------|
| id   | string | 员工id                |

### 批量获取指定员工

GET /api/v1/departments/:departments_id/employees

#### 请求参数 (数组)

| 参数名 | 位置｜类型 | 必填     | 描述  |
|:----|:------|:-------|:----|
| id  | body  | string | 是   | 员工id |

#### 返回参数 (数组)

| 参数名  | 类型     | 描述                  |
|:-----|:-------|:--------------------|
| id   | string | 员工id                |
| name | string | 员工名称                |
| desc | string | 员工描述                |
| age  | int    | 员工年龄                |

### 设置员工邮箱地址

POST /api/v1/departments/:department_id/employees/:employees_id/email

#### 请求参数

| 参数名           | 位置｜类型 | 必填     | 描述  |
|:--------------|:------|:-------|:----|
| department_id | path  | string | 是   | 部门id |
| employees_id  | path  | string | 是   | 员工id |
| email         | body  | string | 是   | 员工邮箱地址 |

### 获取所有部门员工

GET /api/v1/departments/employees

#### 返回参数 (数组)

| 参数名  | 类型     | 描述                  |
|:-----|:-------|:--------------------|
| id   | string | 员工id                |
| name | string | 员工名称                |
| desc | string | 员工描述                |
| age  | int    | 员工年龄                |

## 宠物

### 创建宠物

POST /api/v1/pets

#### 请求参数

| 参数名           | 位置｜类型 | 必填     | 描述  |
|:--------------|:------|:-------|:----|
| name          | body  | string | 是   | 宠物名称 |
| desc          | body  | string | 是   | 宠物描述 |
| age           | body  | int    | 是   | 宠物年龄 |

#### 返回参数

| 参数名  | 类型     | 描述                  |
|:-----|:-------|:--------------------|
| id   | string | 宠物id                |

### 喂食雍正/继续喂食雍正

POST /api/v1/departments/:department_id/pets/:pets_id/feed

#### 请求参数

| 参数名           | 位置｜类型 | 必填     | 描述  |
|:--------------|:------|:-------|:----|
| department_id | path  | string | 是   | 部门id |
| pets_id       | path  | string | 是   | 宠物id |

### 暂停喂食

POST /api/v1/departments/:department_id/pets/:pets_id/pause

#### 请求参数

| 参数名           | 位置｜类型 | 必填     | 描述  |
|:--------------|:------|:-------|:----|
| department_id | path  | string | 是   | 部门id |
| pets_id       | path  | string | 是   | 宠物id |


