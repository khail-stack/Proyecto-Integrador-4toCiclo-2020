import "./App.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
        <Footer></Footer>
      </Provider>
    </Router>
  );
}

export default App;
