import React from 'react';

function ImageData(props) {
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="imgDepartment">Sube una imagen de tu apartamento:</label>
        <input type="file" className="form-control form-control-sm" id="imgDepartment" name="imgDepartment" />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default ImageData
