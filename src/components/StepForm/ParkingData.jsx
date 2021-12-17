import React from 'react';

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
    </Form>
  )
}

export default ParkingData;
