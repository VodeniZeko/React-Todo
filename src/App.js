import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: []
    };
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
      id: new Date().toLocaleString(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTaskItem]
    });
  };

  deleteTasks = () => {
    this.setState({
      taskList: this.state.taskList.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList
          deleteTasks={this.deleteTasks}
          taskList={this.state.taskList}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
