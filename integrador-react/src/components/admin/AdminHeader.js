import React from "react";
import "./AdminStyle.css";

const AdminHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fondo-header border-bottom">
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
                <a
                  className="nav-link dropdown-toggle color-nombre"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Khail Mogollon
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Mi Perfil
                  </a>
                  <a className="dropdown-item" href="#">
                    Estadisticas
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Cerrar Sesión
                  </a>
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
