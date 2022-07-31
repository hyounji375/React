import "./title.css";

const Title = ({ state }) => {
  return (
    <>
      <div className="titleStyle">
        할 일 목록 리스트 <span>{state.length}</span>개
      </div>
    </>
  );
};
export default Title;
