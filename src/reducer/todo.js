const initialState = [
  {
    id: 1,
    todo: "리액트 공부하기",
  },
  {
    id: 2,
    todo: "리액트 또 공부하기",
  },
  {
    id: 3,
    todo: "리덕스 공부하기",
  },
];

export const INSERT_TODO = "INSERT_TODO";
export const REMOVE_STATE = "REMOVE_STATE";

const todo = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO:
      return [...state, { id: action.data.id, todo: action.data.todo }];
    case REMOVE_STATE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
export default todo;
