import React from 'react';

import Form from './Form';

function DepartmentData() {
  return (
    <Form>
      <div className="form-group">
        <label className="form-label">Dirección del apartamento:</label>
        <input type="text" className="form-control form-control-sm" id="txtDeparment" name="txtDeparment" required />
      </div>
    </Form>
  )
}

export default DepartmentData;
