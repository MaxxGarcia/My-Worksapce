import { createStore, applyMiddleware } from "redux"
import axios from 'axios';
import thunk from 'redux-thunk'

export const getJoke = () =>{
    return dispatch => {
        dispatch({type: "START_LOADING"})
        axios.get(`http://api.icndb.com/jokes/random`)
        .then(response => {
            console.log(response.data.value.joke)
            dispatch({
                type: "GET_JOKE",
                joke: response.data.value
            })
        })
        .catch(err => console.log(err))
    }
}

const reducer = (prevState={ joke: "", loading: false}, action) => {
    switch (action.type) {
        case "GET_JOKE":
            return {
                loading: false,
                joke: action.joke
            }
        case "START_LOADING":
            return {
                ...prevState,
                loading: true,
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))