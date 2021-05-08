import { ADD_POST } from "./type";

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data,
  };
};
