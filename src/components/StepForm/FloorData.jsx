import React from 'react';
import { Link } from 'react-router-dom';

function FloorData() {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">¿En qué piso se encuentra el departmento?:</label>
        <input type="number" className="form-control form-control-sm" id="txtFloor" name="txtFloor" max="50" required />
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/department-info" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/department-comfort" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </>
  )
}

export default FloorData
