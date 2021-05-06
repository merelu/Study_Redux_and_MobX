const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

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

const enhancer = applyMiddleware(fistMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

store.subscribe(() => {
  console.log("subscribe", "changed");
});
console.log("1st", store.getState());
//action 객체를 action이라고 한다.
//action을 만들어내느 함수
store.dispatch(
  logIn({
    id: 1,
    name: "gyuha",
    admin: true,
  })
);

// console.log("2nd", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요.",
//   })
// );

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 2,
//     content: "두번째 포스트.",
//   })
// );

// console.log("3rd", store.getState());

// store.dispatch(logOut());
// console.log("4th", store.getState());
