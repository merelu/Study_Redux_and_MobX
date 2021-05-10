import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  console.log(data);
  // throw new Error("비밀번호가 틀렸습니다.");
  const result = await delay(500, {
    userId: 1,
    nickname: "gyuha",
  });
  return result;
});

//createAsyncThunk를 사용할때는 async/await 문법에 쓰이는 try catch문을 사용안하는게 좋다. 쓰면 에러에대한 예외처리를 함으로 에러가 발생하지 않는다. 그렇기때문에 thunk가 rejected되지 않고 fulfilled 상태에 머물게 된다.

// isPending, fulfilled, rejected
// loading, success, failure
