import { useEffect, useState } from "react";
import { Operaciones } from "../service";
import config from "../config";
import { useNavigate } from "react-router-dom";

function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const operaciones = new Operaciones();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {
    try {
      const url = `${config.apiUrl}/clients`;
      const response = await operaciones.Consultar(url);
      setClientes(response.data);
    } catch (error) {
      console.error("Error obteniendo clientes:", error);
    }
  };

  const handleEditar = (id) => {
    navigate(`/editar-cliente/${id}`);
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
      try {
        const url =  `${config.apiUrl}/clients/${id}`;
        await operaciones.Eliminar(url);
        alert("Cliente eliminado con éxito!");
        obtenerClientes();
      } catch (error) {
        console.error("Error eliminando cliente:", error);
        alert("Hubo un error al eliminar el cliente.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Clientes</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Fecha de Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.first_name}</td>
              <td>{cliente.last_name}</td>
              <td>{cliente.email}</td>
              <td>{cliente.phone}</td>
              <td>{cliente.address}</td>
              <td>{cliente.birth_date}</td>
              <td>
                <button onClick={() => handleEditar(cliente.id)} className="btn btn-warning btn-sm me-2">Editar</button>
                <button onClick={() => handleEliminar(cliente.id)} className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaClientes;