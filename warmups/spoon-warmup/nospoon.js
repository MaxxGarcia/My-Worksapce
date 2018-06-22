var phone = {
    color: "purple",
    price: "expensive",
    isSamsung: true,
}
var headphones = {
    brand: "bose",
    isNew: false,
    repairCount: 4,
    use: function(){
        console.log("What is this music you speak of? I only know the all mighty power of audiobooks")
    }
}
var laptop = {
    ownedByUser: false,
    adapterIncluded: false,
    chargerIncluded: true,
    features: ["screen", "touch pad", "weird touch bar"]
}
var shirt = {
    isCool: true,
    isIroned: true && false,
    size: "xxl"
}

var neighbor = {
    isHere: false,
    isLate: undefined,
    NumberOfDamagedBones: 1,
}

var table = {
    isWood: true,
    isFinished: true,
    size: 2,
}

var window = {
    isBroken: true,
    fixed: function(){
            if (this.isBroken === true) {
                console.log("Then fix it dear Henry. Dear Henry")
                return false;
        }   else {
                console.log("With what shall I fix it dear Ira. Dear Ira.")
                return true;
        }
    }
}

window.fixed();

var imaptience = {
    isPresent = true
}
