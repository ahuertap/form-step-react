import React from 'react';

function ElevatorData(props) {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">¿El departamento tiene ascensor?:</label>
        <select className="form-control" id="sltElevator" name="sltElevator">
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

export default ElevatorData
