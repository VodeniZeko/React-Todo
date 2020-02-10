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
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input type="text" />
        <button>add</button>
      </form>
    );
  }
}

export default TodoForm;
