import { combineReducers } from "redux";
import userSlice from "./user_slice";
import postSlice from "./post_slice";

const reducer = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});

export default reducer;
