import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cliente from "./componentes/Cliente";
import Empleado from "./componentes/Empleado";
import Producto from "./componentes/Producto";
import ListaProductos from "./componentes/ListaProductos";
import EditarProducto from "./componentes/EditarProducto";
import EditarCliente from "./componentes/EditarCliente";
import EditarEmpleado from "./componentes/EditarEmpleado";
import ListaEmpleados from "./componentes/ListaEmpleados";
import ListaClientes from "./componentes/ListaClientes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar-cliente" element={<Cliente />} />
        <Route path="/registrar-producto" element={<Producto />} />
        <Route path="/lista-productos" element={<ListaProductos />} /> 
        <Route path="/editar-producto/:id" element={<EditarProducto />} /> 
        <Route path="/editar-cliente/:id" element={<EditarCliente />} /> 
        <Route path="/editar-empleado/:id" element={<EditarEmpleado />} /> 
        <Route path="/registrar-empleado" element={<Empleado />} />
        <Route path="/lista-empleados" element={<ListaEmpleados />} />
        <Route path="/lista-clientes" element={<ListaClientes />} />
      </Routes>
    </div>
  );
}

export default App