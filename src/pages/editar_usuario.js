//libs importadas
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

//componentes importados
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Editarusuario() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUsuario();
  }, []);

  function getUsuario() {
    axios
      .get(`http://127.0.0.1:5000/detalhedousuario/${id}`) // Correção: usar crases/graves
      .then(function (response) {
        console.log(response.data);
        setInputs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://127.0.0.1:5000/atualizarusuario/${id}`, inputs)
      .then(function (response) {
        console.log(response.data);
        //isso aqui e um alert personalizado
        Swal.fire({
          text: "Usuário editado com sucesso!",
          icon: "success",
          confirmButtonColor: "#198754",
        });

        //navegando de volta para lista de usuarios
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container h-100">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <p className="fs-1">Editar usuario</p>
              <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    value={inputs.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  name="atualizar"
                  className="btn btn-primary"
                >
                  Salvar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
