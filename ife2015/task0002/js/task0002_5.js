var fromBoxPos = getPosition($("#from_box"));
var toBoxPos = getPosition($("#to_box"));
var dragBoxPos = {};
var fromBoxArr = [];
var toBoxArr = [];
var dragIndex = 0;

var beginDrag = function(e){
    var event = e || window.event;
    if(event.clientX <= fromBoxPos.x || event.clientX >=  fromBoxPos.x + $("#from_box").offsetWidth
       || event.clientY <= fromBoxPos.y || event.clientY >=  fromBoxPos.y + $("#from_box").offsetHeight){
        return;
    }

    fromBoxArr = $("#from_box").getElementsByTagName("li");
    if(fromBoxArr.length == 0){
        return;
    }

    dragIndex = Math.ceil((event.clientY - fromBoxPos.y) / fromBoxArr[0].offsetHeight);
    if(dragIndex > fromBoxArr.length){
        return;
    }
    dragIndex--;
    dragBoxPos.x = event.clientX - fromBoxPos.x;
    dragBoxPos.y = event.clientY - fromBoxPos.y - dragIndex * fromBoxArr[0].offsetHeight;

    addEvent(document, "mousemove", drag);
    addEvent(document, "mouseup", endDrag);
}

var drag = function(e){
    var event = e || window.event;
    fromBoxArr[dragIndex].style.position = "absolute";
    fromBoxArr[dragIndex].style.left = "" + (event.clientX - dragBoxPos.x);
    fromBoxArr[dragIndex].style.top = "" + (event.clientY - dragBoxPos.y);
    fromBoxArr[dragIndex].style.opacity = "0.5";
}

var endDrag = function(e){
    var event = e || window.event;
    removeEvent(document, "mouseup", endDrag);
    removeEvent(document, "mousemove", drag);
    fromBoxArr[dragIndex].style.position = "";
    fromBoxArr[dragIndex].style.opacity = "1";
    if(event.clientX <= toBoxPos.x || event.clientX >=  toBoxPos.x + $("#to_box").offsetWidth
       || event.clientY <= toBoxPos.y || event.clientY >=  toBoxPos.y + $("#to_box").offsetHeight){
        return;
    }
 
    $("#to_box").appendChild(fromBoxArr[dragIndex]);
}

addEvent(document, "mousedown", beginDrag);
