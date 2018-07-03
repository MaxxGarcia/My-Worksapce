import React, {Component} from "react";

 const List = props => {
    const nameList = props.state.nameStorage.map((name, index) => <li key={name + index}> {name} </li>)
    // Was previously passing name list bellow, instead changed it to passing  the code itself. 
    return(
            <ol>
                {props.state.nameStorage.map((name, index) => <li key={name + index}> {name} </li>)}
            </ol>
    );
}

export default List;