import React, { useCallback } from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App {
  onLogIn = () => {
    dispatch(
      logIn({
        id: "gyuha",
        password: "1234",
      })
    );
  };
  onLogOut = () => {
    dispatch(logOut());
  };
  render() {
    const { user } = this.props;
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
          <button onClick={onLogOut}>로그아웃</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
}); //reselect
const mapDispatchToProps = (dispatch) => ({
  logIn: () => dispatch(logIn()),
  logOut: () => dispatch(logOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
