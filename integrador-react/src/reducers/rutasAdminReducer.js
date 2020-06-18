import {
  FILTRO_DASHBOARD,
  FILTRO_PREGUNTAS,
  FILTRO_USUARIOS,
  FILTRO_PERFIL,
  FILTRO_AGREGAR_PREGUNTA,
} from "./../types/index";

const initialState = {
  dashboard: true,
  preguntas: false,
  usuariosAdmin: false,
  perfil: false,
  agregarPregunta: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FILTRO_DASHBOARD:
      return {
        ...state,
        dashboard: action.payload,
        preguntas: false,
        usuariosAdmin: false,
        perfil: false,
        agregarPregunta: false,
      };

    case FILTRO_PREGUNTAS:
      return {
        ...state,
        preguntas: action.payload,
        dashboard: false,
        usuariosAdmin: false,
        perfil: false,
        agregarPregunta: false,
      };

    case FILTRO_USUARIOS:
      return {
        ...state,
        usuariosAdmin: action.payload,
        dashboard: false,
        preguntas: false,
        perfil: false,
        agregarPregunta: false,
      };

    case FILTRO_PERFIL:
      return {
        ...state,
        perfil: action.payload,
        dashboard: false,
        preguntas: false,
        usuariosAdmin: false,
        agregarPregunta: false,
      };

    case FILTRO_AGREGAR_PREGUNTA:
      return {
        ...state,
        agregarPregunta: action.payload,
        perfil: false,
        dashboard: false,
        preguntas: false,
        usuariosAdmin: false,
      };
    default:
      return state;
  }
}
