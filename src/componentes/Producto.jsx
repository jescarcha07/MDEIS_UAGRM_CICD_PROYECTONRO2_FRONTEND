import { useState } from "react";

function Producto() {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    marca: "",
    categoria: "",
    precio: "",
    stock: "",
    codigo: "",
    estado: "",
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto Registrado:", producto);
    alert("Producto registrado con éxito!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registro de Producto</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombre:</label>
            <input type="text" className="form-control" name="nombre" value={producto.nombre} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Descripción:</label>
            <input type="text" className="form-control" name="descripcion" value={producto.descripcion} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Marca:</label>
            <input type="text" className="form-control" name="marca" value={producto.marca} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Categoría:</label>
            <input type="text" className="form-control" name="categoria" value={producto.categoria} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Precio:</label>
            <input type="number" className="form-control" name="precio" value={producto.precio} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Stock:</label>
            <input type="number" className="form-control" name="stock" value={producto.stock} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Código Producto:</label>
            <input type="text" className="form-control" name="codigo" value={producto.codigo} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Estado:</label>
            <select className="form-control" name="estado" value={producto.estado} onChange={handleChange} required>
              <option value="">Seleccione...</option>
              <option value="Disponible">Disponible</option>
              <option value="Agotado">Agotado</option>
            </select>
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
