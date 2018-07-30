import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

export const getUniverses = () => {
    return dispatch => {
        return axios.get(`/universes`)
            .then(response => {
                dispatch({
                    type: "GET_UNIVERSES",
                    universes: response.data
                })
            })
            .catch(err => { console.error(err, "err message") })
    }
}

export const newChild = (body, universeId) => {
    return dispatch => {
        axios.put(`/universes/${universeId}`, body).then((response) => {
            console.log(response.data);
            return axios.get(`/universes`)
        })
            .then(response => {
                dispatch({
                    type: "GET_UNIVERSES",
                    universes: response.data
                })
            })
            .catch(err => { console.error(err, "err message") })
    }
}

export const newUniverse = (body) => {
    return dispatch => {
        axios.post(`/universes/`, body).then(() => {
            return axios.get(`/universes`)
        })
            .then(response => {
                dispatch({
                    type: "GET_UNIVERSES",
                    universes: response.data
                })
            })
            .catch(err => { console.error(err, "err message") })
    }
}

const reducer = (prevState = { universes: []}, action) => {
    switch (action.type) {
        case "GET_UNIVERSES":
            return {
                ...prevState,
                universes: action.universes
            }
        default:
            return prevState;
    }
}

export default createStore(reducer, applyMiddleware(thunk))