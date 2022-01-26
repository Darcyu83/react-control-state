import { stat } from "fs";

const SET_COUNT = "SET_COUNT" as const;
const SET_TEXT = "SET_TEXT" as const;
const SET_COLOR = "SET_COLOR" as const;
const TOGGLE_GOOD = "TOGGLE_GOOD" as const;

export const setCount = (count: number) => ({ type: SET_COUNT, count });
export const setText = (text: string) => ({ type: SET_TEXT, text });
export const setColor = (color: Color) => ({ type: SET_COLOR, color });
export const toggleGood = () => ({ type: TOGGLE_GOOD });

type TAction =
  | ReturnType<typeof setCount>
  | ReturnType<typeof setText>
  | ReturnType<typeof setColor>
  | ReturnType<typeof toggleGood>;

type Color = "red" | "orange" | "yellow" | null;

type TState = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};
export default function reducerSampleReducer(state: TState, action: TAction) {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: action.count };
    case SET_TEXT:
      return { ...state, text: action.text };
    case SET_COLOR:
      return { ...state, color: action.color };
    case TOGGLE_GOOD:
      return { ...state, isGood: !state.isGood };
    default:
      return state;
  }
}
