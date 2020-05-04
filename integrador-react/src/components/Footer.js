import React from "react";
import "./Footer.css";
import logo from "./../assets/tecsup.png";

const Footer = () => {
  return (
    <div className="fondo-footer">
      <div className="container">
        <div className="row pb-5 pt-4 align-content-center">
          <div className="col-md-4">
            <p className="mb-4 titulo-footer">Nosotros</p>
            <p className="mb-5 texto-footer">Khail Mogollon Buitron</p>
            <p className="mb-5 texto-footer">Jonathan Huarca</p>
            <p className="texto-footer">Diego Rodriguez</p>
          </div>
          <div className="col-md-4">
            <p className="mb- titulo-footer">Contactos</p>

            <p className="subtitulo-footer">Email:</p>

            <p className="texto-footer">kmogollon1507@gmail.com</p>

            <p className="subtitulo-footer">Telefono:</p>

            <p className="texto-footer">920-096-114</p>
          </div>
          <div className="col-md-4 mt-5 color-footer">
            <img className="imagen-footer" src={logo} alt="Logo Tecsup" />
          </div>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr></hr>
          <div className="footer-footer">
            <p className="text-center copyright w-100 no-gutters copyright">
              &copy; Khail 2020.Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
