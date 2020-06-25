import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import covidReducer from "./covidReducer";
import rutasAdminReducer from "./rutasAdminReducer";

export default combineReducers({
  usuarios: usuariosReducer,
  datacovid: covidReducer,
  rutasadmin: rutasAdminReducer,
});
