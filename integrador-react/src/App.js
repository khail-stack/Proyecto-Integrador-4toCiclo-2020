import "./App.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import CovidPage from "./components/CovidPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import TestPage from "./components/TestPage";
import AdminPage from "./components/admin/AdminPage";
import AdminLogin from "./components/admin/AdminLogin";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/casos-mundo" component={CovidPage}></Route>
          <Route exact path="/cuestionario" component={TestPage}></Route>
          <Route exact path="/admin/home" component={AdminPage}></Route>
          <Route exact path="/admin" component={AdminLogin}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
