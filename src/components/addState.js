import { useCallback, useContext, useState } from "react";
import { ADD_STATE, Context } from "../reducer/context";

const AddState = () => {
  const { state, dispatch } = useContext(Context);

  const [name, setName] = useState("");
  const onChangeInput = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );

  const onAddState = useCallback(() => {
    dispatch({
      type: ADD_STATE,
      id: state.length > 0 && state[state.length - 1].id + 1,
      name: name,
    });
    setName("");
  }, [state, name, dispatch]);

  const Reset = useCallback(() => {
    setName("");
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={onChangeInput}
      />
      <button onClick={onAddState}>추가</button>
      <button onClick={Reset}>초기화</button>
    </>
  );
};
export default AddState;
