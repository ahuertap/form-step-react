import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function ImageData() {
  return (
    <Form>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="imgDepartment">Sube una imagen de tu apartamento:</label>
        <input type="file" className="form-control form-control-sm" id="imgDepartment" name="imgDepartment" />
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/department-price" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/department-elevator" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </Form>
  )
}

export default ImageData
