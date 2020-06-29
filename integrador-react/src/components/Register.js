import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ACTIONS DE REDUX
import { registrarNuevoUsuarioAction } from "./../actions/usuarioActions";

const Register = ({ history }) => {
  const autenticado = useSelector((state) => state.usuarios.autenticado);

  useEffect(() => {
    if (autenticado) {
      history.push("/casos-mundo");
    }
  }, [autenticado]);
  // State del componente
  const [username, guardarUsername] = useState("");
  const [email, guardarEmail] = useState("");
  const [password, guardarPassword] = useState("");
  const [nombre, guardarNombre] = useState("");
  const [apellido, guardarApellido] = useState("");
  const [edad, guardarEdad] = useState("");
  const [dni, guardarDni] = useState("");
  const [sexo, guardarSexo] = useState("");
  const [telefono, guardarTelefono] = useState("");
  //const [role, guardarRole] = useState("[" + `  "admin"  ` + "]");
  // Utilizar use dispatch y te crea una función
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector((state) => state.usuarios.loading);
  const error = useSelector((state) => state.usuarios.error);

  console.log(cargando);
  // Mandar llamar el action de usuarioAction
  const registrarUsuario = (usuario) =>
    dispatch(registrarNuevoUsuarioAction(usuario));

  const submitNuevoUsuario = (e) => {
    e.preventDefault();

    // Validamos formulario

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      edad <= 0 ||
      sexo.trim() === "" ||
      telefono <= 0
    ) {
      return;
    }
    // Si no hay errores

    // Registrar el nuevo usuario
    registrarUsuario({
      username,
      email,
      password,
      nombre,
      apellido,
      edad,
      dni,
      sexo,
      telefono,
      //role,
    });
  };
  return (
    <>
      <div>
        <div className="fondo-register">
          <div className="circulo uno"></div>
          <div className="circulo dos"></div>
          <div className="circulo tres"></div>
          <div>
            <div className="container mt-5">
              <div className="row align-content-center">
                <div className="col text-center">
                  <h1 className="titulo-register">Registrate</h1>
                  <p className="subtitulo-register">
                    Porque asi podremos brindarte asistencia personalizada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container espaciado-register espacio">
          <div className="formulario-contenido">
            <div className="row">
              <div className="col-lg-5">
                <div className="contenido-izquierda pb-5 no">
                  <h3 className="titulo-izquierda">Ya tienes una cuenta?</h3>
                  <h2 className="subtitulo-izquierda">Inicia sesión ahora!</h2>
                  <Link
                    className="btn boton-izquierda"
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
              <div className="col-lg-7">
                <div className="contenido-derecha">
                  <h2 className="titulo-derecha">Registrate</h2>
                  <form
                    action="/#"
                    className="formulario-login"
                    onSubmit={submitNuevoUsuario}
                  >
                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Nombres</label>
                      <input
                        type="text"
                        placeholder="Nombres"
                        className="form-control diseño-entrada"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => guardarNombre(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Apellidos</label>
                      <input
                        type="text"
                        placeholder="Apellidos"
                        className="form-control diseño-entrada"
                        name="apellido"
                        value={apellido}
                        onChange={(e) => guardarApellido(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Edad</label>
                      <input
                        type="number"
                        placeholder="Edad"
                        className="form-control diseño-entrada"
                        name="edad"
                        value={edad}
                        onChange={(e) => guardarEdad(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">DNI</label>
                      <input
                        type="number"
                        placeholder="DNI"
                        className="form-control diseño-entrada"
                        name="dni"
                        value={dni}
                        onChange={(e) => guardarDni(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Sexo</label>
                      <input
                        type="text"
                        placeholder="Sexo"
                        className="form-control diseño-entrada"
                        name="sexo"
                        value={sexo}
                        onChange={(e) => guardarSexo(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Celular</label>

                      <input
                        type="number"
                        placeholder="920096114"
                        className="form-control diseño-entrada"
                        name="telefono"
                        value={telefono}
                        onChange={(e) => guardarTelefono(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Usuario</label>
                      <input
                        type="text"
                        placeholder="Usuario"
                        className="form-control diseño-entrada"
                        name="username"
                        value={username}
                        onChange={(e) => guardarUsername(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Contraseña</label>
                      <input
                        type="password"
                        placeholder="********"
                        className="form-control diseño-entrada"
                        name="password"
                        value={password}
                        onChange={(e) => guardarPassword(e.target.value)}
                        required
                      ></input>
                    </div>

                    <div className="form-group subtitulo-formulario">
                      <label className="texto-formulario">Email</label>
                      <input
                        type="email"
                        placeholder="Correo electronico"
                        className="form-control diseño-entrada"
                        name="email"
                        value={email}
                        onChange={(e) => guardarEmail(e.target.value)}
                        required
                      ></input>
                    </div>

                    {/*<div className="form-group subtitulo-formulario">
                      <input
                        type="hidden"
                        className="form-control diseño-entrada"
                        name="tipo"
                        value={role}
                        onChange={(e) => guardarRole(e.target.value)}
                        required
                      ></input>
                      </div>*/}

                    <div className="extra-formulario">
                      <div className="d-flex justify-content-start align-items-start">
                        <button type="submit" className="btn boton-iniciar">
                          Registrarse
                        </button>
                      </div>
                    </div>
                  </form>

                  {cargando ? <p>Cargando...</p> : null}
                  {error ? (
                    <p className="alert-danger py-2 mt-4 text-center">
                      Hubo un error
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
