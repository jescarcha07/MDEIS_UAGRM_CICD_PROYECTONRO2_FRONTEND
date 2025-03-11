import { useState } from "react";

function Empleado() {
  const [empleado, setEmpleado] = useState({
    nombres: "",
    apellidos: "",
    documento: "",
    codEmpleado: "",
    telefono: "",
    correo: "",
    cargo: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Empleado Registrado:", empleado);
    alert("Empleado registrado con éxito!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registro de Empleado</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombres:</label>
            <input type="text" className="form-control" name="nombres" value={empleado.nombres} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellidos:</label>
            <input type="text" className="form-control" name="apellidos" value={empleado.apellidos} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Número de Documento:</label>
            <input type="text" className="form-control" name="documento" value={empleado.documento} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Código Empleado:</label>
            <input type="text" className="form-control" name="codEmpleado" value={empleado.codEmpleado} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Teléfono:</label>
            <input type="tel" className="form-control" name="telefono" value={empleado.telefono} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Correo Electrónico:</label>
            <input type="email" className="form-control" name="correo" value={empleado.correo} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Cargo:</label>
            <input type="text" className="form-control" name="cargo" value={empleado.cargo} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Dirección:</label>
            <input type="text" className="form-control" name="direccion" value={empleado.direccion} onChange={handleChange} required />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-warning mt-3">Registrar Empleado</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Empleado;
