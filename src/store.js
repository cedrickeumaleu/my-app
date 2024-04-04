import { createStore } from "redux";
import rootReducer from "./reducers"; // Assurez-vous que le chemin d'accès est correct

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, reduxDevtools);

export default store;
