var rs = require("readline-sync");

var gameState = {
    
}

var win = false;
var loose = false;
var hasKey = false;
var opening = ["Look around", "Nothing"];
var room = ["door", "doormat", "the hole"];
var door = ["open", "attack", "attack relentlessly"];
var doormat = ["pick it up"];
var hole = ["look in it", "stick my hand...arm... in it"];


while (!win && !loose) {
    var awakening = rs.keyInSelect(opening, "There is a fifth dimension beyond that which is known to man. It is a dimension as vast as space and as timeless as infinity. It is the middle ground between light and shadow, between science and superstition, and it lies between the pit of man's fears and the summit of his knowledge. This is the dimension of imagination. It is an area which we call the Twilight Zone. \nYou find yourself in a sparce room. \nWhat would you like to do?");
    if (awakening === 1){
        console.log("I guess you'll die....")
        loose = true;
        continue;
    } else if (awakening === -1) {
        console.log("No backing out!")
        continue;
    }else if (awakening === 0) {
        var lookingAround = true; 
        while (lookingAround) {
            var lookingAt = rs.keyInSelect(room, "\nThis room has a door, a doormat, a hole in the wall, and some words on the wall that say 'GET OUT QUICK' in a slippery red. \nWould you like to take a closer look at something?")
            if (lookingAt === 0){
                lookingAround = false;
                let lookingAtDoor = true;
                while (lookingAtDoor){
                    var doorAction = rs.keyInSelect(door, "\nThe door is pretty solid looking wood. But how hard could it really be? Hard to say. You want to do anything with this door?")
                    if (doorAction === 0) {
                        if (hasKey){
                            console.log("\nYou use your key to open the door. Throwing the door open as you make your way to freedom. Only to quickly find yourself in an even larger room...But hey...at least you got out of that room...");
                            win = true;
                            lookingAtDoor = false;
                            lookingAround= false;
                            continue;
                        }
                        console.log("\n The door is not unlocked and does not budge. If only this were so easy.")
                        continue; 
                    } else if (doorAction === 1){
                        console.log("\nYou strike the door and come away quite certain the door hurt you more than you hurt the door. Though maybe if you keep trying...")
                        continue;
                    } else if (doorAction === 2){
                        console.log("\nYou attack the door again and again. Intent on brining it down if it's the last thing you do. Ultimately, as you swing your battered body against the door for the upteenth time, it is the last thing you. Cause you died...")
                        loose = true; 
                        lookingAtDoor = false;
                        lookingAround = false;
                        continue;
                    } else if (doorAction === -1){
                        lookingAtDoor = false;
                        lookingAround = true;
                        continue;
                    }
                }
            } else if (lookingAt === 1){
                lookingAround = false;
                lookingAtDoormat = true;
                while (lookingAtDoormat){
                    var doormatAction = rs.keyInSelect(doormat, "\nThe doormat says 'WELCOME PLEASE COME INSIDE IT IS A WONDERFUL PLACE. \nWhat would you like to do with the doormat?")
                    if (doormatAction === 0){
                        console.log("\nYou lift up the doormat from the corner. Not seeing anything, except for the black void of failure. Then, at the center of the mat, a shiny golden key appears. ")
                        var pickupKey = rs.keyInYN("\nDo you want to pick it up?")
                        if (pickupKey){
                            console.log("\nYou got the key. Lets put the doormat back where we found it and go back to looking around the room!")
                            hasKey = true;
                            lookingAtDoormat = false;
                            lookingAround = true;
                            continue;
                        } else if (pickupKey){
                            console.log("\nYeah maybe it is trapped...Maybe we can come back here later after exploring the room more");
                            lookingAtDoormat = false;
                            lookingAround = true;
                            continue;
                        }
                } else if (doormatAction === -1){
                    lookingAround = true;
                    lookingAtDoormat = false;
                    continue;
                }
            }
            }else if (lookingAt === 2){
                var lookingHole = true;
                while (lookingHole) {
                    console.log("\nThere is a gaping hole in the wall...if gaping is a little bigger than your hand. If that isn't gaping, I guess it's just a normal hole...")
                    var holeAction = rs.keyInSelect(hole, "/nWhat do you want to do with the hole?")
                    if (holeAction === 0){
                        console.log("\nYou look into the hole but the light doesn't go far enough to see the end. It's just a void of blackness. Like your fear void we talked about elsewhere")
                        continue;
                    } else if (holeAction === 1){
                        console.log("\nYou steadily slip your hand into the hole. Then your arm starts to slip in. The hole just keeps going and just when you think your going to bottom out at your elbow, something grips onto your arm. You register immense pain before your arm is torn from your body, finishing it's way into the hole and leaving the rest of your body behind to bleed out in the room.")
                        lookingHole = false;
                        lookingARound = false;
                        loose = true;
                        continue; 
                    } else if (holeAction === -1){
                        console.log("Yeah lets leave that hole alone for now and look around some more.");
                        lookingHole === false;
                        continue;
                    }
                }

            } else if (lookingAt === -1){
                lookingAround = false;
                continue;
            }
        }
    }
} 

if (win){
    console.log ("Game Over?");
} else console.log("Game...Over");