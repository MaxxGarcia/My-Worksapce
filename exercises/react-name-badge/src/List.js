import React from "react";

 const List = props => {
    let styles = props.info.formStorage[8];
    console.log(styles);
    return(
        <div className="nametagWrapper">
            {props.info.formStorage.map((person, i) => (
                <div key={person[0] + i} className="badgeWrapper">
                    <div className="headWrapper">
                        <div style={{backgroundColor: styles}}>Badge:</div>
                    </div>
                    <div> Name: {person[0]} {person[1]} </div>
                    <div>Email: {person[2]}</div>
                    <div>Phone: {person[4]}</div>
                    <div>Place of birth: {person[3]}</div>
                    <div>Favorite food: {person[5]}</div>
                    <div>Description: {person[6]}</div>
                    
                </div>
                ))}
        </div>
    );
}

export default List;