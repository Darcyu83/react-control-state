import React, { useReducer } from "react";
import reducerSampleReducer, {
  setColor,
  setCount,
  setText,
  toggleGood,
} from "../modules/reducerSample";

function ReducerSample() {
  const [state, dispatch] = useReducer(reducerSampleReducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  const onSetCount = () => dispatch(setCount(5));
  const onSetText = () => dispatch(setText("new Text"));
  const onSetColor = () => dispatch(setColor("yellow"));
  const onToggleGood = () => dispatch(toggleGood());
  return (
    <div>
      <h1>ReducerSample</h1>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={onSetCount}>SET_COUNT</button>
        <button onClick={onSetText}>SET_TEXT</button>
        <button onClick={onSetColor}>SET_COLOR</button>
        <button onClick={onToggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}
export default ReducerSample;
