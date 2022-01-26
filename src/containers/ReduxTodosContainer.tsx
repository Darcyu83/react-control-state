import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import { TRootReducer } from "../modules";
import { addTodo, removeTodo, toggleTodo } from "../modules/todos";

function ReduxTodosContainer() {
  const todos = useSelector((state: TRootReducer) => state.todos);
  const dispatch = useDispatch();

  const onAddTodo = (text: string) => {
    if (!text) return;
    dispatch(addTodo(text));
  };

  const onToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <h1>ReduxTodosContainer</h1>
      <TodoInsert onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={onToggleTodo}
        onRemoveTodo={onRemoveTodo}
      />
    </div>
  );
}
export default ReduxTodosContainer;
