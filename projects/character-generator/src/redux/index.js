import { createStore, applyMiddleware } from 'redux'
import axios from 'axios';
import thunk from 'redux-thunk'

export const getRaces = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races")
        .then(response =>{
            dispatch({
                type: "GET_RACES",
                races: response.data.results
            })
        })
        .catch(err => {console.log(err)})
    }
}

export const reducer = (prevState ={ races: []} , action) => {
    switch (action.type) {
        case 'GET_RACES':
            return{
                races: action.races
            }
        default:
            return prevState
    }
}
export default createStore(reducer, applyMiddleware(thunk))