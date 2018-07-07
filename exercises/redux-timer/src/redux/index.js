import { createStore } from 'redux';

export const storeTime = (time) => {
    return {
        type: "TIME",
        seconds: time.seconds,
        minutes: time.minutes
        
    }
}

const reducer = (prevState = {seconds: "", minutes: ''}, action) => {
        
    switch (action.type) {
        case "TIME":
                return {
                    seconds: action.seconds,
                    minutes: action.minutes,
                }
        default:
            return prevState
    }
}

export default createStore(reducer);