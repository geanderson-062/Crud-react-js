import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import axios from "axios";

export default function Listadeusuarios() {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    getUsuario();
  }, []);

  function getUsuario() {
    axios
      .get("http://127.0.0.1:5000/listadeusuarios")
      .then(function (response) {
        console.log(response.data);
        setUsuario(response.data);
      });
  }

  const deleteUsuario = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/deletarusuario/${id}`)

      .then(function (response) {
        console.log(response.data);
        getUsuario();
      });
    alert("Usuário deletado com sucesso");
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12">
              <p>
                <Link to="/adicionar_novo_usuario" className="btn btn-success">
                  adicionar novo usuário
                </Link>
              </p>
              <h1>Lista de Usuários</h1>
              <br></br>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Data</th>
                    <th scope="col">Opções</th>
                  </tr>
                </thead>
                <tbody>
                  {usuario.map((usuario, key) => (
                    <tr key={key}>
                      <td>{usuario.id}</td>
                      <td>{usuario.nome}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.data}</td>
                      <td>
                        <Link
                          to={`usuario/${usuario.id}/edit`}
                          className="btn btn-success"
                          style={{ marginRight: "10px" }}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUsuario(usuario.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
