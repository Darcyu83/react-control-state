import React, { useState } from "react";

function TodoInsert({ onAddTodo }: { onAddTodo: (text: string) => void }) {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할일을 입력하세요."
      />
      <button type="submit">ADD</button>
    </form>
  );
}
export default TodoInsert;
