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
        "https://gnews.io/api/v3/search?q=covid&token=9f8de7fa3c3cedf7e30fe32b2fc40e9b&lang=es"
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
