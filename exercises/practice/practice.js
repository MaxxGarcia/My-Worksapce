var str = "Hello my name is Albert";

var change = function(){
let strArray = str.split(" "); 
 strArray.splice(4); 
 strArray[4] = "Maxx";
return strArray.join(" ");
}

console.log(change());