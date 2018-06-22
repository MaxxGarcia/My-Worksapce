// function Animal(name){
//     this.name = name
//     this.hasCellWall = false;
// }

// Animal.prototype.makeSound = function(sound){
//     console.log(`${this.name} goes ${sound}`)
// }
class Animal{
    constructor(name){
        this.name = name;
        this.hasCellWall = false;
    }
    makeSound(sound){
        console.log(`${this.name} goes ${sound}`)
    }
}



// function Mammal(name){
//     Animal.call(this, name);
//     this.hasfur = true;
// }

// Mammal.prototype = Object.create(Animal.prototype);
class Mammal extends Animal{
    constructor(name){
        super(name);
        this.hasFur = true;
    }
    dance(){
        console.log("awwwww ya shake them hips")
    }
}


// Mammal.prototype = Object.create(Animal.prototype);

const dog = new Mammal("barkie");
// dog.makeSound("burb")
// dog.dance();
// console.log(dog)

class Format {
    reverse(str){
        return str.split("").reverse().join()
        
    }
}

const formatter = new Format();
console.log(formatter.reverse("test"));

 