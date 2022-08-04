import { useCallback } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { REMOVE_STATE } from "../reducer/todo";

const TodoList = ({ state }) => {
  const dispatch = useDispatch();
  const onRemoverhandler = useCallback((id) => {
    dispatch({ type: REMOVE_STATE, id: state.id });
  }, []);
  return (
    <div>
      {state.id}. {state.todo}
      <button onClick={onRemoverhandler}>완료</button>
    </div>
  );
};
export default TodoList;
