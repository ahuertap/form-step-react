import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function PersonalData() {
  return (
    <Form>
      <div className="form-group mb-3">
        <label className="form-label">Nombre Completo:</label>
        <input type="text" className="form-control form-control-sm" id="txtName" name="txtName" required />
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/register/personal-email" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </Form>
  )
}

export default PersonalData
