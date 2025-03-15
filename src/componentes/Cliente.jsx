import { useEffect, useState } from "react";
import {Operaciones} from '../service'
import config from '../config'
import { useNavigate } from "react-router-dom";

function Cliente() {
  const [cliente, setCliente] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    birth_date: "",
   /* tipoCliente: "",
    direccion: "",*/
  });
  
  const operaciones = new Operaciones();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${config.apiUrl}/clients`;
      await operaciones.Insertar(url, cliente);
      alert("Cliente registrado con éxito!");
      navigate("/lista-clientes"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error registrando el cliente:", error);
      alert("Hubo un error al registrar el cliente.");
    };
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registro de Cliente</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="first_name" className="form-label">Nombres:</label>
            <input type="text" id="first_name" className="form-control" name="first_name" value={cliente.first_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="last_name" className="form-label">Apellidos:</label>
            <input type="text"  id="last_name" className="form-control" name="last_name" value={cliente.last_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Correo:</label>
            <input type="email" id="email" className="form-control" name="email" value={cliente.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Teléfono:</label>
            <input type="tel" id="phone" className="form-control" name="phone" value={cliente.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">Dirección:</label>
            <input type="text" id="address" className="form-control" name="address" value={cliente.address} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="birth_date" className="form-label">Fecha de Nacimiento:</label>
            <input type="date" id="birth_date" className="form-control" name="birth_date" value={cliente.birth_date} onChange={handleChange} required />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-3">Registrar Cliente</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cliente;
