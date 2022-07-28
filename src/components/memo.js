import { useMemo, useState } from "react";

const Memo = () => {
  const [color, setColor] = useState("green");
  const [text, setText] = useState("");

  const getColor = useMemo(() => console.log(`색은 ${color}입니다.`), [color]);
  const getText = useMemo(
    () => console.log(`텍스트는 실행하지 않습니다.`),
    [text]
  );

  const changeColor = () => {
    if (color === "green") {
      setColor("pink");
    } else {
      setColor("green");
    }
  };
  return (
    <>
      <div>Memo</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={changeColor}>useMemo 변경</button>
    </>
  );
};
export default Memo;
