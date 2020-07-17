import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarPerfilAdmin } from "../../actions/usuariosAdminAction";

const AdminPerfil = () => {
  const dispatch = useDispatch();

  const usuarioGeneral = useSelector(
    (state) => state.usuarios.usuarioAutenticado
  );

  const datosUsuario = usuarioGeneral.map((dos) => dos);

  console.log(datosUsuario[0]);

  const {
    id,
    direccion,
    distrito,
    email,
    nombre,
    telefono,
    apellido,
  } = datosUsuario[0];

  const [apellidoAdmin, setApellido] = useState(apellido);
  const [nombreAdmin, setNombre] = useState(nombre);
  const [telefonoAdmin, setTelefono] = useState(telefono);
  const [distritoAdmin, setDistrito] = useState(distrito);
  const [direccionAdmin, setDireccion] = useState(direccion);
  const [emailAdmin, setEmail] = useState(email);

  const usuarioEditado = {
    email: emailAdmin,
    nombre: nombreAdmin,
    apellido: apellidoAdmin,
    telefono: telefonoAdmin,
    distrito: distritoAdmin,
    direccion: direccionAdmin,
  };
  const editarUsuarioGeneral = (e) => {
    e.preventDefault();

    dispatch(editarPerfilAdmin(id, usuarioEditado));
  };

  return (
    <section className="content">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-8">
            <div className="card diseño-preguntas-admin border-2">
              <div className="card-body">
                <div className="row text-center justify-content-center">
                  <div className="col-md-8">
                    <h2 className="card-title mt-3 mb-5">Editar Perfil</h2>
                  </div>
                </div>

                <form onSubmit={editarUsuarioGeneral}>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail1">Apellidos</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail1"
                        placeholder="Mogollon"
                        value={apellidoAdmin}
                        onChange={(e) => setApellido(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail2">Nombres</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail2"
                        placeholder="Khail"
                        value={nombreAdmin}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail3">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="kmogollon1507@gmail.com"
                        value={emailAdmin}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Telefono</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="920096114"
                        value={telefonoAdmin}
                        onChange={(e) => setTelefono(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail5">Distrito</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail5"
                        placeholder="Distrito"
                        value={distritoAdmin}
                        onChange={(e) => setDistrito(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputPassword6">Direccion</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword6"
                        placeholder="Direccion"
                        value={direccionAdmin}
                        onChange={(e) => setDireccion(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row text-center justify-content-center">
                    <div className="col-md-8">
                      <button
                        type="submit"
                        className="btn btn-primary my-2 color-boton-admin boton-sombra-admin text-center btn-block"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPerfil;
