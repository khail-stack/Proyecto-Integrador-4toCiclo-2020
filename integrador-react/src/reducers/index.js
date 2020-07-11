import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import covidReducer from "./covidReducer";
import rutasAdminReducer from "./rutasAdminReducer";
import noticiasCovidReducer from "./noticiasCovidReducer";
import cuestionarioReducer from "./cuestionarioReducer";
import mandarRespuestaReducer from "./mandarRespuestaReducer";
import obtenerRespuestasReducer from "./obtenerRespuestasReducer";
import resultadoReducer from "./resultadoReducer";

export default combineReducers({
  usuarios: usuariosReducer,
  datacovid: covidReducer,
  rutasadmin: rutasAdminReducer,
  noticiascovid: noticiasCovidReducer,
  cuestionario: cuestionarioReducer,
  respuesta: mandarRespuestaReducer,
  obtenerRespuestas: obtenerRespuestasReducer,
  obtenerResultados: resultadoReducer,
});
