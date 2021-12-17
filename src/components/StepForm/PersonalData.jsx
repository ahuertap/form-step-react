import React from 'react';

import Form from './Form';

function PersonalData() {
  return (
    <Form>
      <div className="form-group">
        <label className="form-label">Nombre Completo:</label>
        <input type="text" className="form-control form-control-sm" id="txtName" name="txtName" required />
      </div>
    </Form>
  )
}

export default PersonalData
