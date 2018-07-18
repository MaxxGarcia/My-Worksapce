// const heroOjbect = [
//     {
//         name: "Miles Morales",
//         series: "marvel",
//         hero: "Spiderman",
//         catchphrase:"Guys-who-say-they're-not-the-Avengers, assemble!",
//         photo: "http://s24195.pcdn.co/wp-content/uploads/2016/03/29-comics-2.nocrop.w529.h717.2x.jpg"

//     },
//     {
//         name: "Kahmalah Kahn",
//         series: "marvel",
//         hero: "Ms. Marvel",
//         catchphrase:"Embiggen!",
//         photo: "https://source.superherostuff.com/wp-content/uploads/2017/04/Ms.-Marvel-Bubble.jpg"

//     },
//     {
//         name: "Ellie Phimister",
//         series: "marvel",
//         hero: "Negasonic Teenage Warhead",
//         catchphrase:"...",
//         photo: "https://i.pinimg.com/originals/0b/76/81/0b76818423c3c1cbe75dc81052b372c4.jpg"

//     },
//     {
//         name: "Billy Hoskins",
//         series: "DC",
//         hero: "Worst X-man Ever",
//         catchphrase:"AHHHHHH",
//         photo: "https://i.kinja-img.com/gawker-media/image/upload/s--BE7-NEpi--/c_scale,f_auto,fl_progressive,q_80,w_800/qiclpjawknaxq5zuvgkm.jpg"

//     },
//   ]


//   const sortedObject = heroOjbect.sort(hero => {return hero.series === "DC"});

//   console.log(sortedObject)

function sudoku2(grid) {
    let tempArray = []
    for (let i = 0; i < grid.length - 1; i++) {
            tempArray =[]
            for (let j = 0; j < grid[i].length; j++) {
                if(tempArray.find(item => item === grid[i][j]) && tempArray.find(item => item === grid[i][j]) !== '.'){
                    console.log(grid[i][j])
                    return false
                } else {
                    tempArray.push(grid[i][j])   
                }
                for (let k = i+1; k < grid.length; k++) {
                if (grid[i][j] === grid[k][j] && grid[i][j] !== '.' && grid[i][j] !== undefined) {
                    console.log("test2")
                    return false
                }
            }
        }
    }
    return true
}

console.log(sudoku2([
[".","4",".",".",".",".",".",".","."], 
[".",".","4",".",".",".",".",".","."], 
[".",".",".","1",".",".","7",".","."], 
[".",".",".",".",".",".",".",".","."], 
[".",".",".","3",".",".",".","6","."], 
[".",".",".",".",".","6",".","9","."], 
[".",".",".",".","1",".",".",".","."], 
[".",".",".",".",".",".","2",".","."], 
[".",".",".","8",".",".",".",".","."]]))
// console.log(a[0][0])

