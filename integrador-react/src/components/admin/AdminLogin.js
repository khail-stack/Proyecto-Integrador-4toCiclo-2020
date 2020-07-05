import React, { useState, useEffect } from "react";
import "./AdminLogin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  iniciarSesionAction,
  mostrarAdminLogin,
} from "../../actions/usuarioActions";

const AdminLogin = ({ history }) => {
  const [username, guardarUsername] = useState("");
  const [password, guardarPassword] = useState("");

  const dispatch = useDispatch();

  const autenticado = useSelector((state) => state.usuarios.autenticado);
  const loginUsuario = (usuarioLogueado) => {
    dispatch(iniciarSesionAction(usuarioLogueado));
  };

  const submitIniciarSesionAdmin = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      return;
    }

    loginUsuario({ username, password });
  };

  useEffect(() => {
    dispatch(mostrarAdminLogin());
    if (autenticado) {
      history.push("/admin/home");
    }
  }, [autenticado]);

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={submitIniciarSesionAdmin}
          >
            <span className="login100-form-title pb-5">Login</span>

            <div
              className="wrap-input100 validate-input mb-3"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Usuario"
                value={username}
                onChange={(e) => guardarUsername(e.target.value)}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input mb-5"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => guardarPassword(e.target.value)}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn mt-5">
              <button type="submit" className="login100-form-btn">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
