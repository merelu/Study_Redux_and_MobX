import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../actions/user";

const initialState = {
  isLoggingIn: false,
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  }, //동기적, 내부적인 액션
  extraReducers: {
    [logIn.pending](state, action) {
      //user/logIn/pending
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) {
      state.data = null;
      state.isLoggingIn = false;
      state.error = action.error;
    },
  }, //비동기적, 외부적인 액션
});

export default userSlice;

// const userReducer = (prevState = initialState, action) => {
//   switch (action.type) {
//     case LOG_IN_REQUEST:
//       return {
//         ...prevState,
//         isLoggingIn: true,
//       };
//     case LOG_IN_SUCCESS:
//       return {
//         ...prevState,
//         data: action.data,
//         isLoggingIn: false,
//       };
//     case LOG_IN_FAILURE:
//       return {
//         ...prevState,
//         isLoggingIn: false,
//       };

//     case LOG_OUT:
//       return {
//         ...prevState,
//         isLoggingIn: false,
//         data: null,
//       };
//     default:
//       return prevState;
//   }
// };
