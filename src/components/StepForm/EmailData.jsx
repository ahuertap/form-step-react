import React from 'react';

import Form from './Form';

function EmailData() {
  return (
    <Form>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control form-control-sm" id="txtEmail" name="txtEmail" required />
      </div>
    </Form>
  )
}

export default EmailData;
