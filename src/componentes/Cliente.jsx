import { useState } from "react";
import {Operaciones} from '../service'
import config from '../config'
import { useNavigate } from "react-router-dom";




function Cliente() {
  const [cliente, setCliente] = useState({
    nombres: "",
    apellidos: "",
    documento: "",
    codCliente: "",
    telefono: "",
    correo: "",
    tipoCliente: "",
    direccion: "",
  });
  const operaciones = new Operaciones();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${config.apiUrl}/clientes`;
      await operaciones.Insertar(url, cliente);
      alert("Cliente registrado con éxito!");
      navigate("/lista-cliente"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error registrando el cliente:", error);
      alert("Hubo un error al registrar el cliente.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registro de Cliente</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombres:</label>
            <input type="text" className="form-control" name="nombres" value={cliente.nombres} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellidos:</label>
            <input type="text" className="form-control" name="apellidos" value={cliente.apellidos} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Número de Documento:</label>
            <input type="text" className="form-control" name="documento" value={cliente.documento} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Código Cliente:</label>
            <input type="text" className="form-control" name="codCliente" value={cliente.codCliente} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Teléfono:</label>
            <input type="tel" className="form-control" name="telefono" value={cliente.telefono} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Correo Electrónico:</label>
            <input type="email" className="form-control" name="correo" value={cliente.correo} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tipo de Cliente:</label>
            <select className="form-control" name="tipoCliente" value={cliente.tipoCliente} onChange={handleChange} required>
              <option value="">Seleccione...</option>
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
              <option value="Nuevo">Nuevo</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Dirección:</label>
            <input type="text" className="form-control" name="direccion" value={cliente.direccion} onChange={handleChange} required />
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
