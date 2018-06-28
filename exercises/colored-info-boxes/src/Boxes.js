import React from 'react';

function Box(props){
    const boxColor = {
        backgroundColor: props.box.backgroundColor
    }
    return (
        <div className="myOnlyDiv" style={boxColor}>
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