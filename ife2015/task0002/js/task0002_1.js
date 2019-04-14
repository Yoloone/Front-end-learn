
var getHobbies = function(e){
    var splitReg = /\s*[,;\s，、；]\s*/g;
    var arr = $("#hobbyInput").value.split(splitReg);
    arr = uniqArray(arr);
    var hobbyArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i]){
            hobbyArr.push(arr[i]);
        }
    }
    $("#warningText").style.display = "none";
    $("#showHobby").innerHTML = "";
    if(hobbyArr.length === 0) {
        $("#warningText").style.display = "block";
        $("#warningText").innerHTML = "请至少输入一个兴趣爱好";
    }else if(hobbyArr.length > 10){
        $("#warningText").style.display = "block";
        $("#warningText").innerHTML = "最多输入10个兴趣爱好";
    }else{
        var hobbyHTML = "";
        for(var i = 0; i < hobbyArr.length; i++){
            hobbyHTML = hobbyHTML + "<label>" + hobbyArr[i] + "</label>"
                        + "<input type='checkbox'>";
        }
        $("#showHobby").innerHTML = hobbyHTML;
    }
}
$.click("#processBtn", getHobbies);
$.on("#hobbyInput", "input", getHobbies);
