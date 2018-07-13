import { createStore, applyMiddleware } from 'redux'
import axios from 'axios';
import thunk from 'redux-thunk'

export const getRaces = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races")
            .then(response => {
                dispatch({
                    type: "GET_RACES",
                    races: response.data.results
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getDwarf = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/1")
            .then(response => {
                dispatch({
                    type: "GET_DWARF",
                    dwarf: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getElf = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/2")
            .then(response => {
                dispatch({
                    type: "GET_ELF",
                    elf: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getHalfling = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/3")
            .then(response => {
                dispatch({
                    type: "GET_HALFLING",
                    halfling: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getHuman = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/4")
            .then(response => {
                dispatch({
                    type: "GET_HUMAN",
                    human: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getDragonborn = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/5")
            .then(response => {
                dispatch({
                    type: "GET_DRAGONBORN",
                    dragonborn: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getGnome = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/6")
            .then(response => {
                dispatch({
                    type: "GET_GNOME",
                    gnome: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getHalfElf = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/7")
            .then(response => {
                dispatch({
                    type: "GET_HALF_ELF",
                    halfElf: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getHalfOrc = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/8")
            .then(response => {
                dispatch({
                    type: "GET_HALF_ORC",
                    halfOrc: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getTiefling = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/races/9")
            .then(response => {
                dispatch({
                    type: "GET_TIEFLINFG",
                    tiefling: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getClasses = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes")
            .then(response => {
                dispatch({
                    type: "GET_CLASSES",
                    classes: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}


const exactState = {
    races: [],
    dwarf: {},
    elf: [],
    halfling: [],
    human: [],
    dragonborn: [],
    gnome: [],
    halfElf: [],
    halfOrc: [],
    tiefling: [],
    classes: []
}

export const reducer = (prevState = exactState, action) => {
    switch (action.type) {
        case 'GET_RACES':
            return {
                ...prevState,
                races: action.races
            }
        case 'GET_DWARF':
            return {
                ...prevState,
                dwarf: action.dwarf
            }
        case 'GET_ELF':
            return {
                ...prevState,
                elf: action.elf
            }
        case 'GET_HALFLING':
            return {
                ...prevState,
                halfling: action.halfling
            }
        case 'GET_HUMAN':
            return {
                ...prevState,
                human: action.human
            }
        case 'GET_DRAGONBORN':
            return {
                ...prevState,
                dragonborn: action.dragonborn
            }
        case 'GET_GNOME':
            return {
                ...prevState,
                gnome: action.gnome
            }
        case 'GET_HALF_ELF':
            return {
                ...prevState,
                halfElf: action.halfElf
            }
        case 'GET_HALF_ORC':
            return {
                ...prevState,
                halfOrc: action.halfOrc
            }
        case 'GET_TIEFLING':
            return {
                ...prevState,
                tiefling: action.tiefling
            }
            case 'GET_CLASSES':
            return {
                ...prevState,
                classes: action.classes
            }
        default:
            return prevState
    }
}
export default createStore(reducer, applyMiddleware(thunk))