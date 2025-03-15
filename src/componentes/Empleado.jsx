import { useState } from "react";
import { Operaciones } from "../service";
import config from "../config";
import { useNavigate } from "react-router-dom";

function Empleado() {
  const [empleado, setEmpleado] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    salary: "",
    hire_date: "",
    // cargo: "",
    // direccion: "",
  });

  const operaciones = new Operaciones();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${config.apiUrl}/employees`;
      await operaciones.Insertar(url, empleado);
      alert("Empleado registrado con éxito!");
      navigate("/lista-empleados"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error registrando el empleado:", error);
      alert("Hubo un error al registrar el empleado.");
    };
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registro de Empleado</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="first_name" className="form-label">Nombres:</label>
            <input type="text" id="first_name" className="form-control" name="first_name" value={empleado.first_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="last_name" className="form-label">Apellidos:</label>
            <input type="text" id="last_name" className="form-control" name="last_name" value={empleado.last_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Correo:</label>
            <input type="email" id="email" className="form-control" name="email" value={empleado.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Teléfono:</label>
            <input type="tel" id="phone" className="form-control" name="phone" value={empleado.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="salary" className="form-label">Salario:</label>
            <input type="number" id="salary" className="form-control" name="salary" value={empleado.salary} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="hire_date" className="form-label">Fecha de Contratación:</label>
            <input type="date" id="hire_date" className="form-control" name="hire_date" value={empleado.hire_date} onChange={handleChange} required />
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
