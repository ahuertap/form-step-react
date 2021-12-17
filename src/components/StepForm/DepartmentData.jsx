import React from 'react';

function DepartmentData(props) {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">Dirección del apartamento:</label>
        <input type="text" className="form-control form-control-sm" id="txtDeparment" name="txtDeparment" required />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default DepartmentData;
