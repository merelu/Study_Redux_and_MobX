import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./actions/user";

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
  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, []);
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
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
}

export default App;
