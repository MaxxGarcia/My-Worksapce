class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "Big";
        this.hasStar = false;
        this.gameActive = true;

    }
    setName(namePicked){
       this.name = namePicked
    }
    gotHit(){
        if(this.hasStar){
            this.hasStar = false;
        }else if(this.status === "Powered Up"){
            this.status = "Big";
        }else if (this.status === "Big"){
            this.status = "Small";
        }else if (this.status === "Small"){
            this.status = "Dead";
            this.gameActive = false;
            console.log(`\n${newPlayer.name} has died!\n\n GAME OVER\n`)
            clearInterval(myIntervalID);
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big";
        }else if (this.status === "Big"){
            this.status = "Powered Up";
        }else if (this.status === "Powered Up"){
            this.hasStar = true; 
        }
    }
    addCoin(){
        this.totalCoins += 1;
    }
    print(){
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nStar: ${this.hasStar}\n\n`)
    }
}

const newPlayer = new Player();
newPlayer.setName("Mario")

const randomNumber= () => {
    let number = Math.floor(Math.random() * 3);
    if (number === 0){
        console.log(`${newPlayer.name} takes some damage!\n`);
        newPlayer.gotHit();
        newPlayer.print();
    } else if (number === 1){
        console.log(`${newPlayer.name} collects a powerup!\n`);
        newPlayer.gotPowerup();
        newPlayer.print();
    } else if (number === 2){
        console.log(`${newPlayer.name} collects a coin!\n`);
        newPlayer.addCoin();
        newPlayer.print();
    }
}; 

myIntervalID = setInterval(randomNumber, 1000);

