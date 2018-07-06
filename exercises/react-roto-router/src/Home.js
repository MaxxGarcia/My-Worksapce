import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


 class Home extends Component {
    render(){
        console.log(this.props);
        return(
            <div className="contentWraper home">
            Would you like me to roto your router?
            </div>
        )
    }
}

export default withRouter(Home)