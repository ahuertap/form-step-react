import React from 'react';

import Form from './Form';

function FloorData() {
  return (
    <Form>
      <div className="form-group">
        <label className="form-label">¿En qué piso se encuentra el departmento?:</label>
        <input type="number" className="form-control form-control-sm" id="txtFloor" name="txtFloor" max="50" required />
      </div>
    </Form>
  )
}

export default FloorData
