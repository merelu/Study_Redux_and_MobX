const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("changed");
});

//action 객체를 action이라고 한다.
//action을 만들어내느 함수
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch(
  logIn({
    id: 1,
    name: "gyuha",
    admin: true,
  })
);

console.log("1st", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요.",
  })
);

console.log("2nd", store.getState());

store.dispatch(logOut());
console.log("3rd", store.getState());
