import React, { useState } from "react";
import axios from "axios";

import Navbar from "../components/navbar";

export default function Criarusario() {
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:5000/usuarioadd", inputs)
      .then(function (response) {
        console.log(response.data);
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
              <p className="fs-1">Criar novo Usuário</p>
              <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  name="adicionar"
                  className="btn btn-primary"
                >
                  Salvar
                </button>
              </form>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
