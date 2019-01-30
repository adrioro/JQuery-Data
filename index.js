$(document).ready(function () {
    var MyDiv = $("#firstDiv");
    MyDiv.click(function () {
        var divNumber = MyDiv.data("number");
        alert(divNumber);
    });
});

$(document).ready(function () {
    var MySecondDiv = $("#secondDiv");
    MySecondDiv.click(function () {
        var divNumber = MySecondDiv.data("date");
        alert(divNumber);
    });
});