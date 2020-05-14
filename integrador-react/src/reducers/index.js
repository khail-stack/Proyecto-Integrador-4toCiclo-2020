import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import covidReducer from "./covidReducer";

export default combineReducers({
  usuarios: usuariosReducer,
  datacovid: covidReducer,
});
