// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if (Array.isArray) {
        return Array.isArray(arr);
    }
    return Object.prototype.toString.call(arr) === "Object Array";
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return typeof fn === "function";
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var dest,
        i;
    if (src instanceof Date) {
        dest = new Date();
        dest.setTime(src.getTime());
    }
    else if (isArray(src)) {
        dest = [];
        for (i = 0; i < src.length; i++) {
            dest[i] = cloneObject(src[i]);
        }
    } else if (typeof src === "object") {
        dest = {};
        for (i in src) {
            if (src.hasOwnProperty(i)) {  //去除继承的属性
                dest[i] = cloneObject(src[i]);
            }
        }
    } else {
        dest = src;
    }

    return dest;
}

// // 测试用例：
// var srcObj = {
//     a: 1,
//     b: {
//         b1: ["hello", "hi"],
//         b2: "JavaScript"
//     }
// };
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"

//学习数组、字符串、数字等相关方法，在util.js中实现以下函数
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var uniqueArr = [],
        map = {},
        i;
    for (i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            uniqueArr.push(arr[i]);
            map[arr[i]] = true;
        }
    }

    return uniqueArr;
}

// 使用示例
// var a = [1, 3, 5, 7, 5, 3];
// var b = uniqArray(a);
// console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var begin = 0,
        end = str.length - 1,
        blank = [' ', '\t'];
    while (begin <= end && blank.indexOf(str.charAt(begin)) != -1) {
        begin++;
    }

    while (begin <= end && blank.indexOf(str.charAt(end)) != -1) {
        end--;
    }
    return str.slice(begin, end + 1);
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    var reg = /^\s+|\s+$/ig;
    return str.replace(reg, "");
}

// 使用示例
// var str = '   hi!  ';
// str = trim(str);
// console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item) {
//     console.log(item);
// }
// each(arr, output);  // java, c, php, html

// // 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item, index) {
//     console.log(index + ': ' + item)
// }
// each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    return Object.keys(obj).length;
}

// 使用示例
// var obj = {
//     a: 1,
//     b: 2,
//     c: {
//         c1: 3,
//         c2: 4
//     }
// };
// console.log(getObjectLength(obj)); // 3


// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var classArr = element.className.split(/\s+/g);
    var i = classArr.indexOf(newClassName);
    if (i === -1) {
        element.className = trim(element.className + " " + newClassName);
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    var classArr = element.className.split(/\s+/g);
    var i = classArr.indexOf(oldClassName);
    if (i !== -1) {
        classArr.splice(i, 1);
        element.className = classArr.join(" ");
    }
    element.className = trim(element.className);
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var x = element.offsetLeft,
        y = element.offsetTop,
        parent = element.offsetParent;
    while (parent !== null) {
        x += parent.offsetLeft;
        y += parent.offsetTop;
        parent = parent.offsetParent;
    }
    var scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    x -= scrollLeft;
    y -= scrollTop;
    return {
        "x": x,
        "y": y
    };
}

// 实现一个简单的Query
function $(selector) {
    var node = document,
        selectorArr = selector.split(/\s+/g),
        i,
        j,
        c,
        allNode,
        attr,
        value;
    for (i = 0; i < selectorArr.length; i++) {
        if (!selectorArr[i] || !node) {
            continue;
        }
        allNode = node.getElementsByTagName('*');
        c = selectorArr[i].charAt(0);
        switch (c) {
            case '#':
                node = node.getElementById(selectorArr[i].slice(1));
                break;
            case '.':
                for (j = 0; j < allNode.length; j++) {
                    if (allNode[j].className.indexOf(selectorArr[i].slice(1)) !== -1) {
                        node = allNode[j];
                        break;
                    }
                }
                break;
            case '[':
                if (selectorArr[i].indexOf("=") !== -1) {
                    attr = selectorArr[i].slice(1, selectorArr[i].indexOf("="));
                    value = selectorArr[i].slice(selectorArr[i].indexOf("=") + 1, selectorArr[i].length - 1);
                } else {
                    attr = selectorArr[i].slice(1, selectorArr[i].length - 1);
                }
                for (j = 0; j < allNode.length; j++) {
                    if (allNode[j].getAttributeNode(attr)) {
                        if (!value || allNode[j].getAttribute(attr) === value) {
                            node = allNode[j];
                            break;
                        }
                    }
                }
                break;
            default:
                node = node.getElementsByTagName(selectorArr[i])[0];
        }
    }

    return node;
}

// // 可以通过id获取DOM对象，通过#标示，例如
// $("#adom").style.color = "#f00"; // 返回id为adom的DOM对象

// // 可以通过tagName获取DOM对象，例如
// $("a").style.color = "#0f0"; // 返回第一个<a>对象

// // 可以通过样式名称获取DOM对象，例如
// $(".classa").style.color = "#ff0"; // 返回第一个样式定义包含classa的对象

// // 可以通过attribute匹配获取DOM对象，例如
// $("[data-log]").style.color = "#00f"; // 返回第一个包含属性data-log的对象

// $("[data-time=2018]").style.color = "#0ff"; // 返回第一个包含属性data-time且值为2015的对象

// // 可以通过简单的组合提高查询便利性，例如
// $("#adom .classa").style.backgroundColor = "#eee"; // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

// addClass($(".classa"), "classrv");
// removeClass($(".classa"), "classrv");
// console.log(isSiblingNode($("a"), $("#adom")));
// console.log(isSiblingNode($("[data-log]"), $("[data-time=2018]")));
// console.log(getPosition($(".classa")));

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element["on" + event]) {
        element["on" + event] = null;
    }
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    } else
        if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
        } else {
            element["on" + event] = listener;
        }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if (element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event, listener);
    } else {
        element["on" + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, "keydown", function (e) {
        var event = e || window.event;
        if (event.keyCode === 13) {
            listener.call(element, event);
        }
    });
}


$.on = function (selector, event, listener) {
    addEvent($(selector), event, listener);
}

$.click = function (selector, listener) {
    addEvent($(selector), "click", listener);
}

$.un = function (selector, event, listener) {
    removeEvent($(selector), event, listener);
}

$.delegate = function (selector, tag, event, listener) {
    var element = $(selector);
    each(element.getElementsByTagName(tag), function () {
        addEvent(element, event, listener);
    });
}

// 使用示例：
// function logListener(){
//     console.log("data-log");
// }
// function liClicker(){
//     console.log("#lists");
// }
// $.click("[data-log]", logListener);
// $.delegate('#list', "li", "click", liClicker);
// addEnterEvent(document, logListener);

// function setCookie(cookieName, cookieValue, expiredays) {
//     console.log(document.cookie.length);

//     if(expiredays){
//         var exDate = new Date();
//         exDate.setDate(exDate.getDate() + expiredays);
//         var expireCookie = ";expires=" + exDate.toUTCString();
//     }
//     document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + expireCookie;
// }

// // 获取cookie值
// function getCookie(cookieName) {
//     if(document.cookie){
//         var begin = document.cookie.indexOf(cookieName + "="),
//             end;
//         console.log(begin);
//         if(begin !== -1){
//             begin = begin + cookieName.length + 1;
//             end = document.cookie.indexOf(";", begin);
//             return document.cookie.slice(begin, end);
//         }
//     }
// }

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