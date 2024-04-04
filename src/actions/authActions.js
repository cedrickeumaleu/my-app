import { updateUserDataApi } from "../datas/api";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
export const setUserData = (data) => {
  return {
    type: "SET_USER_DATA",
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

export const updateUserData = (userId, newData) => {
  return async (dispatch) => {
    try {
      const updatedUserData = await updateUserDataApi(userId, newData); // Appelez votre fonction d'API pour mettre à jour les données utilisateur

      dispatch({
        type: "UPDATE_USER_DATA",
        payload: updatedUserData,
      });
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  };
};
