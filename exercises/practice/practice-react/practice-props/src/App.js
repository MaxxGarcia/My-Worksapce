import React, {Component} from 'react';
import User from './User';

class App extends Component {
    super(){
        return(
            <div>
                <User name="Maxx" email="nonomo@nono.no" phone="911"/>
            </div>
        )
    }
}

export default App;