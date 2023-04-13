export const doLogin = (data) => {
  return {
    type: "FETCH_USER_LOGIN_SUCCESS",
    payload: data,
  };
};
