import { useState } from "react";
import { Operaciones } from "../service";
import config from "../config";
import { useNavigate } from "react-router-dom";

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const operaciones = new Operaciones();
  const navigate = useNavigate();


  const obtenerProductos = async () => {
    try {
      const url = `${config.apiUrl}/productos`;
      const response = await operaciones.Consultar(url);
      setProductos(response.data);
    } catch (error) {
      console.error("Error obteniendo productos:", error);
    }
  };

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;

    try {
      const url = `${config.apiUrl}/productos/${id}`;
      await operaciones.Eliminar(url, {});
      alert("Producto eliminado correctamente.");
      obtenerProductos(); // Recargar la lista
    } catch (error) {
      console.error("Error eliminando producto:", error);
      alert("No se pudo eliminar el producto.");
    }
  };

  const editarProducto = (producto) => {
    navigate(`/editar-producto`, { state: { producto } });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Productos</h2>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/producto")}>
        Registrar Nuevo Producto
      </button>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Código</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">No hay productos registrados.</td>
            </tr>
          ) : (
            productos.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.nombre}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.marca}</td>
                <td>${prod.precio}</td>
                <td>{prod.stock}</td>
                <td>{prod.codigo}</td>
                <td>{prod.estado}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => editarProducto(prod)}>
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => eliminarProducto(prod.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;