import {createStore} from 'redux';

//Action Creators => send action objects
export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}
export const subOne = () =>{
    return {
        type: "SUB_ONE"
    }
}
export const timesTwo = () => {
    return {
        type: "TIMES_TWO"
    }
}
export const divTwo = () => {
    return {
        type: "DIV_TWO"
    }
}
export const changeNum = num => {
    return {
        type: "CHANGE_NUM",
        num
    }
}
export const newContact = contact => {
    return {
        type: "NEW_CONTACT",
        contact
    }
}

//Dispatch

// let innerState = {
//     num: 0
// }
//could pass this to prevState instead


//reducer
const reducer = (prevState = {num: 0, contacts: []}, action) => {
    switch(action.type){
        case "ADD_ONE":
            return {
                num: prevState.num + 1
            }
        case "SUB_ONE":
            return {
                num: prevState.num -1
            }
        case "TIMES_TWO":
            return {
                num: prevState.num * 2
            }
            case "DIV_TWO":
                return {
                    num: prevState.num /2
                }
            case "CHANGE_NUM":
                return {
                    num: action.num
                }
            case "NEW_CONTACT":
                return {
                    contacts: [...prevState.contacts, action.contact]
            }
        default:
            return prevState
    }
}

export default createStore(reducer);