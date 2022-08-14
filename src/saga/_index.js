import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([]);
}

//*은 제너레이터를 사용하기 위해 붙여준 것. yield를 사용하기 위해 붙임.
//yield는 제너레이터 함수를 의미. 기능은 await와 같다. 기다려~
//이걸 실행하고 그다음 로직을 실행.

//제너레이터는 yield라든지 비동기 처리를 할 수 있는 파이썬의 기능.

//all은 리덕스 사가에 있는 일종의 기능이자 함수.
//all([])의 [] 안에는 saga 로직들이 들어가는데 그것들을 다 선택하겠다는 의미.
//combinereducer의 역할이라고 보면 됨.
