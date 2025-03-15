import { useEffect, useState } from "react";
import { Operaciones } from "../service";
import config from "../config";
import { useNavigate } from "react-router-dom";

function ListaEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const operaciones = new Operaciones();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const url = `${config.apiUrl}/employees`;
      const response = await operaciones.Consultar(url);
      setEmpleados(response.data);
    } catch (error) {
      console.error("Error obteniendo empleados:", error);
    }
  };

  const handleEditar = (id) => {
    navigate(`/editar-empleado/${id}`);
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
      try {
        const url =  `${config.apiUrl}/employees/${id}`;
        await operaciones.Eliminar(url);
        alert("Empleado eliminado con éxito!");
        obtenerEmpleados();
      } catch (error) {
        console.error("Error eliminando empleado:", error);
        alert("Hubo un error al eliminar el empleado.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Empleados</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Salario</th>
            <th>Fecha de Contratación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.first_name}</td>
              <td>{empleado.last_name}</td>
              <td>{empleado.email}</td>
              <td>{empleado.phone}</td>
              <td>{empleado.salary}</td>
              <td>{empleado.hire_date}</td>
              <td>
                <button onClick={() => handleEditar(empleado.id)} className="btn btn-warning btn-sm me-2">Editar</button>
                <button onClick={() => handleEliminar(empleado.id)} className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaEmpleados;