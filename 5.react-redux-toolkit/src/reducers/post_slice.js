import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "../actions/post";

const initialState = {
  data: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost(state, action) {
      state.data = [];
    },
  }, //동기적, 내부적인 액션
  extraReducers: (builder) =>
    builder
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
      })
      .addMatcher(
        //pending 상태때 하는일이 공통되면 이렇게 묶어서 처리할 수 있다.
        (action) => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addDefaultCase((state, action) => {
        //default
      }), //비동기적, 외부적인 액션
});

export default postSlice;

// const postReducer = (prevState = initialState, action) => {
//   switch (action.type) {
//     case ADD_POST:
//       return [...prevState, action.data];
//     default:
//       return prevState;
//   }
// };
