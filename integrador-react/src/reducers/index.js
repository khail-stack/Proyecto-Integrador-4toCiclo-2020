import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import covidReducer from "./covidReducer";
import rutasAdminReducer from "./rutasAdminReducer";
import noticiasCovidReducer from "./noticiasCovidReducer";
import cuestionarioReducer from "./cuestionarioReducer";
import mandarRespuestaReducer from "./mandarRespuestaReducer";

export default combineReducers({
  usuarios: usuariosReducer,
  datacovid: covidReducer,
  rutasadmin: rutasAdminReducer,
  noticiascovid: noticiasCovidReducer,
  cuestionario: cuestionarioReducer,
  respuesta: mandarRespuestaReducer,
});
