import React from "react";
import "./NoticiasCovid.css";

const CardNoticia = ({ contenido }) => {
  return (
    <div className="card diseño_carta_noticias">
      <img
        src={contenido.primary_image_link}
        className="card-img-top"
        alt={contenido.title}
      />
      <div className="card-body">
        <h5 className="card-title">{contenido.title}</h5>
        <p className="card-text">{contenido.snippet}</p>
        <div className="no text-center mt-3">
          <a
            className="btn btn-danger btn_noticias_color btn-block"
            href={contenido.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Saber más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardNoticia;
