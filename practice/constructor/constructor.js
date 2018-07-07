String.prototype.proper = function(){
    var first = this[0].toUpperCase();
    var rest = this.slice(1);
    return first + rest;
}

// console.log("aadflaskdjfa;lsdkjf".proper());

var IkeaFurniture = function(type, name){
    this.type = type;
    this.name = name;
}

var sofa = new IkeaFurniture("sofa", "futon");
// console.log(sofa);

IkeaFurniture.prototype.setPrice = function(price){
    this.price = price;
}

sofa.setPrice(100);

// console.log(sofa);

var Animal = function(){
    this.hasCellWall = false;
}
Animal.prototype.eat = function(){
    console.log("Nom Nom Nom")
}
Animal.prototype.sleep = function (){
    console.log("Zzzzzzzz")
}

var Dinosaur = function(){
    Animal.call(this);
    this.eat = function(){
        console.log("CHOMP CHOMP CHOMP")
    }
}
Dinosaur.prototype = Object.create(Animal.prototype);

var Mammal = function(){
    Animal.call(this);
    this.hasFur = true;

}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.lactate = function(){
    console.log("suckle noises");
}

var dog = new Mammal();
var fish = new Animal();
fish.sleep();