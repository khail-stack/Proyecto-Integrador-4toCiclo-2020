import {
  CONFIRMADOS_GLOBALES,
  CONFIRMADOS_GLOBALES_ERROR,
  GRAFICA_GLOBAL_CARGA,
  GRAFICA_GLOBAL_ERROR,
  GRAFICA_PERU_CARGA,
  GRAFICA_PERU_ERROR,
  P_DATA_PERU,
  P_DATA_CARTA_GLOBAL,
  P_DATA_GRAFICO_GLOBAL,
  FILTRO_CARTA_COVID,
  FILTRO_GRAFICO_COVID,
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
  type: P_DATA_CARTA_GLOBAL,
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
  type: P_DATA_GRAFICO_GLOBAL,
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
  type: P_DATA_PERU,
  payload: dataPeru,
});

const graficaPeruError = () => ({
  type: GRAFICA_PERU_ERROR,
  payload: true,
});

export function filtrarData(carta, grafico) {
  return (dispatch) => {
    dispatch(filtrarCarta(carta));
    dispatch(filtrarGrafico(grafico));
  };
}

const filtrarCarta = (carta) => ({
  type: FILTRO_CARTA_COVID,
  payload: carta,
});

const filtrarGrafico = (grafico) => ({
  type: FILTRO_GRAFICO_COVID,
  payload: grafico,
});
