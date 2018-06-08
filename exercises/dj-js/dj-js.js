var div = document.querySelector('div');
div.innerText = "Click Me";

div.style.width = "100px";
div.style.height = "100px";
div.style.border = "solid thick black";
div.align = "center";

div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "blue";
});
div.addEventListener("mousedown", function(){
    div.style.backgroundColor = "red";
});
div.addEventListener("mouseup", function(){
    div.style.backgroundColor = "yellow";
});
div.addEventListener("dblclick", function(){
    div.style.backgroundColor = "green";
});

window.addEventListener("wheel", function(){
    div.style.backgroundColor = "orange";
});

window.addEventListener("keypress", function(e){
    var key = e.keyCode;
    if(key == 98){
        div.style.backgroundColor = "blue";
    } else if (key == 114) {
        div.style.backgroundColor = "red";
    } else if (key == 121) {
        div.style.backgroundColor = "yellow";
    } else if (key == 103) {
        div.style.backgroundColor = "green";
    } else if (key == 111) {
        div.style.backgroundColor = "orange";
    } else {
        div.innerText = "you dumb";
    }
    
});

