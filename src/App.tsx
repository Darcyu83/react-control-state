import React from "react";
import ContextSample from "./components/ContextSample";
import Counter from "./components/Counter";
import Myform from "./components/Myform";
import ReducerSample from "./components/ReducerSample";
import GithubProfileLoader from "./containers/GithubProfileLoader";
import ReduxCounterContainer from "./containers/ReduxCounterContainer";
import ReduxTodosContainer from "./containers/ReduxTodosContainer";
import "./Css.module.css";
function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <GithubProfileLoader />
      <h1>Typescript</h1>
      in index.tsx
      <div> ┌ Redux </div>
      <div> ├ Context API </div>
      <div> ├ APP </div>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <Myform onSubmit={onSubmit} />
        <Counter />
        <ReducerSample />
        <ContextSample />
        <ReduxCounterContainer />
        <ReduxTodosContainer />
      </div>
    </>
  );
}

export default App;
