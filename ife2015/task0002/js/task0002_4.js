var suggestData = ['Simon', 'Erik', 'Kener'];
var index = 0;
var liArr = [];

var showTipList = function () {
    $("#tips").style.display = "none";
    $("#tips").innerHTML = "";
    liArr = [];
    var searchStr = $("#searchInput").value.toLowerCase();
    if (!searchStr) {
        return;
    }
    var tipArr = suggestData.filter(function (item, index, arr) {
        return (item.toLowerCase().indexOf(searchStr) !== -1);
    });

    for (var i = 0; i < tipArr.length; i++) {
        $("#tips").innerHTML += ("<li name='" + tipArr[i] + "'>" +
            tipArr[i].replace(searchStr, "<span style='color:red;'>" + searchStr + "</span>") + "</li>");
    }

    if (tipArr.length > 0) {
        $("#tips").style.display = "block";
        liArr = $("#tips").getElementsByTagName('li');
        for (i = 0; i < liArr.length; i++) {
            addEvent(liArr[i], "click", function (e) {
                var event = e || window.event;
                event.stopPropagation();
                $("#searchInput").value = this.getAttribute("name");
                // $("#tips").style.display = "none";
            });
            addEvent(liArr[i], "mouseover", function () {
                this.style.backgroundColor = "#0088ee";
            });
            addEvent(liArr[i], "mouseout", function () {
                this.style.backgroundColor = "#fff";
            });
        }
        index = 0;
        liArr[index].style.backgroundColor = "#0088ee";
    }
};

$.on("#searchInput", "input", showTipList);

addEvent(document, "keyup", function (e) {
    var event = e || window.event;
    console.log(event.keyCode, index);
    if (event.keyCode == 38) {
        liArr[index].style.backgroundColor = "#fff";
        index = (index - 1 + liArr.length) % liArr.length;
        liArr[index].style.backgroundColor = "#0088ee";
    } else if (event.keyCode == 40) {
        liArr[index].style.backgroundColor = "#fff";
        index = (index + 1) % liArr.length;
        liArr[index].style.backgroundColor = "#0088ee";
    } else if (event.keyCode == 13){
        $("#searchInput").value = liArr[index].getAttribute("name");
    }

});

addEvent(document, "click", function(){
    $("#tips").style.display = "none";
})