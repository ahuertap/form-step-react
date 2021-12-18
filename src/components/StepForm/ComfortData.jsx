import React from 'react';

function ComfortData(props) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">¿El departamento cuenta con algunas de las siguientes comodidades?:</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="chkBBQ" />
          <label className="form-check-label" htmlFor="chkBBQ">Zona BBQ</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="chkSalon" />
          <label className="form-check-label" htmlFor="chkSalon">Salón comunal</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="chkJuegos" />
          <label className="form-check-label" htmlFor="chkJuegos">Parque de juegos</label>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default ComfortData;
