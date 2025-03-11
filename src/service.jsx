import axios from "axios";
export class Operaciones {
  Operaciones() {
    console.log('Operaciones constructor called');
  }
    Consultar(url) {
      return axios.get(url);
    }
  
    Actualizar(url, objeto) {
      return axios.put(url, objeto, { headers: { 'Content-Type': 'application/json' } });
    }
  
    Insertar(url, objeto) {
      return axios.post(url, objeto, { headers: { 'Content-Type': 'application/json' } });
    }
  
    Eliminar(url, objeto) {
      return axios.delete(url, { headers: { 'Content-Type': 'application/json' }, data: objeto });
    }
  }
  
