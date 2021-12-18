import React from 'react';

function ParkingData(props) {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">¿El departamento tiene parqueadero?:</label>
        <select className="form-control" id="sltParking" name="sltParking" >
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
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default ParkingData;
