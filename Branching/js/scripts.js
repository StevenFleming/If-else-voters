$(document).ready(function() {
    var age = parseInt(prompt("How Old IS YUhs"));

    if (age>=18){
        $('#vote').show();
    } else {
        $('#under-18').show();
    }
});
