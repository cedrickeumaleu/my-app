import { createStore } from "redux";
import rootReducer from "./reducers"; // Assurez-vous que le chemin d'accès est correct

const store = createStore(rootReducer);

export default store;
