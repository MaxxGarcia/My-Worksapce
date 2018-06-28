import React, {Component} from 'react';
import Box from './Boxes';
import './index.css';

class App extends Component {
    render(){
        const square = {
            backgroundColor: 'blue',
            title: "King",
            subtitle: "of Crystal Gems",
            info: "The one true king of all Crystal Gems"
        }
        const square2 = {
            backgroundColor: 'red',
            title: "King",
            subtitle: "of Crystal Gems",
            info: "The one true king of all Crystal Gems"
        }
        return(
            <div>
                <Box box={square}/>
                <Box box={square2}/>
            </div>
        )
    }
}

export default App;