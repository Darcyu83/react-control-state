import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};
function Myform({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({ name: "", description: "" });
  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((curr) => ({ ...curr, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", description: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>My Form</h1>
        Name:
        <div>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        Description :
        <div>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Myform;
