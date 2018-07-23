function stringifyUrl(url, query) { 
    if(query === {}){
        return url;
    }
    let newurl = url + '?' 
   for (key in query) {
    newurl = newurl + `${key}=${query[key]}&`
   }
   newurl = newurl.substring(0, newurl.length -1)
   return newurl
}

// if(Object.keys(query).length === 0){
//     return url
// }

function objectizzexivy(url){
   let queryObject = url.substring(url.indexOf('?')+1)
   if(queryObject === url) return {};
   queryObject = queryObject.split("&").map(str => str.split('=')).reduce((query, arr, i) => {
        query[arr[0]] = arr[1]
        return query
    }, {})
    return queryObject
}

const url = ["http://localhost:8080/monkeys", "http://localhost:8080/monkeys?color=black&species=howler", "http://localhost:8080/monkeys"]  
const query = {  
  color: "black",
  species: "howler"
}


// console.log(stringifyUrl(url[0], query));

console.log(objectizzexivy(url[0]));

// let empty = { };
// let alias = empty;
// console.log(empty === {})

module.exports = {stringifyUrl, objectizzexivy};