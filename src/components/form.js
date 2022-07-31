import { useCallback, useState } from "react";

const Form = ({ onAdd, id }) => {
  const [todo, setTodo] = useState("");

  const addWork = useCallback(() => {
    onAdd(id + 1, todo);
    setTodo("");
    console.log(todo);
  }, [id, onAdd, todo, setTodo]);

  const onChangeTodo = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );

  const reset = useCallback(() => {
    setTodo("");
  }, [setTodo]);

  const keypress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onAdd(id + 1, todo);
        setTodo("");
        console.log(todo);
      }
    },
    [onAdd, setTodo, todo]
  );
  return (
    <>
      <input
        type="text"
        placeholder="할 일을 적어주세요"
        value={todo}
        onChange={onChangeTodo}
        onKeyPress={keypress}
      />
      <button onClick={addWork}>추가</button>
      <button onClick={reset}>초기화</button>
    </>
  );
};
export default Form;
