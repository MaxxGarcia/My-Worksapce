class PenguinParty{
    constructor(){
     this.population = 1000000;
     this.party = "Penguin Party";
     this.stillStanding = true;
    }
    sendNuke(){
        let hitOrMiss = coinFlip();
        if (hitOrMiss === 1){
            // onMiss(this.party);
            console.log(`The ${this.party} nuke the communists but missed, bombing all the sea life in the ocean`);
        } else if (hitOrMiss === 2){
            // onHit(this.party);
            communists.population -= (Math.floor(Math.random() * (1000000 - 10000)) +10000);
            console.log(`The ${this.party} nuked the communists and decimated the population. Only ${communists.population} of the population remains`);
        }
    }
}

class CommunistParty{
    constructor(){
        this.population = 1000000;
        this.party = "Communist Party";
        this.stillStanding = true;
    }
    sendNuke(){
       let hitOrMiss = coinFlip();
        if (hitOrMiss === 1){
            // onMiss(party);
            console.log(`The ${this.party} nuke the penguins but missed, bombing all the sea life in the ocean`);
        } else if (hitOrMiss === 2){
            // onHit(party);
            penguins.population -= (Math.floor(Math.random() * (1000000 - 10000)) +10000);
            console.log(`The ${this.party} nuked the penguins and decimated the population. Only ${penguins.population} of the population remains`);
        }
    }
}

function coinFlip(){
   return Math.floor((Math.random() * 2) +1)
}

const penguins = new PenguinParty();
const communists = new CommunistParty();

function war(){
    goesFirst = coinFlip();
    if (goesFirst = 1){
        console.log("\n\nThe penguins fire the first nuke this round!");
        penguins.sendNuke();
        if (communists.population > 0){
            console.log("The communists retaliate with thier own nuke!");
            communists.sendNuke();
            if (penguins.population <= 0){
                console.log("The last of the communist invaders is blasted away. The penguins are safe for now...")
                penguins.stillStanding = false
            }
        } else {
            console.log("The last of the communist invaders is blasted away. The penguins are safe for now...")
            communists.stillStanding = false
        }
    } else if (goesFirst = 2){
        console.log("\n\nThe communists fire the first nuke this round!");
        communists.sendNuke();
        if (penguins.population > 0){
            console.log("The penguins retaliate with thier own nuke!");
            penguins.sendNuke();
            if (communists.population <= 0){
                console.log("The last of the communist invaders is blasted away. The penguins are safe for now...")
                communists.stillStanding = false
            }
        }else {
            console.log("The final penguin is burned to a nuclear husk. The Antartic will never be the same again...")
            penguins.stillStanding = false
        }
    }
    // console.log("Round end, both sides recollect themselves in this moment of peace\n\n\n")
}

while (penguins.stillStanding && communists.stillStanding) {
    war();
}


// penguins.population -= (Math.floor(Math.random() * (1000000 - 10000)) +10000);
// console.log(penguins.population)

