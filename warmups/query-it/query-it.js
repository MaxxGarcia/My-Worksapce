filterDatabase = (queryObject, database) => {
    return database.filter(item => {
        for (key in queryObject) {
            if(item[key] !== queryObject[key]) {
                return false
            }   
        }
        return true;
    })
}

const database = [  
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

console.log(filterDatabase({firstName: "Jack", lastName: "Smith"}, database))

module.exports = filterDatabase