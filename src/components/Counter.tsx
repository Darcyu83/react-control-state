import React, { useReducer } from "react";
import counterReducer, { increase, decrease } from "../modules/counter";

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  return (
    <div>
      <h1>Counter with useReducer</h1>
      <h1>{count}</h1>
      <button onClick={onIncrease}> + </button>
      <button onClick={onDecrease}> - </button>
    </div>
  );
}
export default Counter;
