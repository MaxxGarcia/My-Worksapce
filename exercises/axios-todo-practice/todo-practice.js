var url = "https://api.vschool.io/ben/todo/";

var body = document.getElementById("body");
var displayTodo = function (todo) {
    //make wrapper
    var wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.style.textDecoration = todo.completed ? "line-through" : "initial";


    //make header
    var h3 = document.createElement(h3);
    h3.innerHTML = todo.title.toUpperCase();
    h3.className = "title";

    //make description
    var descP = document.createElement("p");
    descP.innerHTML = "Description: " + todo.description;

    //make price
    var priceP = document.createElement("p");
    priceP.innerHTML = "Price: " + todo.price;

    //make checkbox
    var label = document.createElement("label");
    label.innerHTML = "Completed";
    var input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.completed; 
    label.appendChild(input);

    //make delete button
    var delButton = document.createElement("button");
    delButton.innerHTML = "DELETE";
    delButton.className = "dead";
    delButton.style.backgroundColor = "maroon";
    delButton.style.color = "white";
    delButton.style.width = "20%";
    delButton.style.alignSelf = "center";
    delButton.addEventListener("click", function (e) {
        e.preventDefault();
        function deleteTodoById(_id) {
            axios.delete(url + _id)
                .then(function (response) {
                    body.removeChild(wrapper);
                    alert("The todo has been deleted T_T")
                })
                .catch(function (err) {
                    alert("your todo is immortal and will never die")
                    console.log(err);
                })
        }
        deleteTodoById(todo._id);
    })


    //append things to wrapper
    wrapper.appendChild(h3);
    wrapper.appendChild(descP);
    wrapper.appendChild(priceP);
    wrapper.appendChild(label);
    wrapper.appendChild(delButton)


    //append wrapper to the section
    body.appendChild(wrapper);

    input.addEventListener("click", function () {
        axios.put(url + todo._id, {completed: this.checked})
        .then(function(response){
            wrapper.style.textDecoration = response.data.completed ? "line-through" : "initial";
        })
        
        
    })
}


axios.get(url)
    .then(function (response) {
        //convert data into html elements
        var todos = response.data
        console.log(todos)
        todos.forEach(displayTodo);

    })
    .catch(function (err) {
        console.log(err);
    })

form.addEventListener("submit", function (e) {
    e.preventDefault();
    //store input values into an object
    let tit = form.title.value;
    let des = form.description.value;
    let pri = +form.price.value;

    //post the todo using axios
    function addTodo(todoItem) {
        axios.post(url, todoItem)
            .then(function (response) {
                displayTodo(response.data);
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    addTodo({ title: tit, description: des, price: pri });
})
