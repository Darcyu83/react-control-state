import React from "react";
import { TTodo } from "../modules/todos";

export default function TodoItem({
  todo,
  onToggleTodo,
  onRemoveTodo,
}: {
  todo: TTodo;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}) {
  const handleRemove = () => {
    onRemoveTodo(todo.id);
  };

  const handleToggle = () => {
    onToggleTodo(todo.id);
  };

  const removeStyle = {
    marginleft: 8,
    color: "red",
    cursor: "pointer",
  };

  const textStyle = {
    cursor: "pointer",
    textDecoration: todo.done ? "line-through" : "none",
  };
  return (
    <li onClick={handleToggle}>
      {todo.done ? "완료" : "할일"} :
      <span style={textStyle}> {todo.text} </span>
      <span style={removeStyle} onClick={handleRemove}>
        (X)
      </span>{" "}
    </li>
  );
}
