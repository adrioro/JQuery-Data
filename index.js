$(document).ready(function () {
    var MyDiv = $("#firstDiv");
    MyDiv.click(function () {
        var divNumber = MyDiv.data("number");
        alert(divNumber);
    });
});