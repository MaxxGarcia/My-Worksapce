import React from 'react';

function Box(props){
    return (
        <div className="myOnlyDiv" color={props.color}>
            <h1>{props.box.title}</h1>
            <h4>{props.box.subtitle}</h4>
            <h3>{props.box.info}</h3>
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

export default Box;