import { useCallback, useReducer } from "react";
import { reducer } from "../reducer";

const Reducer = () => {
  const initialState = 0;
  const [number, dispatch] = useReducer(reducer, initialState);
  //    [상태명, 전달 매개체]          (reducer 폴더의 index.js에서 만든 reducer, 그 reducer가 적용될 변수)
  // 이렇게 dispatch로 전달된 값이 reducer 폴더의 index.js로 간다.
  //dispatch로 action 자체를 전달.
  //useReducer가 변수를 state 상태로 만들어 주는 역할.

  const onIncrement = useCallback(() => {
    dispatch({
      type: "INCREMENT",
    });
  }, []);

  const onDecrement = useCallback(() => {
    dispatch({
      type: "DECREMENT",
    });
  }, []);
  console.log(number);

  return (
    <>
      <div>
        <p>{number}</p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </>
  );
};
export default Reducer;
