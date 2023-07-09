import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* importando as telas */
import Listadeusuarios from "./pages/lista_de_usuarios";
import Criarusario from "./pages/criar_novo_usuario";
import Editarusuario from "./pages/editar_usuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listadeusuarios />} />
        <Route path="/adicionar_novo_usuario" element={<Criarusario />} />
        <Route path="usuario/:id/edit" element={<Editarusuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
