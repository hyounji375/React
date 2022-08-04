import { useSelector } from "react-redux/es/exports";

import TodoForm from "../components/TodoForm";
import TodoTitle from "../components/TodoTitle";
import TodoList from "../components/TodoList";

const Todo = () => {
  const state = useSelector((state) => state.todo);

  return (
    <>
      <TodoTitle state={state} />
      <TodoForm />
      {state.map((v) => (
        <TodoList key={v.id} state={v} />
      ))}
    </>
  );
};
export default Todo;
