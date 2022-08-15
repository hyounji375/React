import { all, takeLatest, fork, delay, put } from "redux-saga/effects";
import {
  LOGIN_IN_FAILURE,
  LOGIN_IN_REQUEST,
  LOGIN_IN_SUCESS,
} from "../reducer/userReducer";
import { dummyUser } from "../util/data";

//saga function. 함수의 기능. dispatch를 보내거나 데이터를 받아오는 기능.
function* logIn(action) {
  try {
    yield delay(500);
    yield put({
      type: LOGIN_IN_SUCESS,
      data: dummyUser(action.data),
    });
  } catch (err) {
    yield put({
      type: LOGIN_IN_FAILURE,
      error: err.response.data,
    });
  }
}
//LOGIN_IN_REQUEST의 action값이 logIn에 매개변수로 전달된 것.

//event Listener.LOGIN_IN_REQUEST를 감지. 이벤트를 연결하는 역할.
function* watchLogin() {
  yield takeLatest(LOGIN_IN_REQUEST, logIn);
  //yield는 await과 같은 기능. takeLatest는 맨 마지막 요청만 실행
  //LOGIN_IN_REQUEST를 받아서 logIn 함수(saga 함수)를 실행.
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
  //fork는 event listener 함수인 watchLogin을 실행.
  //fork는 비동기. 그래서 all로 감싸서 동기적으로 만듦.
}
