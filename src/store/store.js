import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer/_index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/_index";

const logger = createLogger();
//리덕스의 실행 콘솔을 찍어주는 미들웨어를 사용하고 변수에 담아줌.
//createLogger의 리턴값을 담아주는 것.

const sagaMiddleware = createSagaMiddleware();
//리덕스 사가를 실행하기 위해 변수에 담아준 것.

const createConfigure = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
      : applyMiddleware(sagaMiddleware)
  );
  //개발 환경일 때는 데브툴즈, 로거 포함. 개발환경이 아닐 때는 사가만 포함.

  sagaMiddleware.run(rootSaga);
  //사가를 실행하기 위한 함수. createStore를 실행할 경우 적용하기 위해 함수 안에 삽입.
  return store;
  //설정값을 리턴.
};
//store를 리턴으로 받기 위한 함수.

export default createConfigure;
