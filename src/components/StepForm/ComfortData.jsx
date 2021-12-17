import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function ComfortData() {
  return (
    <Form>
      <div className="mb-3">
        <label className="form-label">¿El departamento cuenta con algunas de las siguientes comodidades?:</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="chkBBQ" />
          <label class="form-check-label" for="chkBBQ">Zona BBQ</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="chkSalon" />
          <label class="form-check-label" for="chkSalon">Salón comunal</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="chkJuegos" />
          <label class="form-check-label" for="chkJuegos">Parque de juegos</label>
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
