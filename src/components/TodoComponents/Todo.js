import React from "react";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
const Todo = ({ task }) => {
  return <div>{task.task}</div>;
};

export default Todo;
