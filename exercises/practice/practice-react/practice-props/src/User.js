import React, {Component} from 'react';

function User(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.email}</h3>
            <h3>{props.phone}</h3>
        </div>
    )
}

// class user extends Component {
//     constructor(){
//         super()
//         this.state
//     }

//     render(){
//         return()
//     }
// }

export default User;