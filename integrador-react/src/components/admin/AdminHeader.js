import React from "react";
import { Link } from "react-router-dom";
import "./AdminStyle.css";
import { useSelector } from "react-redux";

const AdminHeader = () => {
  const usuario = useSelector((state) => state.usuarios.usuarioAutenticado);

  const uno = usuario.map((dos) => dos.nombre);
  const tres = usuario.map((cuatro) => cuatro.apellido);

  const nombre = uno[0];
  const apellido = tres[0];

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
            <label className="sr-only" htmlFor="inlineFormInputGroup">
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
              <li className="nav-item dropdown no paso">
                <Link
                  className="nav-link dropdown-toggle color_cabecera_admin a"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {`${nombre ? nombre + " " + apellido : <div></div>}`}
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
