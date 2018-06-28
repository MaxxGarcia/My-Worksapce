const multiTable = (n) => {
    let table = [];
    for (let i = 1; i <= n; i++) {
        let storage = []
        for (let j = 1; j <= n; j++) {
            storage.push(i * j);  
        }
        table.push(storage);
    }
    return table;
}

console.log(multiTable(10));

module.exports = multiTable; 