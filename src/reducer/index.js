export const reducer = function reducer(state, action) {
  //                                 (reducer.js에서 initialState로 전달받은 값, dispatch로 전달받은 값)
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//reducer의 기본 형태
