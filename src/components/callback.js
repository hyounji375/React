import { useCallback, useState } from "react";

const Callback = () => {
  const [color, setColor] = useState("blue");
  const Change = useCallback(() => {
    if (color === "blue") {
      setColor("red");
    } else {
      setColor("blue");
    }
  }, [color]);
  return (
    <>
      <div>useCallback</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={Change}>useCallback 변경</button>
    </>
  );
};
export default Callback;
