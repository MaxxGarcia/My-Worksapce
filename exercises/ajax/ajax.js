var xhr = new XMLHttpRequest();


var pokemonNames = [];
xhr.onreadystatechange = function () {  
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var jsData = JSON.parse(jsonData);
        for (let i = 0; i < jsData.objects[0].pokemon.length; i++) {
            pokemonNames.push(jsData.objects[0].pokemon[i].name);
        }
        var parsePokemon = function(){
            for (let i = 0; i < pokemonNames.length; i++) {
                pokemonNames.sort();
                let h1 = document.createElement("h1");
                let txtNode = document.createTextNode(pokemonNames[i]);
                h1.appendChild(txtNode);
                document.body.appendChild(h1);
            }
        }
        
        parsePokemon();
    }   
};



xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  

xhr.send();

