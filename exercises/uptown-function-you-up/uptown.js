var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var stringFunction = function(lyrics){
    return lyrics.join(" ");
}

var reverseFunction = function(lyrics){
    lyrics.reverse();
    return lyrics.join(" ");
}


var everyOtherFunction = function(lyrics){
    var newLyrics = [];
    for (let i = 0; i < lyrics.length; i += 2) {
        newLyrics.push(lyrics[i]);
    }
    return newLyrics.join(" ");
}

var swapWords = function(lyrics){
    var newLyrics = [];
    for (let i = 1; i < lyrics.length; i += 2) {
        newLyrics.push(lyrics[i]);
        newLyrics.push(lyrics[i-1])
    }
    return newLyrics.join(" ");
}

console.log(swapWords(lyrics));