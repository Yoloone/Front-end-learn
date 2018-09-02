#JavaScript学习-基础语法

### 与Java的相同之处
1. 语句都以；结束（JavaScript不强制加；，但为了避免不必要的错误，最好加上），以`{...}`为语句块
2. 注释方式相同，单行`//`，多行`/*...*/`
3. 运算方式相同（四则运算，布尔运算，比较运算等）
4. 变量名定义方式相同，大小写敏感，使用驼峰命名方式

###与Java的不同之处
1. 变量
   - 与Java和C语言不同，JavaScript不是强类型语言，其变量本身类型不固定，是一种动态语言
   - 使用`var`来声明变量（不强制使用，若无声明则变量为全局变量，但容易引发错误）
   - 在strict模式下，变量必须使用`var`来声明，否则运行错误
     - 启用strict模式，是在JavaScript代码第一行加上`use strict`
   - 声明变量时，程序会给该变量赋初始值`undefined`
2. 数据类型
  - 共七种数据类型：`undefined`（未定义），`null`（空），`boolean`（布尔型），`number`（数字类型），`string`（字符串），`object`（对象），`symbol`（符号）
  - Number类型
     - `NaN`：not a number，无法计算时的结果，如 0 / 0；
     - `Infinity`：表示无限大，如 2 / 0；
  - 字符串类型：以`''`或`""`括起来的任意文本
3. 数组
  - 数组元素类型不固定
    - `var arr = [1, 2, 3.14, 'Hello', null, true]; 	//常用方式`
    - `var arr = new Array(1, 2, 3); //不建议，基于可读性考虑` 
  - 数组元素可用下标来访问，若数组下标越界，则返回undefined
4. 对象
  - 以key-value的形式定义，通过对象变量.属性名来访问属性
```javascript
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
```
5. == 与 ===运算符
  - == 会自动转换数据类型，结果可能会很奇怪
  - === 不会自动转换数据类型，若类型不同则返回false
  - 最好使用 ===
  - `NaN`与任何值都不相等（包括它自己），只能使用`isNaN()`来判断
6. `null` 与`undefined`
  - `null`值同java的`null`，表示空值
  - `undefined`表示未定义，通常用来判断函数参数是否传递
  - 大多数情况下应使用null值

