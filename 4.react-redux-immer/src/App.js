import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App {
  onLogIn = () => {
    this.props.dispatchLogIn(
      logIn({
        id: "gyuha",
        password: "1234",
      })
    );
  };
  onLogOut = () => {
    this.props.dispatchLogOut(logOut());
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
          <button onClick={this.onLogIn}>로그인</button>
        ) : (
          <button onClick={this.onLogOut}>로그아웃</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
}); //reselect
const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: () => dispatch(logIn()),
  dispatchLogOut: () => dispatch(logOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

//connect : High Order Component(HOC)
