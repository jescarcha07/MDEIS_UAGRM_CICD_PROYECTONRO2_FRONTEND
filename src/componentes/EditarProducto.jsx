import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Operaciones } from "../service";
import config from "../config";

function EditarProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    stock: ""
  });

  const operaciones = new Operaciones();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    try {
      const url = `${config.apiUrl}/products/${id}`;
      const response = await operaciones.Consultar(url);
      setProducto(response.data);
    } catch (error) {
      console.error("Error obteniendo el producto:", error);
    }
  };

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${config.apiUrl}/products/${id}`;
      await operaciones.Actualizar(url, producto);
      alert("Producto actualizado con éxito!");
      navigate("/lista-productos");
    } catch (error) {
      console.error("Error actualizando el producto:", error);
      alert("Hubo un error al actualizar el producto.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Editar Producto</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombre:</label>
            <input type="text" className="form-control" name="name" value={producto.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Descripción:</label>
            <input type="text" className="form-control" name="description" value={producto.description} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Marca:</label>
            <input type="text" className="form-control" name="brand" value={producto.brand} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Categoría:</label>
            <input type="text" className="form-control" name="category" value={producto.category} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Precio:</label>
            <input type="number" className="form-control" name="price" value={producto.price} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Stock:</label>
            <input type="number" className="form-control" name="stock" value={producto.stock} onChange={handleChange} required />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-3">Actualizar Producto</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditarProducto;