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
        "https://cryptic-ravine-96718.herokuapp.com/"
      );
      dispatch(getNoticias(respuesta.data.news));
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
