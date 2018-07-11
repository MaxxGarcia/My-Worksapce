import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTodos, postTodos } from './redux'
import Todo from './Todo'


class App extends Component {
  constructor (){
    super()
    this.state ={
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.getTodos()
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault(e)
    this.props.postTodos(this.state)
    this.setState({
      title: '',
      description: ''
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="New Title" type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
          <input placeholder="New Description" type="text" value={this.state.description} name="description" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        <h1>Todos</h1>
       { this.props.todos.map((todo, i) => {
         return (
          <Todo {...todo} i={i}  key={todo.title + i}/>
         )
       })}
      </div>
    );
  }
}

export default connect(state => state, { getTodos, postTodos })(App);

