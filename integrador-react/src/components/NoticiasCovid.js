import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noticiasCovid } from "../actions/noticiasCovidAction";
import "./NoticiasCovid.css";
import CardNoticia from "./CardNoticia";
import Spinner from "./Spinner";

const NoticiasCovid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(noticiasCovid());
  }, [dispatch]);

  const noticias = useSelector((state) => state.noticiascovid.noticiascovid);
  const loading = useSelector((state) => state.noticiascovid.loading);
  return (
    <div>
      <div className="fondo-login">
        <div className="circulo uno"></div>
        <div className="circulo dos"></div>
        <div className="circulo tres"></div>
        <div>
          <div className="container mt-5">
            <div className="row align-content-center">
              <div className="col text-center">
                <h1 className="titulo-login">Noticias</h1>
                <p className="subtitulo-login">
                  Mira aquí las noticias sobre el coronavirus de todo el mundo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading === false ? (
        <div className="container">
          <div className="card-columns mt_40">
            {noticias.map((noticia) => (
              <CardNoticia contenido={noticia}></CardNoticia>
            ))}
          </div>

          <div>
            <i className="datos_de_informacion">
              * Datos proporcionados por el api de "BreakingApi"
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.breakingapi.com/playground"
              >
                https://app.breakingapi.com/playground
              </a>
            </i>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div role="status">
            <Spinner></Spinner>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticiasCovid;
