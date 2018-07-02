import React from 'react';

function Blogpost(props) {
    return (
        <div className="blogPostWrapper">
            <a className="blogLink">
                <div className="blogTitle">{props.title}</div>
                <div className="blogPreview">{props.preview}</div>
            </a>
            <div className="blogFooter">Posted by <a className="blogLink"><b> {props.author} </b></a> on {props.date}</div>
            <hr/>
        </div>
    );
  }


export default Blogpost;