import produce from "immer";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from "../actions/type";

const initialState = {
  isLoggingIn: false,
  data: null,
};

//nextState = produce(prevState, (draft)=>{})
//draft prevState의 복사본
const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
