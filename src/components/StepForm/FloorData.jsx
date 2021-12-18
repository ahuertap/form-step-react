import React from 'react';

function FloorData(props) {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">¿En qué piso se encuentra el departmento?:</label>
        <input type="number" className="form-control form-control-sm" id="txtFloor" name="txtFloor" max="50"  />
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default FloorData
