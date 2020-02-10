import React from "react";
import "./Todo.css";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
const Todo = ({ task, toggleTask }) => {
  return (
    <div
      className={`${task.completed ? "task" : "done"}`}
      onClick={() => toggleTask(task.id)}
    >
      {task.task}
    </div>
  );
};

export default Todo;
