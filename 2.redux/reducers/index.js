const { combineReducers } = require("redux");
const userReducer = require("./user_reducer");
const postReducer = require("./post_reducer");

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});
