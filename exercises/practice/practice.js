var button = document.createElement("button");
var button = document.createElement("button");
button.innerText = "get pressd";

button.addEventListener("click", function(event){
    this.style.backgroundColor = "blue";
})

body.appendChild(button);