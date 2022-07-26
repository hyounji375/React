import { useState } from "react";

const Add = ({ onClickEvent, stateNum }) => {
  const [name, setName] = useState("");

  const onChangeInput = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const RunonClickEvent = () => {
    onClickEvent(stateNum + 1, name);
    setName("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="나라 이름을 입력해주세요"
        value={name}
        onChange={onChangeInput}
      />
      <button onClick={RunonClickEvent}>추가</button>
      <button>초기화</button>
    </>
  );
};
export default Add;
