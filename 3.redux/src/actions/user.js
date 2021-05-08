import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
} from "./type";

export const logIn = (data) => {
  //async action creator - function 리턴
  return (dispatch, getstate) => {
    dispatch(logInRequest());
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "gyuha",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = () => {
  return {
    type: LOG_IN_REQUEST,
  };
};

const logInSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
