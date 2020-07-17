import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import covidReducer from "./covidReducer";
import rutasAdminReducer from "./rutasAdminReducer";
import noticiasCovidReducer from "./noticiasCovidReducer";
import cuestionarioReducer from "./cuestionarioReducer";
import mandarRespuestaReducer from "./mandarRespuestaReducer";
import obtenerRespuestasReducer from "./obtenerRespuestasReducer";
import resultadoReducer from "./resultadoReducer";
import datosAdminReducer from "./datosAdminReducer";
import graficasAdminReducer from "./graficasAdminReducer";
import agregarPreguntaReducer from "./agregarPreguntaReducer";
import usuariosAdminReducer from "./usuariosAdminReducer";

export default combineReducers({
  usuarios: usuariosReducer,
  datacovid: covidReducer,
  rutasadmin: rutasAdminReducer,
  noticiascovid: noticiasCovidReducer,
  cuestionario: cuestionarioReducer,
  respuesta: mandarRespuestaReducer,
  obtenerRespuestas: obtenerRespuestasReducer,
  obtenerResultados: resultadoReducer,
  datosAdmin: datosAdminReducer,
  graficasAdmin: graficasAdminReducer,
  preguntas: agregarPreguntaReducer,
  usuariosAdmin: usuariosAdminReducer,
});
