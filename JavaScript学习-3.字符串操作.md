# JavaScript学习-字符串操作

1. JavaScript的字符串是由`''`、`""`括起来的文本中
  - 如果文本中有`''`，则使用`""`包围，如`"I'm OK"`；
  - 如果文本中有`""`，则使用`''`包围，如`'he said "I like cats"'`；
  - 如果文本中有特殊字符，也需要转义，常见转义序列列表如下：
|Code|Output|
|:-----:|:----:|
|\'|	单引号|
|\"|	双引号|
|\\\\|	反斜杠符|
|\n|	换行符|
|\r|	回车符|
|\t|	制表符|
|\b|退格符|
|\f|	换页符|

2. 多行字符串，可使用``包围起来（ES6新特性）
3. JavaScript的字符串连接操作
  - 使用 + 或+=操作符进行连接（同java）
  - 使用模板字符串`${}`（ES6新特性）
  ```JavaScript
  var name = '小明';
  var age = 20;
  var message = `你好, ${name}, 你今年${age}岁了!`;
  ```
4. JavaScript的字符串是不可变的（同java），可使用下标来访问字符串中的字符，但不可通过索引修改字符串的内容
5. 通过`s.length`获取字符串长度
6. 常用字符串函数（同java）

  - toUpperCase()
  - toLowerCase()
  - substring()
  - indexOf()

