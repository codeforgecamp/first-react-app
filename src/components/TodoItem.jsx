import React from "react";

const TodoItem = (props) => {
  return (
    <div className={`todo-item ${props.isDone ? "done" : ""}`}>
      <h3>{props.name}</h3>
      <div className="check"></div>
    </div>
  );
};

export default TodoItem;
