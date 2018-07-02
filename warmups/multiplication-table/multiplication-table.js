

const multiTable = (n) => {
    const table = [];
    for (let i = 1; i <= n; i++) {
        const storage = []
        for (let j = 1; j <= n; j++) {
            storage.push(i * j);  
        }
        table.push(storage);
    }
    return table;
}

console.log(multiTable(5)); 

module.exports = multiTable; 