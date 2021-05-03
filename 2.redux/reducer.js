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

module.exports = reducer;
