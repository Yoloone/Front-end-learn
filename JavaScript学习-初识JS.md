# 初识JavaScript

### JavaScript的特征
1. Web世界最流行的**脚本**语言
2. 跨平台，跨浏览器
3. 实现交互逻辑
4. node.js将其引入后端，全能型选手
###ECMAScript(ES标准)
- ECMA: Europe Computer Manufatures Association组织
- 为了让JavaScript成为全球标准，几个公司与ECMA组织制定了JavaScript标准
- 我们常说的**ES6**就是ECMAScript标准的一个版本
###JavaScript版本
- 其实就是实现了ECMAScript标准的哪一个版本
- 每个版本新增特性不同，但是JavaScript的核心代码一样
- 代码编写时要注意向上兼容，照顾老用户
###JavaScript在代码中的位置
1. 方式一：直接在HTML文件中定义，可以被嵌在网页任何地方，但通常在<head>之间
```html
<html>
<head>
  <script>
    alert('Hello, world');
  </script>
</head>
<body>
  ...
</body>
</html>
```
2. 方式二：引入JS文件，将JavaScript代码写入`.js`文件中，在`<script src="..."></script>`中引入
```html
<html>
<head>
  <script src="/static/js/abc.js"></script>
</head>
<body>
  ...
</body>
</html>
```
3. `<script type = "text/javascript"></script>`，其中type属性可省略，默认是JavaScript
4. 一个HTML文件可以引入多个JS文件，一个JS文件也可以被多个HTML文件复用，JS文件提高了JavaScript代码的复用性
###JavaScript的运行和调试
- 在HTML文件中引入JS文件，使用浏览器加载HTML页面
- 使用Chrome浏览器调试JavaScript代码，在打开设置中的开发者工具**(Ctrl + Shift + I)**，打开Console进行调试
