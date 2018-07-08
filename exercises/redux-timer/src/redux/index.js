import { createStore } from 'redux';

export const secondsTime = () => {
    return {
        type: "SECONDS"
    }
}
export const minutesTime = () => {
    return {
        type: "MINUTES",
    }
}
export const resetTime = () => {
    return {
        type: "RESET",
    }
}
export const lapTime = (lap) => {
    return {
        type: "LAP",
        lap
    }
}
export const miliTime = (lap) => {
    return {
        type: "MILI",
        lap
    }
}

const reducer = (prevState = {miliseconds: 0, seconds: 0, minutes: 0, laps: []}, action) => {
        
    switch (action.type) {
        case "MILI":
            return {
                miliseconds: prevState.miliseconds +1,
                seconds: prevState.seconds,
                minutes: prevState.minutes,
                laps: prevState.laps
            }
        case "SECONDS":
            return {
                miliseconds: 0,
                seconds: prevState.seconds +1,
                minutes: prevState.minutes,
                laps: prevState.laps
            }
            case "MINUTES":
            return {
                miliseconds: prevState.miliseconds,
                seconds: 0,
                minutes: prevState.minutes +1,
                laps: prevState.laps
            }
            case "RESET":
            return {
                miliseconds: 0,
                seconds: 0,
                minutes: 0,
                laps: prevState.laps
            }
            case "LAP":
            return {
                seconds: prevState.seconds,
                minutes: prevState.minutes,
                laps:[...prevState.laps, action.lap]
            }
        default:
            return prevState
    }
}

export default createStore(reducer);