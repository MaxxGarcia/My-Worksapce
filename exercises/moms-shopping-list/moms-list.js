var body = document.getElementById("body");
var form = document.getElementsByName("itemForm");
var add = document.getElementById("add");
var itemStorage = localStorage.getItem("item storage");
if(itemStorage){
    itemStorage = JSON.parse(itemStorage);
} else {
    itemStorage = [];
}

console.log(itemStorage);

var displayListItem = function (text) {
    var wrapper = document.createElement("div");
    wrapper.classname = "wrapper";

    var h3 = document.createElement("h3");
    // var text = itemForm.value;
    h3.innerHTML = text;
    h3.className = "itemName";

    var xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "xButton";
    xButton.addEventListener("click", function (e) {
        e.preventDefault();
        body.removeChild(wrapper);
        var itemIndex = itemStorage.indexOf(text);
        itemStorage.splice(itemIndex, 1);
        localStorage.setItem("item storage", JSON.stringify(itemStorage));
    })
    wrapper.appendChild(xButton);
    wrapper.appendChild(h3);
    body.appendChild(wrapper);
    localStorage.setItem("item storage", JSON.stringify(itemStorage));
}

add.addEventListener("submit", function (e) {
    e.preventDefault();
    itemStorage.push(this.itemForm.value);
    displayListItem(this.itemForm.value);
})

for (let i = 0; i < itemStorage.length; i++) {
    displayListItem(itemStorage[i]);
}   
