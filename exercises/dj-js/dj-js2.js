var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var body = document.querySelector('body');
var audio = document.querySelector('audio');

audio.style.position = "absolute";
audio.style.top = "250px";


one.innerText = "Hover me bby";
two.innerText = "Hover me bby";
three.innerText = "Hover me bby";
four.innerText = "Hover me bby";
five.innerText = "Hover me bby";
six.innerText = "Hover me bby";



body.style.display = "flex";
body.style.flexDirection = "row";

one.style.flex = "1";
two.style.flex = "1";
three.style.flex = "1";
four.style.flex = "1";
five.style.flex = "1";
six.style.flex = "1";

one.style.height = "200px";
two.style.height = "200px";
three.style.height = "200px";
four.style.height = "200px";
five.style.height = "200px";
six.style.height = "200px";


one.style.border = "solid thick black";
two.style.border = "solid thick black";
three.style.border = "solid thick black";
four.style.border = "solid thick black";
five.style.border = "solid thick black";
six.style.border = "solid thick black";


one.align = "center";
two.align = "center";
three.align = "center";
four.align = "center";
five.align = "center";
six.align = "center";

one.style.transition = "all 0.5s ease-in-out";
two.style.transition = "all 0.5s ease-in";
three.style.transition = "all 0.5s ease-out";
four.style.transition = "all 0.5s ease";
five.style.transition = "all 0.5s linear";
six.style.transition = "all 0.5s ease-in-out";
audio.style.transition = "all 5s ease-in-out";

let hoverArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
// l\[Math.floor(Math.random() * hoverArray.length)];


one.addEventListener("mouseover", function(){
    this.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    three.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    this.style.boxShadow = "0px 10px 5px 0 #999";
    this.style.borderRadius = "0%";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)]; 
});
one.addEventListener("mouseleave", function(){
    this.style.boxShadow = "none";
    this.style.borderRadius = "50%";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];; 
});

two.addEventListener("mouseover", function(){
    this.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
     four.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    this.style.boxShadow = "0px 10px 5px 0 #999";
    five.style.borderRadius = "10%";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});
two.addEventListener("mouseleave", function(){
    this.style.boxShadow = "none";
    this.style.margin = "10px";
    this.style.transitionTimingFunctio = "cubic-bezier(0.1, 0.7, 1.0, 0.1)";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});

three.addEventListener("mouseover", function(){
    this.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    five.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    this.style.boxShadow = "0px 10px 5px 0 #999";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});
three.addEventListener("mouseleave", function(){
    this.style.boxShadow = "none";
    six.style.opacity = "1";
    this.style.borderRadius = "15%";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});

four.addEventListener("mouseover", function(){
    this.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    six.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];

    this.style.boxShadow = "0px 10px 5px 0 #999";
    this.style.alignSelf = "center";
    this.style.flex = "2";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});
four.addEventListener("mouseleave", function(){
    this.style.boxShadow = "none";
    this.style.flex = "3";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});

five.addEventListener("mouseover", function(){
    this.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    two.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    this.style.boxShadow = "0px 10px 5px 0 #999";
    four.style.flex = "1";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});
five.addEventListener("mouseleave", function(){
    this.style.boxShadow = "none";
    two.style.margin = "0px";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});

six.addEventListener("mouseover", function(){
    this.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    one.style.backgroundColor = hoverArray[Math.floor(Math.random() * hoverArray.length)];
    this.style.boxShadow = "0px 10px 5px 0 #999";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});
six.addEventListener("mouseleave", function(){
    this.style.boxShadow = "none";
    this.style.opacity = "0.1";
    this.style.color = hoverArray[Math.floor(Math.random() * hoverArray.length)];
});

audio.addEventListener("mouseleave", function(){
    this.style.boxShadow = "0px 10px 5px 0 #999";
    this.style.borderRadius = "200%";
    this.style.opacity = "0";
    this.style.color = hover;
});

sw
