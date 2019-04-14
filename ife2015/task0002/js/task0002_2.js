
var showLastTime = function(){
    var timeStr = $("#timeInput").value;
    var timeReg = /\d{4}\-\d{2}\-\d{2}/;
    if(!timeReg.test(timeStr)){
        $("#showLastTime").innerHTML = "请输入正确日期格式！YYYY-MM-DD";
        return;
    }

    var timeArr = timeStr.split("-");
    timeArr = timeArr.map(function(item, index, array){
        return parseInt(item, 10);
    });
    var currentTime = new Date(timeArr[0], timeArr[1] -  1, timeArr[2]);
    var lastTime = Math.abs(currentTime.getTime() - Date.now());
    lastTime = Math.floor(lastTime / 1000);
    var lastYear = Math.floor(lastTime / (3600 * 24 * 365));
    lastTime = Math.floor(lastTime - lastYear * (3600 * 24 * 365));
    var lastMonth = Math.floor(lastTime / (3600 * 24 * 30));
    lastTime = Math.floor(lastTime - lastMonth * (3600 * 24 * 30));
    var lastDay = Math.floor(lastTime / (3600 * 24));
    lastTime = Math.floor(lastTime - lastDay * 3600 * 24);
    var lastHour = Math.floor(lastTime / 3600);
    lastTime = lastTime - lastHour * 3600;
    var lastMinute = Math.floor(lastTime / 60);
    var lastSecond = Math.floor(lastTime % 60);

    $("#showLastTime").innerHTML = "距离" + timeStr + "还有" + lastYear +"年" + lastMonth + "月" + lastDay + "日" +
       lastHour + "时" + lastMinute + "分" + lastSecond + "秒";

    setTimeout(showLastTime, 1000);
};

$.click("#submitBtn", showLastTime);