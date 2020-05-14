import React from "react";
import "./CovidPage.css";

export const CardCovid = ({ contenido }) => {
  return (
    <div className="container ">
      <div className="row mb-5 mx-auto">
        <div className="col-md-4">
          <div className="card bg-light mb-3 carta_1">
            <div className="card-body">
              <h2 className="card-title">
                {contenido.confirmed.value.toLocaleString()}
              </h2>
              <h5 className="card-text desc_card">Infectados</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-light mb-3 carta_2">
            <div className="card-body">
              <h2 className="card-title">
                {contenido.recovered.value.toLocaleString()}
              </h2>
              <h5 className="card-text desc_card">Recuperados</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-light mb-3 carta_3">
            <div className="card-body">
              <h2 className="card-title">
                {contenido.deaths.value.toLocaleString()}
              </h2>
              <h5 className="card-text desc_card">Muertes</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
