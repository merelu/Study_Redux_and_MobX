import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./actions/post";
import { logIn } from "./actions/user";
import userSlice from "./reducers/user_slice";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogIn = useCallback(() => {
    dispatch(
      logIn({
        id: "gyuha",
        password: "1234",
      })
    );
  }, [dispatch]);
  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, [dispatch]);
  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, [dispatch]);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        <div>로그인 해주세요.</div>
      )}
      {!user.data ? (
        <button onClick={onLogIn}>로그인</button>
      ) : (
        <>
          <button onClick={onLogOut}>로그아웃</button>
          <button onClick={onAddPost}>게시글작성</button>
        </>
      )}
    </div>
  );
}

export default App;
