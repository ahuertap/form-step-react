import React from 'react';

function PersonalData(props) {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">Nombre Completo:</label>
        <input type="text" className="form-control form-control-sm" id="txtName" name="txtName" required/>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default PersonalData
