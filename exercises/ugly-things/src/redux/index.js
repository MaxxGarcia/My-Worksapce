import { createStore } from 'redux';

export const newUgly = uglies => {
    return {
        type: "NEW_UGLY",
        uglies
    }
}
export const deleteUgly = uglyIndex => {
    return {
        type: "DELETE_UGLY",
        uglyIndex
    }
}
export const newComment = (comment, id) => {
    return {
        type: "NEW_COMMENT",
        comment,
        id
    }
}

const reducer = (prevState = { uglies: [] }, action) => {
    switch (action.type) {
        case 'NEW_UGLY':
            return {
                uglies: [...prevState.uglies, action.uglies]
            }
        case 'DELETE_UGLY':
            return {
                uglies: prevState.uglies.filter((ugly, i) => {
                    return i !== action.uglyIndex
                })
            }
        case 'NEW_COMMENT':
            const thingToUpdate = {...prevState.uglies[action.id]}
            
            thingToUpdate.comments.push(action.comment)

            return {
                uglies: prevState.uglies.map((thing, i) => i === action.id ? thingToUpdate : thing)
            }
        default:
            return prevState
    }
}

export default createStore(reducer);