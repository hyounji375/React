import { useState } from "react";

const State = () => {
  const [fruit, setFruit] = useState("과일입니다");
  console.log(fruit);
  const ChangePeach = () => {
    if (fruit === "과일입니다") {
      setFruit("물복 먹고 싶어요");
    } else {
      setFruit("과일입니다");
    }
  };
  console.log(fruit);
  return (
    <>
      <div>{fruit}</div>
      <button onClick={ChangePeach}>setState가 됩니다</button>
    </>
  );
};
export default State;
