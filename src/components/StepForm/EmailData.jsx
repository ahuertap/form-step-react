import React from 'react';

function EmailData(props) {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control form-control-sm" id="txtEmail" name="txtEmail" required/>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default EmailData;
