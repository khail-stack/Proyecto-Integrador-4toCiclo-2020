import React from "react";
import { Link } from "react-router-dom";
import "./AdminStyle.css";

const AdminHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fondo-header border-bottom sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="form-inline my-2 d-inline-block position-relative">
            <label className="sr-only" for="inlineFormInputGroup">
              Buscar
            </label>
            <div className="input-group mt-2 mb-2" style={{ width: "200px" }}>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Buscar"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          </form>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown no">
                <Link
                  className="nav-link dropdown-toggle color-nombre"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {localStorage.getItem("email") ? (
                    localStorage.getItem("email")
                  ) : (
                    <div></div>
                  )}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" href="#">
                    Mi Perfil
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Estadisticas
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to={"/logout-admin"}>
                    Cerrar Sesión
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
//En el Admin header va el adminContent
export default AdminHeader;