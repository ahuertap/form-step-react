import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function ParkingData() {
  return (
    <Form>
      <div className="form-group mb-3">
        <label className="form-label">¿El departamento tiene parqueadero?:</label>
        <select className="form-control" id="sltParking" name="sltParking" required>
          <option value="">Seleccione una opción...</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
      <div id="divParking" className="form-group mb-3">
        <label className="form-label">¿Es cubierto?:</label>
        <select className="form-control" id="sltCubierto" name="sltCubierto">
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/department-comfort" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/department-price" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </Form>
  )
}

export default ParkingData;
