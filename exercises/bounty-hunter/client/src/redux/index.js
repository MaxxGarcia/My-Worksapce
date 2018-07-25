import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

export const newBounty = bounty => {
    return dispatch => {
        console.log(bounty)
        axios.post(`/bounties`, bounty)
            .then(response => {
                dispatch({
                    type: "NEW_BOUNTY",
                    bounty: response.data
                })
            })
        .catch(err => { console.log(err) })
    }
}
export const getBounties = () => {
    return dispatch => {
        axios.get(`/bounties`)
            .then(response => {
                dispatch({
                    type: "BOUNTIES",
                    bounties: response.data
                })
            })
        .catch(err => { console.log(err) })
    }
}
export const delBounty = bountyId => {
    return dispatch => {
        axios.delete(`/bounties/${bountyId}`)
            .then(response => {
                dispatch({
                    type: "DEL_BOUNTY",
                    bountyId
                })
            })
        .catch(err => { console.log(err) })
    }
}


const reducer = (prevState = { bounties: [] }, action) => {
    switch (action.type) {
        case "NEW_BOUNTY":
            console.log([...prevState.bounties, action.bounty])
            return {
                bounties: [...prevState.bounties, action.bounty]
            }
        case "DEL_BOUNTY":
            return {
                bounties: prevState.bounties.filter((item, i) => {
                    return item._id !== action.bountyId
                })
            }
        case "BOUNTIES":
            return {
                bounties: action.bounties 
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))