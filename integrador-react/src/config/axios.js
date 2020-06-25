import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:8081/v1",
});

export default clienteAxios;
