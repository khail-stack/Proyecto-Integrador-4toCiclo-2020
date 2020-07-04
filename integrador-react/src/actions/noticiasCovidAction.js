import {
  CARGAR_DATA_NOTICIAS,
  DATA_NOTICIAS_EXITO,
  DATA_NOTICIAS_ERROR,
} from "./../types/index";

import axios from "axios";

export function noticiasCovid() {
  return async (dispatch) => {
    dispatch(cargarNoticias());

    try {
      const respuesta = await axios.get(
        "https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=b9e29dc8c1ce4ea4b13a2f660fd4ec70&language=es"
      );
      dispatch(getNoticias(respuesta.data.articles));
      console.log(respuesta.data.articles);
    } catch (error) {
      dispatch(getErrorNoticias());
    }
  };
}

const cargarNoticias = () => ({
  type: CARGAR_DATA_NOTICIAS,
  payload: true,
});

const getNoticias = (noticias) => ({
  type: DATA_NOTICIAS_EXITO,
  payload: noticias,
});

const getErrorNoticias = () => ({
  type: DATA_NOTICIAS_ERROR,
  payload: true,
});
