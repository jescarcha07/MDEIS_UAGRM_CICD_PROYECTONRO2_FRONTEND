import { useEffect, useState } from "react";
import { Operaciones } from "../service";
import config from "../config";
import { useNavigate } from "react-router-dom";

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const operaciones = new Operaciones();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const url = `${config.apiUrl}/products`;
      const response = await operaciones.Consultar(url);
      setProductos(response.data);
    } catch (error) {
      console.error("Error obteniendo productos:", error);
    }
  };

  const handleEditar = (id) => {
    navigate(`/editar-producto/${id}`);
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        const url =  `${config.apiUrl}/products/${id}`;
        await operaciones.Eliminar(url);
        alert("Producto eliminado con éxito!");
        obtenerProductos();
      } catch (error) {
        console.error("Error eliminando producto:", error);
        alert("Hubo un error al eliminar el producto.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Productos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.name}</td>
              <td>{producto.description}</td>
              <td>{producto.brand}</td>
              <td>{producto.category}</td>
              <td>{producto.price}</td>
              <td>{producto.stock}</td>
              <td>
                <button onClick={() => handleEditar(producto.id)} className="btn btn-warning btn-sm me-2">Editar</button>
                <button onClick={() => handleEliminar(producto.id)} className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;