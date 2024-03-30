const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      // Vérifiez les informations d'identification
      // Si les informations sont valides, met à jour l'état avec l'utilisateur connecté
      return {
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case "LOGOUT":
      // Déconnectez l'utilisateur
      return {
        isAuthenticated: false,
        user: null,
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
