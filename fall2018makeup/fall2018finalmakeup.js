$(".menu").click(function() {
    $(this).next("#stories").slideToggle("slow");
    $(this).next("#colors").slideToggle("slow");
});
let story = ("story0.txt");
$("#stories").val(story);
$("#story").load(story);




let lightpink = document.querySelector("#lightpink");
let lightsalmon = document.querySelector("#lightsalmon");
let source = document.querySelector("#source");


lightpink.onclick = function (e){
    source.style.background = "lightpink";
    
};
lightsalmon.onclick = function(e) {
    source.style.background = "lightsalmon";
};
let i = 0;
$("#currentcount").text(i);
$("button").click(function(){
    
    i++;

    $("#currentcount").text(i);
});