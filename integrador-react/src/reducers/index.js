import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import covidReducer from "./covidReducer";
import rutasAdminReducer from "./rutasAdminReducer";
import noticiasCovidReducer from "./noticiasCovidReducer";

export default combineReducers({
  usuarios: usuariosReducer,
  datacovid: covidReducer,
  rutasadmin: rutasAdminReducer,
  noticiascovid: noticiasCovidReducer,
});
