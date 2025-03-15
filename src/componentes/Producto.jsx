import { useState } from "react";
import { Operaciones } from "../service";
import config from "../config";
import { useNavigate } from "react-router-dom";

function Producto() {
  const [producto, setProducto] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    stock: ""
    /*codigo: "",
    estado: "",*/
  });

  const operaciones = new Operaciones();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${config.apiUrl}/products`;
      await operaciones.Insertar(url, producto);
      alert("Producto registrado con éxito!");
      navigate("/lista-productos"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error registrando el producto:", error);
      alert("Hubo un error al registrar el producto.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registro de Producto</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input type="text" id="name" className="form-control" name="name" value={producto.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="description" className="form-label">Descripción:</label>
            <input type="text" id="description" className="form-control" name="description" value={producto.description} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="brand" className="form-label">Marca:</label>
            <input type="text" id="brand" className="form-control" name="brand" value={producto.brand} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="category" className="form-label">Categoría:</label>
            <input type="text" id="category" className="form-control" name="category" value={producto.category} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Precio:</label>
            <input type="number" id="price" className="form-control" name="price" value={producto.price} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="stock" className="form-label">Stock:</label>
            <input type="number" id="stock" className="form-control" name="stock" value={producto.stock} onChange={handleChange} required />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success mt-3">Registrar Producto</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Producto;