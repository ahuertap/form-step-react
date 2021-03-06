import React from 'react';

function ResumeData(props) {
  return (
    <>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Nombre:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticName" name="staticName" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Email:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticEmail" name="staticEmail" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Dirección del departamento:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticDepartment" name="staticDepartment" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Piso:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticFloor" name="staticFloor" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Comodidades:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticComfort" name="staticComfort" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Estacionamiento:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticParking" name="staticParking" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Precio:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticPrice" name="staticPrice" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-md-3 col-form-label">Ascensor:</label>
        <div className="col-md-9">
          <input type="text" className="form-control form-control-plaintext" id="staticElevator" name="staticElevator" />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button className="btn btn-sm btn-primary">Enviar</button>
      </div>
    </>
  )
}

export default ResumeData
