import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import CovidPage from "./components/CovidPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import TestPage from "./components/TestPage";
import AdminPage from "./components/admin/AdminPage";
import AdminLogin from "./components/admin/AdminLogin";
import Header from "./components/Header";
import NoticiasCovid from "./components/NoticiasCovid";
import { useDispatch, useSelector } from "react-redux";
import { autenticadoToken } from "./actions/usuarioActions";
import Footer from "./components/Footer";
import RouteError from "./components/RouteError";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const Logout = () => {
  const dispatch = useDispatch();

  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("rol");
  dispatch(autenticadoToken(false));
  return <Redirect to={"/login"} />;
};

const LogoutAdmin = () => {
  const dispatch = useDispatch();

  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("rol");
  dispatch(autenticadoToken(false));
  return <Redirect to={"/admin"} />;
};

const App = () => {
  const dispatch = useDispatch();

  const autenticado = useSelector((state) => state.usuarios.autenticado);
  const paginaLogin = useSelector((state) => state.usuarios.paginaLoginAdmin);
  const paginaError = useSelector((state) => state.usuarios.paginaError);
  console.log(autenticado);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      dispatch(autenticadoToken(false));
    } else {
      dispatch(autenticadoToken(true));
    }
  }, [autenticado]);

  return (
    <Router>
      <Provider store={store}>
        {localStorage.getItem("rol") === "ROLE_USER" &&
        paginaLogin === false &&
        paginaError === false ? (
          <Header />
        ) : localStorage.getItem("rol") === null &&
          paginaLogin === false &&
          paginaError === false ? (
          <Header />
        ) : paginaLogin === true ? (
          <div></div>
        ) : paginaError === true ? (
          <div></div>
        ) : (
          <div></div>
        )}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/casos-mundo" component={CovidPage}></Route>
          <Route exact path="/cuestionario" component={TestPage}></Route>
          <Route exact path="/noticias/covid" component={NoticiasCovid}></Route>
          <RouteError
            exact
            path="/admin/home"
            component={AdminPage}
          ></RouteError>
          <Route exact path="/admin" component={AdminLogin}></Route>
          <Route exact path="/logout" component={Logout}></Route>
          <Route exact path="/logout-admin" component={LogoutAdmin}></Route>
          <Route path="*" component={ErrorPage}></Route>
        </Switch>
        {localStorage.getItem("rol") === "ROLE_USER" &&
        paginaLogin === false &&
        paginaError === false ? (
          <Footer />
        ) : localStorage.getItem("rol") === null &&
          paginaLogin === false &&
          paginaError === false ? (
          <Footer />
        ) : paginaLogin === true ? (
          <div></div>
        ) : paginaError === true ? (
          <div></div>
        ) : (
          <div></div>
        )}
      </Provider>
    </Router>
  );
};

export default AppWrapper;
