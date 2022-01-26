import React from "react";
import {
  setColor,
  setCount,
  setText,
  toggleGood,
  useContextSampleDispatch,
  useContextSampleState,
} from "../modules/contextSample";

function ContextSample() {
  const state = useContextSampleState();
  const dispatch = useContextSampleDispatch();
  const onSetCount = () => dispatch(setCount(5));
  const onSetText = () => dispatch(setText("new Text"));
  const onSetColor = () => dispatch(setColor("yellow"));
  const onToggleGood = () => dispatch(toggleGood());
  return (
    <div>
      <h1>ContextSample</h1>

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
export default ContextSample;
