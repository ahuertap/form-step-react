import React from 'react';
import { Link } from 'react-router-dom';

function EmailData() {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control form-control-sm" id="txtEmail" name="txtEmail" required />
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/personal-information" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/department-info" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </>
  )
}

export default EmailData;
