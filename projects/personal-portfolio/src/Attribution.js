import React, {Component} from 'react';

export default class Attribution extends Component {
    render(){
        return(
            <div className="attributionWrapper">
                <div className="pdfAttribution">
                   PDF icon made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a> from www.flaticon.com
                </div>
                <div className="blanketAttribution">
                    <a href="https://github.com/logos" target="_blank">Github</a> and <a href="https://brand.linkedin.com/visual-identity/logo" target="_blank">LinkedIn</a> icons supplied by their respective resource pages. 
                </div>
            </div>
        )
    }
}