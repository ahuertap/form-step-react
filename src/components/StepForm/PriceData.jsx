import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function PriceData() {
  return (
    <Form>
      <label className="form-label">Ingresa el monto por el cual quieres vender el departamento:</label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control form-control-sm" id="txtPrice" name="txtPrice" required />
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/department-parking" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/department-image" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </Form>
  )
}

export default PriceData;
