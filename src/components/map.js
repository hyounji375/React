import { useState } from "react";
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
  return (
    <>
      {country.map((c) => (
        <div>
          {c.number}번은 {c.name}입니다.
          <button>제거</button>
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
