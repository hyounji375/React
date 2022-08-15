//전역 변수로 사용할 state의 목록 작성

import produce from "immer";

const initialState = {
  me: null, //백엔드에서 받아 온 회원 가입의 정보를 담을 전역 변수
  isLoading: false,
  //로그인 할 때의 상태값. 로딩 중인지, 성공했는지, 실패했는지 판단할 수 있는 값.
  //지금 비동기 처리를 하고 있는 중이니(데이터를 받아오는 중인가)? 만약 그렇다면 이러한 데이터 상태를 진행 안 함.
  isDone: false, //isDone이 true일 때 다음 로직 실행.
  isError: null, //백엔드에서 주는 에러 내용을 담을 공간. 에러 내용이 있으면 setState("") 초기화를 안 시켜줌.
  logInLoading: false,
  logInDone: false,
  logInError: null,
};

export const LOGIN_IN_REQUEST = "LOGIN_IN_REQUEST";
//컴포넌트에서 백엔드에 요청 보내는 것. 이 요청은 reducer에도 가고 saga에도 간다.
//saga에서도 데이터를 제대로 받아왔는지 판단해서 다시 reducer로 dispatch로 타입명을 보냄. 성공하면 타입명에 SUCCESS를 실패하면 FAILURE 보냄.
export const LOGIN_IN_SUCESS = "LOGIN_IN_SUCESS"; //데이터를 받아왔다.
export const LOGIN_IN_FAILURE = "LOGIN_IN_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOGIN_IN_SUCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        //userSaga의 data: dummyUser(action.data)가 draft.me = action.data에 들어감.
        break;
      case LOGIN_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.err;
        //userSaga의 error: err.response.data가 draft.me = action.err에 들어감.
        break;
      default:
        return console.log("타입명이 틀렸습니다.");
    }
  });

export default reducer;
//state 값을 immer에 전달해서 draft에 넣음. 즉, draft는 결과값으로 state가 불변성이 지켜진 상태로 들어가 있는 것.

//로그인 버튼을 누르면 dispatch가 일어나서 id와 pw를 reducer와 saga에 전달.
//reducer에서는 로그인 요청을 받았으니까 switch문의 case LOGIN_IN_REQUEST 실행.
//saga에서도 이 로그인 리퀘스트가 정상적으로 실행했는지 플러스 백엔드에서 데이터를 제대로 받아왔는지 판단.
//데이터를 제대로 받아왔으면 reducer에 action을 보냄. LOGIN_IN_SUCESS를 보내면 reducer에서 case LOGIN_IN_SUCESS 실행.
//백엔드에 데이터를 받아오기도 전에 LOGIN_IN_SUCESS가 실행되면 draft.me에 null이 들어가거나 에러가 남.
//백엔드에 요청을 하고 데이터를 받아야만 성공 여부를 받아서 reducer에 있는 전역 상태값을 바꿔주는 것.
//즉, 비동기적인 통신(백엔드에서 데이터를 받아오는 것)이 끝나야만 state 값을 바꿔주는 게 saga.
