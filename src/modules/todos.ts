const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  text,
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  id,
});

type TAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export type TTodo = {
  id: number;
  text: string;
  done: boolean;
};

export type TTodoState = TTodo[];

const initialState: TTodoState = [];

export default function reducer(state = initialState, action: TAction) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: nextId++, text: action.text, done: false }];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
