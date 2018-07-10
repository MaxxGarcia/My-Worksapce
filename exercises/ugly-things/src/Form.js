import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newUgly } from './redux'

class Form extends Component {
  constructor(){
    super();
    this.state={
      title: "",
      imgUrl: '',
      description: '',
      comments: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.newUgly(this.state)
  }

  render() {
    return (
      <div className="formWrapper">
          <form onSubmit={this.handleSubmit} className="formOne">
            <input type="text" placeholder="Title" onChange={this.handleChange} name="title" value={this.state.title}/>

            <input type="text" placeholder="IMG URL" onChange={this.handleChange} name="imgUrl" value={this.state.imgUrl}/>

            <input type="text" placeholder="Description" onChange={this.handleChange} name="description" value={this.state.description}/>
            <button className="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default connect(state => state,{ newUgly })(Form);
