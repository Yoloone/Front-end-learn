##JavaScript学习-事件
#### 事件流
1. 事件：文档或浏览器窗口中发生的特定的交互瞬间。JavaScript与HTML交互都是通过事件来实现的。
2. 事件流：页面中接收事件的顺序
3. 事件流分类
   - 事件冒泡流（IE）：最开始由最具体的元素（嵌套最深）接收事件，逐级向上传播给最不具体的节点（最后到达document）
   - 事件捕获流（Netscape）：与冒泡流相反，最开始由最不具体的节点接收事件，最具体的节点最后接收到事件
####事件处理程序
分为三种方式，DOM0和DOM2级事件处理程序可以添加多个事件，事件按照顺序进行
1. HTML事件处理程序
  - 事件内嵌在HTML结构中
  - 缺点：JavaScript与HTML紧耦合
```html
<body>
	<input type="button" value="按钮1" onclick="showMessage()">
	<script type="text/javascript">
		function showMessage(){
			alert('hhhh');
		}
	</script>
</body>
```
2. DOM0级事件处理程序
  - 将函数赋值给元素的事件处理程序的属性
  - 传统的最常用方式
  - 优点：简单，跨浏览器
```html
<body>
	<input type="button" value="按钮2" id="btn2">
	<script type="text/javascript">
		var btn2 = document.getElementById('btn2');
		btn2.onclick = function(){
			alert(this.value);
		};
		btn2.onclick = null;//删除onclick事件
	</script>
</body>
```
3. DOM2级事件处理程序
  - 通过addEventListener和removeEventListener函数来添加和删除事件处理程序
  - addEventListener和removeEventListener函数的参数必须一致
  - 参数：要处理的事件名（注意不加`on`），事件处理程序函数，布尔值（true：事件捕获阶段处理，false：事件冒泡阶段处理）
```html
<body>
	<input type="button" value="按钮3" id="btn3">
	<script type="text/javascript">
		function showMessage(){
			alert('hhhh');
		}
		var btn3 = document.getElementById('btn3');
		btn3.addEventListener('click', showMessage, false);
		btn3.removeEventListener('click', showMessage, false);
	</script>
</body>
```
4. IE事件处理程序
  - 通过attachEvent和detachEvent函数来添加和删除事件处理程序
  - attachEvent和detachEvent函数的参数必须一致
  - 参数：要处理的事件名（注意加`on`），事件处理程序函数
```html
<body>
	<input type="button" value="按钮4" id="btn4">
	<script type="text/javascript">
		function showMessage(){
			alert('hhhh');
		}
		var btn4 = document.getElementById('btn4');
		btn4.attachEvent('onclick', showMessage);
		btn4.detachEvent('onclick', showMessage);
	</script>
</body> 
```
####事件对象
1. event：触发事件后将生成事件对象，事件对象中包含该事件的详细信息
2. DOM中的事件对象
- 常用属性和方法
  - target属性：触发事件的元素
  - type属性：事件类型，如click事件等
  - stopPropagation方法：阻止事件冒泡
  - preventDefault方法：阻止元素默认行为，如阻止a元素在点击时的默认跳转