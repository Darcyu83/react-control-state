import React, { ChangeEvent, FormEvent, useState } from "react";
import "./GithubUsernameForm.css";

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
  const [input, setInput] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit} className="GithubUsernameForm">
      <input
        type="text"
        value={input}
        onChange={onChange}
        placeholder="Github계정명을 입력하세요."
      />
      <button type="submit">조회</button>
    </form>
  );
}
export default GithubUsernameForm;
