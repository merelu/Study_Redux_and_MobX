import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

//action과 reducer, dispatch는 동기적이므로 비동기 처리가 불가능하다. 미들웨어를 통해 비동기 처리를 한다.
const fistMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션 로깅", action);
  dispatch(action); //이것만 있음 기본기능
};
// function firstMiddleware(store) {
//   return function (next) {
//     return function (action) {};
//   };
// }

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    //비동기 - 비동기인경우 action을 함수로 넣어주겠다. action은 객체
    return action(store.dispatch, store.getState);
  }
  next(action); //동기
};

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(fistMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(fistMiddleware, thunkMiddleware));

export const store = createStore(reducers, enhancer);
