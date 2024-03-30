import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Assurez-vous que le chemin d'accès est correct

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});

export default rootReducer;
