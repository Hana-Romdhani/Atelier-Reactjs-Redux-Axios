import { combineReducers } from "redux";
import events from "./slices/eventSlice.jsx";

const reducers = combineReducers({
  events,
  //whislist
  // Ajoutez d'autres réducteurs ici si nécessaire
});

export default reducers;
