import React, {Component} from 'react';


export default class Todo extends Component {
    render() {
      const myTodos = this.props.info.map((task, i) => {
        return (
            <div key={task._id}>
                <h1>{task.title + " " + task._id}</h1>
                <h2>{task.description}</h2>
            </div>)
    })
      return (
        <div className="todoWrapper">
          {myTodos}
        </div>
      );
    }
  }