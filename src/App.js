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
  }
  toggleTask = id => {
    const newTaskList = this.state.taskList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      taskList: newTaskList
    });
  };

  addNewTask = newTaskText => {
    const newTaskItem = {
      task: newTaskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTaskItem]
    });
  };

  render() {
    return (
      <div>
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList taskList={this.state.taskList} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
