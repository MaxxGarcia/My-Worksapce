var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        // spaceshipurl = data.starships[0];
        // console.log(spaceshipurl);
        // are specific to the URL being used in this example
    }
};

xhr.open("GET", "http://swapi.co/api/people/1/", true); 
//can use any url
xhr.send();