import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import postReducer from "./post_reducer";

const reducers = combineReducers({
  user: userReducer,
  posts: postReducer,
});

export default reducers;
