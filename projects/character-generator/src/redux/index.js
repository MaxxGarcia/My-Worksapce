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
                    type: "GET_TIEFLING",
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
export const getBarbarian = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/1")
            .then(response => {
                dispatch({
                    type: "GET_BARBARIAN",
                    barbarian: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getBard = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/2")
            .then(response => {
                dispatch({
                    type: "GET_BARD",
                    bard: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getCleric = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/3")
            .then(response => {
                dispatch({
                    type: "GET_CLERIC",
                    cleric: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getDruid = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/4")
            .then(response => {
                dispatch({
                    type: "GET_DRUID",
                    druid: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getFighter = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/5")
            .then(response => {
                dispatch({
                    type: "GET_FIGHTER",
                    fighter: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getMonk = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/6")
            .then(response => {
                dispatch({
                    type: "GET_MONK",
                    monk: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getPaladin = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/7")
            .then(response => {
                dispatch({
                    type: "GET_PALADIN",
                    paladin: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getRanger = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/8")
            .then(response => {
                dispatch({
                    type: "GET_RANGER",
                    ranger: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getRogue = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/9")
            .then(response => {
                dispatch({
                    type: "GET_ROGUE",
                    rogue: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getSorcerer = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/10")
            .then(response => {
                dispatch({
                    type: "GET_SORCERER",
                    sorcerer: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getWarlock = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/11")
            .then(response => {
                dispatch({
                    type: "GET_WARLOCK",
                    warlock: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}
export const getWizard = () => {
    return dispatch => {
        axios.get("http://www.dnd5eapi.co/api/classes/12")
            .then(response => {
                dispatch({
                    type: "GET_WIZARD",
                    wizard: response.data
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
    classes: [],
    barbarian: [],
    bard: [],
    cleric: [],
    druid: [],
    fighter: [],
    monk: [],
    paladin: [],
    ranger: [],
    rogue: [],
    sorcerer: [],
    warlock: [],
    wizard: [],
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
            case 'GET_BARBARIAN':
            return {
                ...prevState,
                barbarian: action.barbarian
            }
            case 'GET_BARD':
            return {
                ...prevState,
                bard: action.bard
            }
            case 'GET_CLERIC':
            return {
                ...prevState,
                cleric: action.cleric
            }
            case 'GET_DRUID':
            return {
                ...prevState,
                druid: action.druid
            }
            case 'GET_FIGHTER':
            return {
                ...prevState,
                fighter: action.fighter
            }
            case 'GET_MONK':
            return {
                ...prevState,
                monk: action.monk
            }
            case 'GET_PALADIN':
            return {
                ...prevState,
                paladin: action.paladin
            }
            case 'GET_RANGER':
            return {
                ...prevState,
                ranger: action.ranger
            }
            case 'GET_ROGUE':
            return {
                ...prevState,
                rogue: action.rogue
            }
            case 'GET_SORCERER':
            return {
                ...prevState,
                sorcerer: action.sorcerer
            }
            case 'GET_WARLOCK':
            return {
                ...prevState,
                warlock: action.warlock
            }
            case 'GET_WIZARD':
            return {
                ...prevState,
                wizard: action.wizard
            }
        default:
            return prevState
    }
}
export default createStore(reducer, applyMiddleware(thunk))