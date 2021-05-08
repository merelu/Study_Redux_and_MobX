import produce from "immer";
import { ADD_POST } from "../actions/type";

const initialState = [];

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case ADD_POST:
        draft.push(action.data);
        break;
      default:
        break;
    }
  });
};

export default postReducer;
