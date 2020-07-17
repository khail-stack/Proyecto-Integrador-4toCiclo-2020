import {
  MOSTRAR_GRAFICO_LINEAL_ADMIN_CARGA,
  MOSTRAR_GRAFICO_LINEAL_ADMIN_EXITO,
  MOSTRAR_GRAFICO_LINEAL_ADMIN_ERROR,
  MOSTRAR_GRAFICO_CIRCULAR_ADMIN_CARGA,
  MOSTRAR_GRAFICO_CIRCULAR_ADMIN_EXITO,
  MOSTRAR_GRAFICO_CIRCULAR_ADMIN_ERROR,
  MOSTRAR_GRAFICO_BARRAS_ADMIN_CARGA,
  MOSTRAR_GRAFICO_BARRAS_ADMIN_EXITO,
  MOSTRAR_GRAFICO_BARRAS_ADMIN_ERROR,
} from "./../types/index";
import { clienteAxios } from "../config/axios";

export function graficoLinealAdmin() {
  return async (dispatch) => {
    dispatch(graficaLinealAdminCarga());
    try {
      const token = localStorage.getItem("token");
      const datoGraficaLineal = await clienteAxios(token).get(
        "/resources/datos/fecha"
      );
      dispatch(graficaLinealAdminExito(datoGraficaLineal.data));
    } catch (error) {
      dispatch(graficaLinealAdminError());
    }
  };
}

const graficaLinealAdminCarga = () => ({
  type: MOSTRAR_GRAFICO_LINEAL_ADMIN_CARGA,
  payload: true,
});

const graficaLinealAdminExito = (datosGraficaLineal) => ({
  type: MOSTRAR_GRAFICO_LINEAL_ADMIN_EXITO,
  payload: datosGraficaLineal,
});

const graficaLinealAdminError = () => ({
  type: MOSTRAR_GRAFICO_LINEAL_ADMIN_ERROR,
  payload: true,
});

export function graficoCircularAdmin() {
  return async (dispatch) => {
    dispatch(graficaCircularAdminCarga());
    try {
      const token = localStorage.getItem("token");
      const datoGraficaCircular = await clienteAxios(token).get(
        "/users/posiblesCasos/usuarios"
      );
      dispatch(graficaCircularAdminExito(datoGraficaCircular.data));
    } catch (error) {
      dispatch(graficaCircularAdminError());
    }
  };
}

const graficaCircularAdminCarga = () => ({
  type: MOSTRAR_GRAFICO_CIRCULAR_ADMIN_CARGA,
  payload: true,
});

const graficaCircularAdminExito = (datosGraficaCircular) => ({
  type: MOSTRAR_GRAFICO_CIRCULAR_ADMIN_EXITO,
  payload: datosGraficaCircular,
});

const graficaCircularAdminError = () => ({
  type: MOSTRAR_GRAFICO_CIRCULAR_ADMIN_ERROR,
  payload: true,
});

export function graficoBarrasAdmin() {
  return async (dispatch) => {
    dispatch(graficaBarrasAdminCarga());
    try {
      const token = localStorage.getItem("token");
      const dataGraficoBarras = await clienteAxios(token).get(
        "/resources/distritos/positivos"
      );
      dispatch(graficaBarrasAdminExito(dataGraficoBarras.data));
    } catch (error) {
      dispatch(graficaBarrasAdminError());
    }
  };
}

const graficaBarrasAdminCarga = () => ({
  type: MOSTRAR_GRAFICO_BARRAS_ADMIN_CARGA,
  payload: true,
});

const graficaBarrasAdminExito = (datosGraficaBarras) => ({
  type: MOSTRAR_GRAFICO_BARRAS_ADMIN_EXITO,
  payload: datosGraficaBarras,
});

const graficaBarrasAdminError = () => ({
  type: MOSTRAR_GRAFICO_BARRAS_ADMIN_ERROR,
  payload: true,
});
