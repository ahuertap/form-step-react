import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function ElevatorData() {
  return (
    <Form>
      <div className="form-group mb-3">
        <label className="form-label">¿El departamento tiene ascensor?:</label>
        <select className="form-control" id="sltElevator" name="sltElevator">
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/register/department-image" className="btn btn-sm btn-primary">Anterior</Link>
        <Link to="/register/resume" className="btn btn-sm btn-primary">Siguiente</Link>
      </div>
    </Form>
  )
}

export default ElevatorData
