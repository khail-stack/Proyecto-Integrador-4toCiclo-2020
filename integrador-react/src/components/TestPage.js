import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TestPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="fondo-login">
        <div className="circulo uno"></div>
        <div className="circulo dos"></div>
        <div className="circulo tres"></div>
        <div>
          <div className="container mt-5">
            <div className="row align-content-center">
              <div className="col text-center">
                <h1 className="titulo-login">Realiza tu cuestionario</h1>
                <p className="subtitulo-login">
                  Porque asi podremos brindarte asistencia personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TestPage;
