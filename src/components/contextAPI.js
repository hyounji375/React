import AddState from "./addState";
import { useCallback, useContext, useEffect } from "react";
import { Context, REMOVE_STATE } from "../reducer/context";

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const Remove = useCallback((id) => {
    dispatch({
      type: REMOVE_STATE,
      id: id,
    });
  }, []);

  return (
    <>
      {state.map((v) => (
        <div key={v.id}>
          {v.id}. {v.name}
          <button
            onClick={() => {
              Remove(v.id);
            }}
          >
            삭제
          </button>
        </div>
      ))}

      <AddState />
    </>
  );
};
export default ContextAPI;
