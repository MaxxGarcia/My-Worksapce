import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk'

export const getTodos = () => {
    return dispatch => {
        axios.get("https://api.vschool.io/natej/todo/")
        .then(response =>{
            dispatch({
                type: "GET_TODOS",
                todos: response.data
            })
        })
        .catch(err => {console.log(err)})
    }
   
}

export const postTodos = (newTodo) => {
    return dispatch => {
        axios.post("https://api.vschool.io/natej/todo/", newTodo)
        .then(response =>{
            dispatch({
                type: "POST_TODOS",
                newTodo: response.data
            })
        })
        .catch(err => {console.log(err)})
    }
   
}
export const deleteTodos = (todoID) => {
    return dispatch => {
        axios.delete(`https://api.vschool.io/natej/todo/${todoID}`)
        .then(response =>{
            dispatch(getTodos())
        })
        .catch(err => {console.log(err)})
    }
}

export const putTodos = (id, updatedTodo) => {
    return dispatch => {
        axios.put(`https://api.vschool.io/natej/todo/${id}`, updatedTodo)
        .then(response =>{
            dispatch({
                type: "PUT_TODOS",
                newTodo: response.data
            })
        })
        .catch(err => {console.log(err)})
    }
}
   


const stateObject = {
    todos: []
}

const reducer = (prevState = stateObject, action) => {
    switch(action.type){
        case "GET_TODOS":
            return {
                todos: action.todos
            }
        case "POST_TODOS":
            return {
                todos: [...prevState.todos, action.newTodo]
            }
            case "PUT_TODOS":
                return {
                    todos: prevState.todos.map((todo, i) => {
                        if(todo._id === action.newTodo._id) return action.newTodo
                        return todo
                    })
                }
            default:
                return prevState;
        }
    }


export default createStore(reducer, applyMiddleware(thunk))