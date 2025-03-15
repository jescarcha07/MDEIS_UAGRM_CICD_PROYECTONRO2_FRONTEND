import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Sistema de Ventas</h1>
      <p className="lead mb-4">Seleccione una opción:</p>
      
      <div className="d-flex flex-column align-items-center gap-4">
        {/* Opciones de Registrar */}
        <div className="p-4 border rounded shadow-sm w-75 bg-dark text-white">
          <h4 className="mb-3 display-6">Registros</h4>
          <div className="d-flex flex-column gap-3">
            <Link to="/registrar-cliente" className="btn btn-primary btn-lg">Registrar Cliente</Link>
            <Link to="/registrar-producto" className="btn btn-primary btn-lg">Registrar Producto</Link>
            <Link to="/registrar-empleado" className="btn btn-primary btn-lg">Registrar Empleado</Link>
          </div>
        </div>

        {/* Opciones de Ver */}
        <div className="p-4 border rounded shadow-sm w-75 mt-4 bg-dark text-white">
          <h4 className="mb-3 display-6">Consultas</h4>
          <div className="d-flex flex-column gap-3">
            <Link to="/lista-clientes" className="btn btn-success btn-lg">Ver Clientes</Link>
            <Link to="/lista-productos" className="btn btn-success btn-lg">Ver Productos</Link>
            <Link to="/lista-empleados" className="btn btn-success btn-lg">Ver Empleados</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;