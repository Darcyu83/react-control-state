import React from "react";
import ContextSample from "./components/ContextSample";
import Counter from "./components/Counter";
import Myform from "./components/Myform";
import ReducerSample from "./components/ReducerSample";
import GithubProfileLoader from "./containers/GithubProfileLoader";
import MoviesContainer from "./containers/MoviesContainer";
import ReduxCounterContainer from "./containers/ReduxCounterContainer";
import ReduxTodosContainer from "./containers/ReduxTodosContainer";
import SagaGithubProfileLoader from "./containers/SagaGithubProfileLoader";
import "./Css.module.css";

import "./lib/test";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div style={{ minWidth: "max-content" }}>
      <GithubProfileLoader />
      <SagaGithubProfileLoader />
      <hr />
      <MoviesContainer />
      <h1>Typescript</h1>
      in index.tsx
      <div> ┌ Redux </div>
      <div> ├ Context API </div>
      <div> ├ APP </div>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          display: "grid",
          gridTemplateColumns:
            "minmax(max-content, 1fr) minmax(max-content, 1fr)",
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
    </div>
  );
}

export default App;
