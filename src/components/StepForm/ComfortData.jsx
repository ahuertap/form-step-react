import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function ComfortData() {
  return (
    <Form>
      <div className="mb-3">
        <label className="form-label">¿El departamento cuenta con algunas de las siguientes comodidades?:</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="chkBBQ" />
          <label className="form-check-label" htmlFor="chkBBQ">Zona BBQ</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="chkSalon" />
          <label className="form-check-label" htmlFor="chkSalon">Salón comunal</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="chkJuegos" />
          <label className="form-check-label" htmlFor="chkJuegos">Parque de juegos</label>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/department-floor" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/department-parking" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </Form>
  )
}

export default ComfortData;
