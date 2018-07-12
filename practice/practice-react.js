// const header = React.createElement("h1", {id: "header", class: "header"}, "Hello World")

// const header = React.createElement("header", {class: "header"}, 
//     React.createElement("h1", {}, "My App"));
// const content = React.createElement("section", {class: "content-wrapper"}, 
//     React.createElement("h1", {}, "Blog Title"));
// const app = React.createElement("div", {id: "wrapper"}, [header, content])

// const app = (
// <div>
//     <header>
//         <h1> Hey Yoooo </h1>
//      </header>
//      <section>
//          <h3>Blog Title</h3>
//     </section>
// </div>
// )


// ReactDOM.render(app, document.getElementById("root"));

// const houses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw']

// const sorter = () =>{
//     console.log(houses[Math.floor(Math.random()* houses.length-1)])
// }

// sorter();

const returnHigh = (arr) =>{
     arr.sort((a, b) => {
        return a - b
    })
    return arr[arr.length-1]
}

const returnHigh2 = (arr) =>{
    let highest =arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i] > highest ? highest = arr[i] : null 
    }
    return highest
}

const returnTotal = str => {
    let xs = 0;
    let os = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] === "x" || str[i] === "X" ? xs++ : null
        if (str[i] === "o" ||str[i] === "O") os++
    }
    return xs === os
}



console.log(returnTotal(""))
