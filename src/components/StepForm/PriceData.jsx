import React from 'react';

function PriceData(props) {
  return (
    <>
      <label className="form-label">Ingresa el monto por el cual quieres vender el departamento:</label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control form-control-sm" id="txtPrice" name="txtPrice" required />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default PriceData;
