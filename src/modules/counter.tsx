const INCREASE = "INCREASE" as const;
const DECREASE = "DECREASE" as const;

export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

type TAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

export default function counterReducer(state: number = 0, action: TAction) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
