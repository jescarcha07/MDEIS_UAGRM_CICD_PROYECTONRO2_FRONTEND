import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Operaciones } from "../service";
import config from "../config";

function EditarEmpleado() {
  const { id } = useParams();
  const [empleado, setEmpleado] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    salary: "",
    hire_date: "",
  });

  const operaciones = new Operaciones();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerEmpleado();
  }, []);

  const obtenerEmpleado = async () => {
    try {
      const url = `${config.apiUrl}/employees/${id}`;
      const response = await operaciones.Consultar(url);
      setEmpleado(response.data);
    } catch (error) {
      console.error("Error obteniendo empleado:", error);
    }
  };

  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${config.apiUrl}/employees/${id}`;
      await operaciones.Actualizar(url, empleado);
      alert("Empleado actualizado con éxito!");
      navigate("/lista-empleados");
    } catch (error) {
      console.error("Error actualizando el empleado:", error);
      alert("Hubo un error al actualizar el empleado.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Actualizar Empleado</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombres:</label>
            <input type="text" className="form-control" name="first_name" value={empleado.first_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellidos:</label>
            <input type="text" className="form-control" name="last_name" value={empleado.last_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Correo:</label>
            <input type="email" className="form-control" name="email" value={empleado.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Teléfono:</label>
            <input type="tel" className="form-control" name="phone" value={empleado.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Salario:</label>
            <input type="number" className="form-control" name="salary" value={empleado.salary} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Fecha de Contratación:</label>
            <input type="date" className="form-control" name="hire_date" value={empleado.hire_date} onChange={handleChange} required />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-warning mt-3">Actualizar Empleado</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditarEmpleado;