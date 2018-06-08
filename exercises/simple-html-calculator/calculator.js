

document.getElementById("add").addEventListener("submit", function(e){
    e.preventDefault();
    var a = document.addInfo.add1.value;
    var b = document.addInfo.add2.value;
    var result = Number(a) + Number(b);
    console.log(result);
    document.getElementById("result").innerHTML=  result;  

})

document.getElementById("subtract").addEventListener("submit", function(e){
    e.preventDefault();
    var a = document.subtractInfo.subtract1.value;
    var b = document.subtractInfo.subtract2.value;
    var result = Number(a) - Number(b);
    console.log(result);
    document.getElementById("result").innerHTML=  result;  

})

document.getElementById("multiply").addEventListener("submit", function(e){
    e.preventDefault();
    var a = document.multiplyInfo.multiply1.value;
    var b = document.multiplyInfo.multiply2.value;
    var result = Number(a) * Number(b);
    console.log(result); 
    document.getElementById("result").innerHTML=  result;  

})