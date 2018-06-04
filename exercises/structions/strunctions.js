let swap = function(str) {
    if (str[0] === str[0].toUpperCase()){
        console.log(str.toLowerCase())
    }
    else {
        console.log(str.toUpperCase())
    }
} 

let phrase = function(str, str2) {
    let phrase = str.concat(" ", str2);
    console.log(phrase);
    
    console.log("we have added a space at index " + phrase.indexOf(" ") + ". Your phrase ends at the index" + phrase.lastIndexOf())
    if (phrase.length < 20) {
        console.log(phrase.replace(phrase[0], "All hail "))

    } else {
        let phraseArray = phrase.split[" "];
        console.log("Your phrase has been assimiliated into the Array master race. It is now known only by the Arraian name phraseArray.")
    }
}

let finalArray = function(str) {
    if (str.match("she") != null) {
        console.log(str.match(/she/g));
    }
    else if (str > 50){
        let getShort = str.substr((str.length/2));
        console.log()
    }
    else{
        let getSliced = str.slice(0, (str.length/2));
        console.log(getSliced);
    }
}

swap("wordwords wordwords wordwords wordwords wordwords wordwords ");
