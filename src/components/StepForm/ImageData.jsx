import React from 'react';

import Form from './Form';

function ImageData() {
  return (
    <Form>
      <div className="form-group">
        <label className="form-label" for="imgDepartment">Sube una imagen de tu apartamento:</label>
        <input type="file" className="form-control form-control-sm" id="imgDepartment" name="imgDepartment" />
      </div>
    </Form>
  )
}

export default ImageData
