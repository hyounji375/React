import { useCallback } from "react";

const List = ({ state, RemoveWork }) => {
  const onRemoveWork = useCallback(() => {
    RemoveWork(state.id);
  }, [RemoveWork, state]);

  return (
    <div>
      {state.id}. {state.work}
      <button onClick={onRemoveWork}>완료</button>
    </div>
  );
};
export default List;
