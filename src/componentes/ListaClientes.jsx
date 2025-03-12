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
      const url = `${config.apiUrl}/clientes`; 
      const response = await operaciones.Consultar(url);
      setClientes(response.data);
    } catch (error) {
      console.error("Error obteniendo clientes:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Clientes</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length > 0 ? (
            clientes.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.nombre}</td>
                <td>{client.email}</td>
                <td>{client.telefono}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => navigate(`/editar-cliente/${cliente.id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => console.log(`Eliminar cliente ${cliente.id}`)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No hay clientes registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListaClientes;