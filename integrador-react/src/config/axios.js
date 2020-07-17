import axios from "axios";

export const clienteAxios = (token) =>
  axios.create({
    //baseURL: "https://juntos-contra-covid-spring.herokuapp.com/v1",
    baseURL: "http://localhost:8081/v1/",
    headers: { Authorization: `Bearer ${token}` },
  });

export const clienteAxios2 = axios.create({
  //baseURL: "https://juntos-contra-covid-spring.herokuapp.com/",
  baseURL: "http://localhost:8081/",
});
