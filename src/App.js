import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    const taskList = [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ];
    this.state = {
      taskList: taskList
    };
    console.log(taskList);
    // toggleTask = (taskName) => {
    //   const newTaskList = this.taskList.map(item => {

    //   })
    // }
  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
