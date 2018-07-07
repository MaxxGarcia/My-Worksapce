import {createStore} from 'redux';

export const newContact = contact => {
    return {
        type: "NEW_CONTACT",
        contact
    }
}

const reducer = (prevState = {contacts: []}, action) => {
    switch(action.type){
            case "NEW_CONTACT":
                return {
                    contacts: [...prevState.contacts, action.contact]
            }
        default:
            return prevState
    }
}

export default createStore(reducer);