const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      // Vérifiez les informations d'identification
      // Si les informations sont valides, met à jour l'état avec l'utilisateur connecté
      return {
        isAuthenticated: true,
        token: action.payload.body.token,
        error: null,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        user: action.payload.body,
      };
    case "LOGOUT":
      // Déconnectez l'utilisateur
      return {
        isAuthenticated: false,
        token: null,
        error: null,
      };
    case "SET_ERROR":
      // Définir l'erreur d'authentification
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
