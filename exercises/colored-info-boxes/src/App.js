import React, {Component} from 'react';
import Box from './Boxes';
import './index.css';

class App extends Component {
    render(){
        const box = {
            color: 'blue',
            title: "King",
            subtitle: "of Crystal Gems",
            info: "The one true king of all Crystal Gems"
        }
        return(
            <div>
                <Box box={box}/>
            </div>
        )
    }
}

export default App;