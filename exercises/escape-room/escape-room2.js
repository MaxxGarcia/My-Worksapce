var rs = require('readlinesync');

var options = ["Open door", "Look for Key"];
var keyFount = false;

while (true) {
    var selection = rs.keyInSelect (options, "What wuld you like to do?");

    if (selection === 0) {
        if (keyFound){
            console.log("You win!");
            break;
        } else {
            console.log("It seems to require a key...")
        }
    }
    if (selection === 1){

    }
    if (selection === -1){

    }
}