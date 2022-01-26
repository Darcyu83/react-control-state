import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReduxCounter from "../components/ReduxCounter";
import { TRootReducer } from "../modules";
import { decrease, increase, increaseBy } from "../modules/reduxCounter";

function ReduxCounterContainer() {
  const { count } = useSelector((state: TRootReducer) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onIncreaseBy = (diff: number) => dispatch(increaseBy(diff));

  return (
    <div>
      <h1>ReduxCounterContainer</h1>
      <ReduxCounter
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
      />
    </div>
  );
}
export default ReduxCounterContainer;
