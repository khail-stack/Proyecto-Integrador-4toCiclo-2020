import React from "react";
import $ from "jquery";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 1) {
      $("#banner").addClass("shrink");
      $("#letra1").addClass("letra1");
      $("#letra2").addClass("letra2");
      $("#letra3").addClass("letra3");
      $("#tituNav").addClass("tituNav");
      $("#botonNav").addClass("botonNav");
      $("#hamburguesita").addClass("hamburguesita");
    } else {
      $("#banner").removeClass("shrink");
      $("#letra1").removeClass("letra1");
      $("#letra2").removeClass("letra2");
      $("#letra3").removeClass("letra3");
      $("#tituNav").removeClass("tituNav");
      $("#botonNav").removeClass("botonNav");
      $("#hamburguesita").removeClass("hamburguesita");
    }
  });

  const rol = useSelector((state) => state.usuarios.rol);

  console.log(rol);
  return (
    <>
      {rol === 1 ? (
        <nav
          className="navbar navbar-expand-xl navbar-dark fondo pt-3 pb-3 fixed-top stroke"
          id="banner"
        >
          <div className="container">
            <div className="no">
              <Link className="navbar-brand" to={"/"} id="tituNav">
                JuntosContraCoronavirus
              </Link>
            </div>
            <button
              className="navbar-toggler pasiva"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" id="hamburguesita"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto esto-no">
                <li className="nav-item">
                  <Link
                    to={"/cuestionario"}
                    className="nav-link cursor"
                    href="/"
                    id="letra1"
                  >
                    Realizar Test
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/casos-mundo"}
                    className="nav-link cursor"
                    href="/"
                    id="letra2"
                  >
                    Casos en el mundo
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link cursor" href="/" id="letra3">
                    Medidas de prevención
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto no">
                <li className="nav-item no">
                  <Link
                    className="btn boton"
                    to={"/login"}
                    role="button"
                    tabIndex="-1"
                    aria-disabled="true"
                    id="botonNav"
                  >
                    Iniciar Sesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Header;
