var body = document.getElementById("body");
body.style.display = "flex";
body.style.flexDirection = "column";

var current = +localStorage.getItem("clicks");
var counter = document.createElement("span");
body.appendChild(counter);

var clearButton = document.createElement("button");
clearButton.innerHTML = "Plz No Click";
body.appendChild(clearButton);
clearButton.style.position = "absolute";
clearButton.style.bottom = "10px"

var timer = document.createElement("span");
timer.innerHTML = "00:00:10";
body.appendChild(timer);

document.addEventListener("click", function () {
    current = current +1;
    counter.innerHTML = current;
    localStorage.setItem("clicks", current);

})

clearButton.addEventListener("click", function () {
    current = -1;
    counter.innerHTML = current;
    localStorage.setItem("clicks", current);
    
})

