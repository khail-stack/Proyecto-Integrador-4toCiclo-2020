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
import {
  autenticadoToken,
  cambiarEstadoAutenticado,
} from "./actions/usuarioActions";
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
  //window.location.reload();
  const dispatch = useDispatch();

  localStorage.clear();
  dispatch(cambiarEstadoAutenticado(false));
  return <Redirect to={"/login"} />;
};

const LogoutAdmin = () => {
  const dispatch = useDispatch();

  localStorage.clear();
  dispatch(cambiarEstadoAutenticado(false));
  return <Redirect to={"/admin"} />;
};

const App = () => {
  const dispatch = useDispatch();

  //const autenticado = useSelector((state) => state.usuarios.autenticado);
  const paginaLogin = useSelector((state) => state.usuarios.paginaLoginAdmin);
  const paginaError = useSelector((state) => state.usuarios.paginaError);
  const data = useSelector((state) => state.usuarios.usuarioAutenticado);
  const autenticado = useSelector((state) => state.usuarios.autenticado);

  console.log(autenticado);
  const rolcito = localStorage.getItem("rol");

  const rolename = data.map((rol) => rol.roles);
  const roleid = rolename.map((ro) => ro[0]);
  const salporfa = roleid.map((r) => r.id);
  const salctmr = salporfa[0];

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(cambiarEstadoAutenticado(true));
      const id = localStorage.getItem("id");
      dispatch(autenticadoToken(id));
    } else {
      //window.location.reload();
      dispatch(cambiarEstadoAutenticado(false));
    }
  }, [dispatch, autenticado]);

  return (
    <Router>
      <Provider store={store}>
        {salctmr === 1 && paginaLogin === false && paginaError === false ? (
          <Header />
        ) : salctmr === undefined &&
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
          {autenticado ? (
            rolcito === "ROLE_USER" ? (
              <RouteError
                exact
                path="/admin/home"
                component={AdminPage}
              ></RouteError>
            ) : (
              <Route exact path="/admin/home" component={AdminPage}></Route>
            )
          ) : (
            <RouteError
              exact
              path="/admin/home"
              component={AdminPage}
            ></RouteError>
          )}
          <Route exact path="/admin" component={AdminLogin}></Route>
          <Route exact path="/logout" component={Logout}></Route>
          <Route exact path="/logout-admin" component={LogoutAdmin}></Route>
          <Route path="*" component={ErrorPage}></Route>
        </Switch>
        {salctmr === 1 && paginaLogin === false && paginaError === false ? (
          <Footer />
        ) : salctmr === undefined &&
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
