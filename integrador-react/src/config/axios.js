import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:8081",
});

export default clienteAxios;
