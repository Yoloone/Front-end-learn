### Ajax总结

1. 定义：Asynchronous  Javascript + XML的缩写，用于向服务器请求额外数据而无需卸载页面；虽然名称中包含XML，Ajax通信与数据格式无关，不一定是XML数据。

2. XMLHttpRequest对象（Ajax的核心）

   - XHR对象的创建

     - `var xhr = new XMLHttpRequest()`
     - `var xhr = new ActiveXObject('Microsoft.XMLHTTP')`，兼容IE

   - 请求发送

     - 启动请求

       - `xhr.open('get'/'post', url相对路径/绝对路径，是否异步发送请求的布尔值)`；
       - get请求的url若包含查询字符串，需要先使用`encodeURIComponent()`进行编码

     - 设置请求头部信息

       - `setRequestHeader(key，value)`，必须在open方法后send方法前调用；

       - 建议自定义头部字段而不使用浏览器的字段名称，否则有可能会影响服务器的响应；
       - post请求发送数据，`xhr.setRequestHeader('Content-type'，'application/x-www-form-urlencoded')`

     - 发送请求，`xhr.send(null/data)`

       - post的数据格式与查询字符串格式相同

   - 响应接收

     - 请求/响应活动阶段，使用XHR对象的readyState属性查看状态
       - 0：未初始化，未调用open
       - 1：启动，已调用open，未调用send；
       - 2：发送，已调用send；
       - 3：已接收部分响应数据；
       - 4：已接受全部响应数据；
     - readyState属性变化触发`onreadystatechange`事件，必须在open()之前指定`onreadystatechange`的事件处理程序才可保证跨浏览器兼容性；
     - 收到响应后，响应数据会自动填充XHR对象的属性，相关属性如下：
       - status: 响应的HTTP状态；
       - responseText：响应主体文本，与内容类型无关；
       - responseXML：仅返回内容类型（text/xml，application/xml）是xml的数据文本；
       - statusText：HTTP状态说明；

3. XMLHttpRequest 2级

   - 进度事件
     - onloadstart：接收响应数据的第一个字节时触发
     - **onload**：接收到完整响应数据时触发，用于替代onreadystatechange事件
     - onprogress: 接收响应期间持续不断触发，用于显示进度
     - onerror：请求发生错误时触发；
     - onabort：因调用abort()方法而终止连接时触发；
     - onloadend：通信完成或触发error，abort，load事件后触发
     - 事件处理程序接收event对象，event对象的target属性指向XHR对象；

   - FormData
     - 为序列化表单以及创建于表单格式相同的数据提供便利
     - 用法：`var data =  new FormData(); data.append(key, value)`
     - 可直接将FormData实例直接传给XHR的send方法；

4. 实例代码

   ```javascript
   var myAjax = function (option) {
       var opt = {
           url: '',
           method: 'get',
           data: {},
           success: function () { },
           error: function () { },
       };
       for (var i in option) {
           if (option.hasOwnProperty(i)) {
               opt[i] = option[i];
           }
       }
       if (opt.url) {
           var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveObject('Microsoft.XMLHTTP');
           // 响应处理
           xhr.onload = function (event) {
               if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) { // 304代表请求的资源并未被修改可以使用浏览器中缓存的版本
                   if (typeof opt.success === 'function') {
                       opt.success.call(xhr, JSON.parse(xhr.responseText));
                   }
               } else {
                   if (typeof opt.error === 'function') {
                       opt.error.call(xhr, xhr.responseText);
                   }
               }
           }
   
           // xhr.onreadystatechange = function () {
           //     if (xhr.readyState === 4) {
           //         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
           //             if (typeof opt.success === 'function') {
           //                 opt.success.call(xhr, JSON.parse(xhr.responseText));
           //             }
           //         } else {
           //             if (typeof opt.error === 'function') {
           //                 opt.error.call(xhr, xhr.responseText);
           //             }
           //         }
           //     }
           // }
   
           // 发送请求
           var dataArr = [];
           for (var i in opt.data) {
               dataArr.push(encodeURIComponent(i) + '=' + encodeURIComponent(opt.data[i]));
           }
           var method = opt.method.toLowerCase();
           var url = opt.url;
           if (opt.method === 'get') {
               url = dataArr.length > 0 ? url + '?' + dataArr.join('&') : url;
               xhr.open(method, url, true);
               xhr.send(null);
           } else if (opt.method == 'post') {
               xhr.open(method, url, true);
               xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
               xhr.send(dataArr.join('&')); //post数据的格式与查询字符串格式相同
               // var formData = new FormData();
               // for (var i in opt.data) {
               //     formData.append(i, opt.data[i]);
               // }
               // xhr.send(formData);
           }
       }
   }
   var option = {
       url: 'https://www.apiopen.top/femaleNameApi',
       data: {
           page: 2
       },
       success: function (res) {
           console.log(res);
       }
   }
   myAjax(option);
   ```

   