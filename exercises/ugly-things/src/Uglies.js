import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteUgly, newComment } from './redux'

class Uglies extends Component {
  constructor(){
    super();
    this.state={
      title: "",
      imgUlr: '',
      description: '',
      comment: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleColapse = this.handleColapse.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }
  handleClick(e){
    e.preventDefault();
    this.props.deleteUgly(+e.target.value)
  }
  handleColapse(e){
    e.preventDefault();
        var content = e.target.nextElementSibling;
        content.style.display === "none" ? content.style.display = "block" : content.style.display = "none"
  }
  handleComment(e){
    e.preventDefault();
   
    this.props.newComment(this.state.comment, this.props.i)
  }
  render() {
    console.log(this.props.sub.comments);
      const {sub, i} = this.props;
    return (
        <div >
              <div key={sub + i} className="uglySubWrapper">
                <div className="title">{sub.title}</div>
                <div className="description">{sub.description}</div>
                <div>
                  <img className="image" src={sub.imgUrl} alt=" should be here"/>
                </div>

                <button value={i} onClick={this.handleClick}
                className="delete">x</button>
                <button className={`collapsible${i}`} onClick={this.handleColapse}> </button>

                <form id={i} className="formTwo" onSubmit={this.handleComment} style={{display: "none"}}>
                  <input type="text" placeholder="Enter Comment" onChange={this.handleChange} name="comment" value={this.state.comment}/>
                  <button >Add Comment</button>
                  <ul className="commentList">
                    {sub.comments.map((comment, i) => <li key={comment+i}>{comment}</li>)}
                  </ul>
                </form>
              </div>  
        </div>
    );
  }
}

export default connect(state => state,{ deleteUgly, newComment })(Uglies);
