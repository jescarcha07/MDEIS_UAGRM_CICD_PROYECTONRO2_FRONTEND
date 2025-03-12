// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cliente from "./componentes/Cliente";
import Empleado from "./componentes/Empleado";
import Producto from "./componentes/Producto";
import ListaClientes from "./componentes/ListaClientes";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar-cliente" element={<Cliente />} />
        <Route path="/registrar-producto" element={<Producto />} />
        <Route path="/registrar-empleado" element={<Empleado />} />
        <Route path="/lista-clientes" element={<ListaClientes />} />
      </Routes>
    </div>
  );
}

export default App;
