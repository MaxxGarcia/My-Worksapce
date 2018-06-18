var rs = require('readline-sync');

var possibleItems = ["Chocky Mulk", "Bananna Hammock Hat", "Tall Ants in a Jar", "Something that is maybe a primitive key", "Dead fruit", "Living Fruit", "a whole lot of nothing"];

var playing = true;

var player = {
    name: "",
    hp: 200,
    exp: 0,
    item: [],
    attack: 1

}

var Enemy = function (name, item){
    this.name = name,
    this.hp = Math.floor(Math.random() * 10),
    this.item = item,
    this.attack = Math.floor(Math.random() * 10)
}

player.name = rs.question("welcome! What is your name?\n");
console.log("\nThis is one heckin forest you find yourself in. Dark, mysterious, and seemily endless.\n")

while (playing){
    var isWalking = rs.question("\nPress 'W' to begin walking or enter 'print' to look at your inventory.", {limit: ["w","print"], limitMessage: "That's not an option\n"});
    if (isWalking === "w"){
        var enemy = Math.floor(Math.random()*3);
        if (enemy = 1){
            console.log("\nYou have encountered a baddie\n")
            var inBattle = true;
            var enemyName = rs.question("\nWould you grace your latest enemy with a name? Just say 'no' if not.\n");
            var enemyItem = possibleItems[Math.floor(Math.random() * possibleItems.length)];
            if (enemyName == "no") {
                enemyName = "Poor No Name McGee"
            }
            while (inBattle) {
            var newEnemy = new Enemy(enemyName, enemyItem)
            var preBattle = ["Fight", "Run"]
            var encounter = rs.keyInSelect(preBattle, "\nLooks like " + newEnemy.name + " wants a fight. \n\n Fight or Run?\n");
                if (encounter === 1){
                    console.log("\nYou run away, but the " + newEnemy.name + " strikes at you during your escape..")
                    var hit = Math.floor(Math.random()*1);
                    if(hit === 1){
                        console.log("hitting you for " + newEnemy.attack + " damage.\n")
                        inBattle = false;
                        continue;
                    } else {
                        console.log("you nibly make your escape. So lucky!\n")
                        inBattle = false;
                        continue;
                    }
                } else if (encounter === 0){
                    var fighting = true;
                    while (fighting) {
                        console.log("You punch " + newEnemy.name + " and " + newEnemy.name + " punches you");
                    player.hp = player.hp - newEnemy.attack;
                    newEnemy.hp = newEnemy.hp - player.attack;
                    if(player.hp <= 0){
                        console.log("\nLooks like " + newEnemy.name + " was too much for you...\n\n\n GAME OVER" )
                        fighting = false;
                        inBattle = false;
                        playing = false;

                    } else if (newEnemy.hp <= 0){
                        player.attack ++;
                        player.item.push(newEnemy.item);
                        var rest = ["Yes, I'm tired", "Nah, I'm supa strong"];
                        var victory = rs.keyInSelect(rest, "\nWow you killed " + newEnemy.name + " and they dropped " + newEnemy.item + " and your attack prowess increases with another victims blood on your hands.\n\nWould you like to take a rest?\n");
                        if (victory === 0){
                            console.log("\nYou rest until your HP is restored.\n")
                            player.hp =100;
                            fighting = false;
                            inBattle = false;
                        } else {
                            fighting = false;
                            inBattle = false;
                        }

                    } else continue; 
                }
                } else {
                    console.log("\nCancel wasn't an option. Looks like we are defaulting to running like a sissy.\n")
                    console.log("\nYou run away (like a sissy), but the " + newEnemy.name + " strikes at you during your 'escape'..")
                    var hit = Math.floor(Math.random()*1);
                    if(hit === 1){
                        console.log("hitting you for " + newEnemy.attack + " damage. You cry on the inside and the outside.\n")
                        inBattle = false;
                        continue;
                    } else {
                        console.log("you somehow make your escape. " + newEnemy.name + " was probably grossed out by your tears.\n")
                        inBattle = false;
                        continue;
                    }
                }
        }
        } else {
            console.log("Nothing to see around here. Lets carry on.");
            continue;
        }
    } else if (isWalking === "print"){
        console.log(player);
    }
    }