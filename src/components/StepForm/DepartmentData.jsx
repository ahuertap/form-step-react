import React from 'react';
import { Link } from 'react-router-dom';

function DepartmentData() {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">Dirección del apartamento:</label>
        <input type="text" className="form-control form-control-sm" id="txtDeparment" name="txtDeparment" required />
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/personal-email" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/department-floor" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </>
  )
}

export default DepartmentData;
