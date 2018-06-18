var axios = require("axios"); 
var url = "https://api.vschool.io/ben/todo/";

function getTodos(url){
    axios.get(url)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function (err){
        
    })
}

// getTodos(url);

function addTodo(todoItem){
    axios.post(url,todoItem)
        .then(function(response){
            console.log(response.data)
        })
        .catch(function(err){
            console.log(err)
        })
}

// addTodo({title:"Play Yugioh", description: "It's time to duuuuule"})

function getTodobyId(id){
    axios.get(url + id)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(err){
        console.log(err)
    })
}

// getTodobyId("5b27ea68eec94d291400b521");

function deleteTodoById(id){
    axios.delete(url + id)
        .then(function(response){
            console.log(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
}

// deleteTodoById("5b27ea68eec94d291400b521")

function editTodoById(id, editedTodo){
    axios.put(url + id, editedTodo)
        .then(function(response){
            console.log(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
}

// editTodoById("5b241fe0eec94d291400b4e3", {sessionId: "Murder The Students"});