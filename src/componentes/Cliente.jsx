import { useEffect, useState } from "react";
import {Operaciones} from '../service'
import config from '../config'



function CargarDatos(){
  const oper=new Operaciones();
  oper.Consultar(config.apiUrl+ '/api/cliente')
  .then((rescargo) => {
    if (rescargo.data._error.error === 0) {
        this.lstcargo = rescargo.data._data;
        this.dialog = false;
    } else {
        console.log("prueba");
    }
}).catch((error) => {
      console.log(error);
});

}

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
  
  useEffect(() => {
    console.log('Formulario cargado');
    // Aquí puedes agregar cualquier lógica para inicializar el formulario
    // como cargar datos, establecer valores por defecto, etc.
    CargarDatos()
  }, []); // El array vacío asegura que


  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cliente Registrado:", cliente);
    alert("Cliente registrado con éxito!");
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
