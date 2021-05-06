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

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("changed");
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

console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요.",
  })
);

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두번째 포스트.",
  })
);

console.log("3rd", store.getState());

store.dispatch(logOut());
console.log("4th", store.getState());
