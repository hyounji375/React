import { useState, useRef } from "react";
import Add from "./add";

const Map = () => {
  const [country, setCountry] = useState([
    { number: 1, name: "한국" },
    { number: 2, name: "미국" },
    { number: 3, name: "중국" },
  ]);
  console.log(country);

  const onClickEvent = (numValue, nameValue) => {
    setCountry([...country, { number: numValue, name: nameValue }]);
  };

  const Remove = (e) => {
    const RemoveCountry = country.filter(
      (c) => c.number !== parseInt(e.target.value)
    );
    console.log(e.target.value);
    setCountry(RemoveCountry);
  };

  const RemoveArr = useRef([]);
  const Remove_2 = () => {
    console.log(RemoveArr);
  };

  const Remove_3 = (cNum) => {
    console.log(cNum);
    const remove3 = country.filter((c) => c.number !== cNum);
    setCountry(remove3);
  };
  return (
    <>
      {country.map((c, i) => (
        <div>
          {c.number}번은 {c.name}입니다.
          <button
            onClick={() => Remove_3(c.number)}
            value={c.number}
            ref={(el) => (RemoveArr[i] = el)}
          >
            삭제
          </button>
        </div>
      ))}
      <Add
        onClickEvent={onClickEvent}
        stateNum={country.length > 0 && country[country.length - 1].number}
      />
    </>
  );
};
export default Map;
