import React from 'react';

function FriendList(props) {
      return (
        <div className="friendlistWrapper">
          <h1>{props.friend}</h1>
          <h2>{}</h2>
          <h2>{}</h2>

        </div>
      );
    }
  
  export default FriendList;
  