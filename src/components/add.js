import { useState, useRef } from "react";

const Add = ({ onClickEvent, stateNum }) => {
  const [name, setName] = useState("");
  const nameInput = useRef(null);

  const onChangeInput = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const RunonClickEvent = () => {
    onClickEvent(stateNum + 1, name);
    setName("");
  };

  const Reset = () => {
    setName("");
    nameInput.current.focus();
    console.log(name);
    console.log(nameInput);
  };

  const AddEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      onClickEvent(stateNum + 1, name);
      setName("");
      alert("값이 추가되었습니다.");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="나라 이름을 입력해주세요"
        value={name}
        onChange={onChangeInput}
        onKeyPress={AddEnter}
        ref={nameInput}
      />
      <button
        onClick={() => {
          RunonClickEvent();
          Reset();
        }}
      >
        추가
      </button>
      <button onClick={Reset}>초기화</button>
    </>
  );
};
export default Add;
