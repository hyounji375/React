import React, { useReducer } from "react";

export const Context = React.createContext();

const initial = [
  {
    id: 1,
    name: "김사과",
  },
  {
    id: 2,
    name: "반하나",
  },
  {
    id: 3,
    name: "오렌지",
  },
];

export const REMOVE_STATE = "REMOVE_STATE";
export const ADD_STATE = "ADD_STATE";

//전역 상태기 때문에 이 상태를 업데이트하는 로직도 가독성 좋게 여기에 같이 입력.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return [...state, { id: action.id, name: action.name }];
    case "REMOVE_STATE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
//return 값이 그대로 state에 들어가기 때문에 setState를 해줄 필요가 없다.

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
//initial 값이 reducer에 전달 -> reducer 결과값이 state에 전달.

//children에 value인 state와 dispatch가 모두 전달된다. 이렇게 전역 상태가 되는 것.

export default ContextProvider;
