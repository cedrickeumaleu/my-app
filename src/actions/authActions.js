export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};
