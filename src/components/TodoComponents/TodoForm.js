import React, { Component } from "react";

class TodoForm extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      newTask: " "
    };
  }

  handleChange = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  submitChanges = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitChanges}>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button>add</button>
      </form>
    );
  }
}

export default TodoForm;
