import {
  CONFIRMADOS_GLOBALES,
  CONFIRMADOS_GLOBALES_EXITO,
  CONFIRMADOS_GLOBALES_ERROR,
  GRAFICA_GLOBAL_CARGA,
  GRAFICA_GLOBAL_EXITO,
  GRAFICA_GLOBAL_ERROR,
  GRAFICA_PERU_CARGA,
  GRAFICA_PERU_EXITO,
  GRAFICA_PERU_ERROR,
  GRAFICA_ACTUAL_EXITO,
  GRAFICA_ACTUAL_EXITO2,
} from "./../types/index";

import axios from "axios";

export function dataGlobal() {
  return async (dispatch) => {
    dispatch(cargandoDataGlobal());

    try {
      const respuesta = await axios.get("https://covid19.mathdro.id/api");
      dispatch(getDataGlobal(respuesta.data));
    } catch (error) {
      dispatch(getDataGlobalError());
    }
  };
}

const cargandoDataGlobal = () => ({
  type: CONFIRMADOS_GLOBALES,
  payload: true,
});

const getDataGlobal = (dataGlobal) => ({
  type: CONFIRMADOS_GLOBALES_EXITO,
  payload: dataGlobal,
});

const getDataGlobalError = () => ({
  type: CONFIRMADOS_GLOBALES_ERROR,
  payload: true,
});

export function graficoGlobal() {
  return async (dispatch) => {
    dispatch(graficaGlobalCarga());
    try {
      const { data } = await axios.get("https://covid19.mathdro.id/api/daily");
      dispatch(graficaGlobalExito(data));
    } catch (error) {
      dispatch(graficaGlobalError());
    }
  };
}

const graficaGlobalCarga = () => ({
  type: GRAFICA_GLOBAL_CARGA,
  payload: true,
});

const graficaGlobalExito = (datos) => ({
  type: GRAFICA_GLOBAL_EXITO,
  payload: datos,
});

const graficaGlobalError = () => ({
  type: GRAFICA_GLOBAL_ERROR,
  payload: true,
});

export function dataGeneralPeru() {
  return async (dispatch) => {
    dispatch(graficaPeruCarga());
    try {
      const { data } = await axios.get(
        "https://covid19.mathdro.id/api/countries/peru"
      );

      dispatch(graficaPeruExito(data));
    } catch (error) {
      console.log(error);
      dispatch(graficaPeruError());
    }
  };
}

const graficaPeruCarga = () => ({
  type: GRAFICA_PERU_CARGA,
  payload: true,
});

const graficaPeruExito = (dataPeru) => ({
  type: GRAFICA_PERU_EXITO,
  payload: dataPeru,
});

const graficaPeruError = () => ({
  type: GRAFICA_PERU_ERROR,
  payload: true,
});

export function dataActivo(dataRequerido, dataRequerida2) {
  return (dispatch) => {
    dispatch(enviarData(dataRequerido));
    dispatch(enviarData2(dataRequerida2));
  };
}

const enviarData = (dataRequerido) => ({
  type: GRAFICA_ACTUAL_EXITO,
  payload: dataRequerido,
});

const enviarData2 = (dataRequerida2) => ({
  type: GRAFICA_ACTUAL_EXITO2,
  payload: dataRequerida2,
});
