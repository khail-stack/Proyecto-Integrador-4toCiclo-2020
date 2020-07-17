import React, { useState, useEffect } from "react";
import alertaTest from "./../assets/alertaTest.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./TestPage.css";
import { añadirInformacionAdicional } from "../actions/usuarioActions";
import {
  mostrarContenidoCuestionario,
  crearCuestionario,
} from "../actions/cuestionarioAction";
import CuestionarioContent from "./CuestionarioContent";

const TestPage = () => {
  const dispatch = useDispatch();

  const autenticado = useSelector((state) => state.usuarios.autenticado);

  const informacion = useSelector((state) => state.usuarios.usuarioAutenticado);

  useEffect(() => {
    console.log(informacion, "CHISTE1-");
    const long = informacion.length;
    if (long !== 0) {
      const uno = informacion.map((dos) => dos);
      console.log("AAAAAAAAAAAAAAAAA", uno[0].direccion);
      if (uno[0].direccion === null) {
        actualizarDato(false);
      } else {
        actualizarDato(true);
      }
      guardarDireccion(uno[0].direccion);
      guardarDistrito(uno[0].distrito);
    }
  }, [informacion]);

  const cuestionarioContenido = useSelector(
    (state) => state.cuestionario.contenidocuestionario
  );

  const distritos = [
    { value: "Cercado de Lima", label: "Cercado de Lima" },
    { value: "Ancón", label: "Ancón" },
    { value: "Ate", label: "Ate" },
    { value: "Barranco", label: "Barranco" },
    { value: "Breña", label: "Breña" },
    { value: "Carabayllo", label: "Carabayllo" },
    { value: "Chaclacayo", label: "Chaclacayo" },
    { value: "Chorrillos", label: "Chorrillos" },
    { value: "Cieneguilla", label: "Cieneguilla" },
    { value: "Comas", label: "Comas" },
    { value: "El Agustino", label: "El Agustino" },
    { value: "Independencia", label: "Independencia" },
    { value: "Jesús María", label: "Jesús María" },
    { value: "La Molina", label: "La Molina" },
    { value: "La Victoria", label: "La Victoria" },
    { value: "Lince", label: "Lince" },
    { value: "Los Olivos", label: "Los Olivos" },
    { value: "Lurigancho", label: "Lurigancho" },
    { value: "Lurín", label: "Lurín" },
    { value: "Magdalena del Mar", label: "Magdalena del Mar" },
    { value: "Miraflores", label: "Miraflores" },
    { value: "Pachacamac", label: "Pachacamac" },
    { value: "Pucusuna", label: "Pucusuna" },
    { value: "Pueblo Libre", label: "Pueblo Libre" },
    { value: "Puente Piedra", label: "Puente Piedra" },
    { value: "Punta Hermosa", label: "Punta Hermosa" },
    { value: "Punta Negra", label: "Punta Negra" },
    { value: "Rímac", label: "Rímac" },
    { value: "San Bartolo", label: "San Bartolo" },
    { value: "San Borja", label: "San Borja" },
    { value: "San Isidro", label: "San Isidro" },
    { value: "San Juan de Lurigancho", label: "San Juan de Lurigancho" },
    { value: "San Juan de Miraflores", label: "San Juan de Miraflores" },
    { value: "San Luis", label: "San Luis" },
    { value: "San Martin de Porres", label: "San Martin de Porres" },
    { value: "San Miguel", label: "San Miguel" },
    { value: "Santa Anita", label: "Santa Anita" },
    { value: "Santa María del Mar", label: "Santa María del Mar" },
    { value: "Santa Rosa", label: "Santa Rosa" },
    { value: "Santiago de Surco", label: "Santiago de Surco" },
    { value: "Surquillo", label: "Surquillo" },
    { value: "Villa El Salvador", label: "Villa El Salvador" },
    { value: "Villa María del Triunfo", label: "Villa María del Triunfo" },
  ];

  //const tres= uno.
  const [datoanterior, actualizarDato] = useState(false);
  const [distrito, guardarDistrito] = useState("");
  const [direccion, guardarDireccion] = useState("");

  const informacionAdicional = (informacion) =>
    dispatch(añadirInformacionAdicional(informacion));

  const submitAgregarInformacion = (e) => {
    e.preventDefault();

    // Validamos formulario
    if (distrito.trim() === "" || direccion.trim() === "") {
      return;
    }
    // Si no hay errores

    // Registrar el nuevo usuario
    informacionAdicional({
      distrito,
      direccion,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("idCuestionario")) {
      dispatch(mostrarContenidoCuestionario(true));
    } else {
      dispatch(mostrarContenidoCuestionario(false));
    }
  }, [dispatch]);

  const crearYmostrarCuestionario = (e) => {
    e.preventDefault();
    dispatch(crearCuestionario());
  };

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
                <h1 className="titulo-login">Realiza tu cuestionario</h1>
                <p className="subtitulo-login">
                  Porque asi podremos brindarte asistencia personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {autenticado === false ? (
          <div className="container ">
            <div className="row align-content-center espaciado-imagen mt_40">
              <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
                <div className="presentacion-test-home">
                  <h3 className="mb-3 titulo-test-home">¡Oh no!</h3>

                  <p className="segundo-test-home">Necesitas iniciar sesión</p>
                  <div className="action_btn d-flex align-items-center mt_40_boton no">
                    <Link
                      className="btn boton-test-home boton-test-home"
                      to={"/login"}
                      role="button"
                      tabIndex="-1"
                      aria-disabled="true"
                      id="botonNav"
                    >
                      Iniciar Sesión
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={alertaTest}
                  alt="Susana Distancia"
                  className="imagen animated fadeIn"
                ></img>
              </div>
              <hr />
            </div>
          </div>
        ) : cuestionarioContenido === true ? (
          <CuestionarioContent></CuestionarioContent>
        ) : informacion ? (
          <div className="container espaciado-login espacio">
            <div className="formulario-contenido">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contenido">
                    {distrito === null ? (
                      <h1 className="titulo-derecha text-center">
                        Porfavor, para mayor informacion llena estos campos.
                      </h1>
                    ) : (
                      <h1 className="titulo-derecha text-center">
                        Si desea actualizar tu direccion, cambielo aquí.
                      </h1>
                    )}

                    <div className="formulario-test">
                      <form onSubmit={submitAgregarInformacion}>
                        {distrito ? (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">Distrito</label>

                            <select
                              type="text"
                              placeholder={distrito}
                              className="form-control diseño-entrada"
                              name="Distrito"
                              value={distrito}
                              onChange={(e) => guardarDistrito(e.target.value)}
                              required
                            >
                              {distritos.map((distrititos) => (
                                <option value={distrititos.value}>
                                  {distrititos.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        ) : (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">Distrito</label>

                            <select
                              type="text"
                              placeholder="Agrega tu distrito"
                              className="form-control diseño-entrada"
                              name="Distrito"
                              value={distrito}
                              onChange={(e) => guardarDistrito(e.target.value)}
                              required
                            >
                              <option selected>
                                Selecciona un distrito...
                              </option>
                              {distritos.map((distrititos) => (
                                <option value={distrititos.value}>
                                  {distrititos.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                        ,
                        {direccion ? (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">
                              Dirección
                            </label>

                            <input
                              type="text"
                              placeholder={direccion}
                              className="form-control diseño-entrada"
                              name="Direccion"
                              value={direccion}
                              onChange={(e) => guardarDireccion(e.target.value)}
                              required
                            ></input>
                          </div>
                        ) : (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">
                              Dirección
                            </label>

                            <input
                              type="text"
                              placeholder="Agrega tu Dirección"
                              className="form-control diseño-entrada"
                              name="Direccion"
                              value={direccion}
                              onChange={(e) => guardarDireccion(e.target.value)}
                              required
                            ></input>
                          </div>
                        )}
                        {datoanterior === false ? (
                          <div className="extra-formulario text-center">
                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                type="submit"
                              >
                                Enviar datos
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="extra-formulario text-center">
                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                type="submit"
                              >
                                Actualizar Datos
                              </button>
                            </div>

                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                onClick={crearYmostrarCuestionario}
                              >
                                Realizar Test
                              </button>
                            </div>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
