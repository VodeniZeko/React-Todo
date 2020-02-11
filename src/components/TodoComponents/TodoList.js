// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = ({ taskList, toggleTask, deleteTasks }) => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  console.log(taskList);
  return (
    <div>
      {taskList.map(task => (
        <Todo task={task} toggleTask={toggleTask} key={task.id} />
      ))}
      <button onClick={deleteTasks}>Clear completed</button>
    </div>
  );
};

export default TodoList;
