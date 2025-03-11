import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Sistema de Ventas</h1>
      <p>Seleccione una opción:</p>
      <div className="d-flex flex-column align-items-center gap-3">
        <Link to="/registrar-cliente" className="btn btn-primary">Registrar Cliente</Link>
        <Link to="/registrar-producto" className="btn btn-success">Registrar Producto</Link>
        <Link to="/registrar-empleado" className="btn btn-warning">Registrar Empleado</Link>
      </div>
    </div>
  );
}

export default Home;
