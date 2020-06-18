import React from "react";
import "./Home.css";
import SusanaDistancia from "./../assets/doctor.png";
import mantenDistancia from "./../assets/mantenDistancia.jpg";
import quedateCasa from "./../assets/quedateCasa.jpg";
import lavadoManos from "./../assets/lavadoManos.jpg";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="fondo-home">
        <div className="circulo uno"></div>
        <div className="circulo dos"></div>
        <div className="circulo tres"></div>
        <div>
          <div className="container mt-5">
            <div className="row align-content-center">
              <div className="col-lg-6">
                <img
                  src={SusanaDistancia}
                  alt="Susana Distancia"
                  className="imagen animated fadeIn"
                ></img>
              </div>
              <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
                <div className="presentacion-home">
                  <h3 className="mb-3 titulo-home">
                    Tienes problemas para respirar?, Fiebre?, Dolor de cabeza?
                  </h3>

                  <p className="segundo-home">
                    Ten en cuenta que este solo es un descarte preliminar, no es
                    el resultado verdadero
                  </p>
                  <div className="action_btn d-flex align-items-center mt_40 no">
                    <a
                      className="btn boton-home boton_home"
                      href="/"
                      role="button"
                      tabIndex="-1"
                      aria-disabled="true"
                      id="botonNav"
                    >
                      Realizar Test
                    </a>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col espaciado-home">
            <div>
              <h2 className="text-center subtitulo-home mb-5 espaciado-bajo">
                Medidas de Prevención
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12 mb-5">
                <div className="card card2 text-center cartas shadow-lg mb-5">
                  <img
                    src={mantenDistancia}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mantén distancia</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mb-5">
                <div className="card card2 text-center cartas shadow-lg mb-5">
                  <img src={quedateCasa} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Quédate en casa</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mb-5">
                <div className="card card2 text-center cartas shadow-lg mb-5">
                  <img src={lavadoManos} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Lávate las manos</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
