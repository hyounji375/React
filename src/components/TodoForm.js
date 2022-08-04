import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { INSERT_TODO } from "../reducer/todo";
const TodoForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);
  //useSelector는 _index.js에서 combineReducers 안에 있는 것들을 모두 읽어온다.
  //state.todo라고 입력했으니까 읽어온 것들 중에서 todo만 가져오는 것.
  //그래서 결과적으로는 _index.js 안의 todo의 state인 initialState를  가져오게 된다.

  useEffect(() => {
    console.log(state);
  }, [state]);

  const [todo, setTodo] = useState("");

  const onChangeTodo = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );

  const onAddState = useCallback(() => {
    dispatch({
      type: INSERT_TODO,
      data: {
        id: state[state.length - 1].id + 1,
        todo: todo,
      },
    });
    setTodo("");
  }, [state, todo, dispatch]);

  return (
    <div>
      <TodoaddInput
        type="text"
        placeholder="할 일을 적어주세요"
        value={todo}
        onChange={onChangeTodo}
      />
      <TodoButton onClick={onAddState}>추가</TodoButton>
    </div>
  );
};
export default TodoForm;

const TodoaddInput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 32px;
  position: relative;
  padding-left: 20px;
`;

const TodoButton = styled.button`
  border-radius: 5px;
  width: 53px;
  height: 43px;
  position: absolute;
`;
