// const arr = [1, 2, 3, 4, 5];
// const p = document.getElementsByTagName("p");

// const pNodes = arr.map(num => {
//     const p = document.createElement("p"); 
//     p.innerHTML = num;
//     return p;
// })

// const body = document.querySelector("body");
// pNodes.forEach(node => body.appendChild(node));

const component = (props) => {
    const p = document.createElement("p")
    p.innerHTML = props.text;
    return p;
}

const textArr = ["test", "monkey", "driveway", "slime"];

const pElements = textArr.map(text => {
    return component({text}); 
})

pElements.forEach(elm => body.appendChild(elm));