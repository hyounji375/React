import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useInput } from "../../hooks/useinput";

const SignMain = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [name, onChangeName, setName] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //비밀번호 한 번 더 입력
  const [passCheck, setPassCheck] = useState(false);

  const onConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
      setPassCheck(e.target.value !== password);
      //일치하지 않으면 true
    },
    [password]
  );
  //

  const onRegistHandler = useCallback(
    (e) => {
      if (passCheck) {
        if (!alert("비밀번호가 일치하지 않습니다.")) {
          setConfirmPassword("");
        }
        return;
      }
      console.log("회원가입 완료");
    },
    [passCheck]
  );
  return (
    <>
      <SignFrom>
        <h1>회원가입</h1>
        <div>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            autoComplete="off"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            autoComplete="off"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            autoComplete="off"
            value={confirmPassword}
            onChange={onConfirmPassword}
          />
        </div>
        {passCheck && confirmPassword && (
          <CheckMessage>비밀번호가 일치하지 않습니다</CheckMessage>
        )}
        <button onClick={onRegistHandler}>가입하기</button>
        <Link to="/">돌아가기</Link>
      </SignFrom>
    </>
  );
};
export default SignMain;

const SignFrom = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  max-height: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  & h1 {
    color: #4f5681;
  }

  & input {
    box-sizing: border-box;
    width: 50%;
    margin: 0.1rem 0;
    padding: 0.35rem;
    border: 1px solid #ddd;
    font-size: 0.875rem;
    color: #666;
  }

  & input::placeholder {
    font-size: 0.875rem;
    color: #ccc;
  }

  & input:focus {
    outline: none;
    border: 1px solid #7784cc;
    box-shadow: 0 0 0 0.1rem rgb(59 65 99 / 25%);
  }

  & button {
    box-sizing: border-box;
    width: 50%;
    margin: 0.2rem;
    padding: 0.3rem 0;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    background: #4f5681;
    cursor: pointer;
  }

  & button:hover {
    background: #3b4163;
  }

  & a {
    display: block;
    font-size: 0.875rem;
    color: #666;
  }
`;

const CheckMessage = styled.p`
  width: 50%;
  margin: 0 auto;
  font-size: 0.875rem;
  color: red;
  text-align: left;
`;
