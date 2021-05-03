const { createStore } = require("redux");

const reducer = (prevState, aciton) => {
  switch (aciton.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: aciton.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: "12",
  compC: null,
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("changed");
});

console.log("1st", store.getState());

//action 객체를 action이라고 한다.
//action을 만들어내느 함수
const changeCompA = (data) => {
  return {
    //action
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());
