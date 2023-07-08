import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listadeusuarios from "./pages/lista_de_usuarios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listadeusuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
