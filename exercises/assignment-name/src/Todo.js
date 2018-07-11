import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodos, putTodos } from './redux'
import Toggler from './Toggler'
import Form from "./Form"



class Todo extends Component {
  constructor(){
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleDelete = e =>{
    e.preventDefault(e)
    this.props.deleteTodos(this.props._id)
  }
  handleUpdate = inputs => {
    this.props.putTodos(this.props._id, inputs)
    this.setState({
      title: '',
      description: ''
    })
  }
  render() {
    return (
      <div className="App" >
          <h3> {this.props.title} </h3>
          <h6> {this.props.description} </h6>
          <button onClick={this.handleDelete}>x</button>
          <Toggler render={props => {
          const { toggled, handleToggle } = props;
          return (
            <div>
              <button onClick={handleToggle}>Edit</button>
              {toggled && <Form 
                inputs={{
                  title: '',
                  description: '',
                }}
                submit={this.handleUpdate}
                render={props => {
                  const { handleSubmit, handleChange, inputs } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <input placeHolder="New Title" value={inputs.title} name="title" type="text" onChange={handleChange} />
                      <input placeHolder="New Descrpiption"  value={inputs.description} name="description" type="text" onChange={handleChange} />
                      <button>Submit</button>
                    </form>
                  )
                }} />}
            </div>
          )
        }} />
      </div>
    );
  }
}

export default connect(state=>state, { deleteTodos, putTodos } ) (Todo);

