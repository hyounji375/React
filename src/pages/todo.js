import Form from "../components/form";
import List from "../components/list";
import Title from "../components/title";
import { useState, useCallback } from "react";

const Todo = () => {
  const [state, setState] = useState([
    {
      id: 1,
      work: "토요일 거 복습하기",
    },
    {
      id: 2,
      work: "일요일 거 복습하기",
    },
    {
      id: 3,
      work: "todolist 복습하기",
    },
  ]);

  const onAdd = useCallback(
    (id, work) => {
      setState([...state, { id: id, work: work }]);
    },
    [state]
  );
  const RemoveWork = useCallback(
    (id) => {
      const RemoveState = state.filter((item) => item.id !== id);
      setState(RemoveState);
    },
    [state]
  );

  return (
    <>
      <Title state={state} />
      {state.map((w) => (
        <List key={w.id} state={w} RemoveWork={RemoveWork} />
      ))}

      <Form onAdd={onAdd} id={state.length > 0 && state[state.length - 1].id} />
    </>
  );
};
export default Todo;
