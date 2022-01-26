import React from "react";
import { TTodoState } from "../modules/todos";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  onToggleTodo,
  onRemoveTodo,
}: {
  todos: TTodoState;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}) {
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo, idx) => (
          <>
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onRemoveTodo={onRemoveTodo}
            ></TodoItem>
          </>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
