import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Operaciones } from "../service";
import config from "../config";

function EditarCliente() {
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    birth_date: "",
  });

  const operaciones = new Operaciones();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerCliente();
  }, []);

  const obtenerCliente = async () => {
    try {
      const url = `${config.apiUrl}/clients/${id}`;
      const response = await operaciones.Consultar(url);
      setCliente(response.data);
    } catch (error) {
      console.error("Error obteniendo el cliente:", error);
    }
  };

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${config.apiUrl}/clients/${id}`;
      await operaciones.Actualizar(url, cliente);
      alert("Cliente actualizado con éxito!");
      navigate("/lista-clientes");
    } catch (error) {
      console.error("Error actualizando el Cliente:", error);
      alert("Hubo un error al actualizar el Cliente.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Editar Cliente</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombres:</label>
            <input type="text" className="form-control" name="first_name" value={cliente.first_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellidos:</label>
            <input type="text" className="form-control" name="last_name" value={cliente.last_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Correo:</label>
            <input type="email" className="form-control" name="email" value={cliente.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Teléfono:</label>
            <input type="tel" className="form-control" name="phone" value={cliente.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Dirección:</label>
            <input type="text" className="form-control" name="phone" value={cliente.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Fecha de Nacimiento:</label>
            <input type="date" className="form-control" name="birth_date" value={cliente.birth_date} onChange={handleChange} required />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-3">Actualizar Cliente</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditarCliente;