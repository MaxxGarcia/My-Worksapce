import {createStore} from 'redux';

export const newContact = contact => {
    return {
        type: "NEW_CONTACT",
        contact
    }
}
export const delContact = contactIndex => {
    return {
        type: "DEL_CONTACT",
        contactIndex
    }
}

const reducer = (prevState = {contacts: []}, action) => {
    switch(action.type){
        case "NEW_CONTACT":
            return {
                contacts: [...prevState.contacts, action.contact]
            }
        case "DEL_CONTACT":
            return {
                contacts: prevState.contacts.filter((item, i) => {
                    return i !== action.contactIndex
                })
            }
        default:
            return prevState
    }
}

export default createStore(reducer);