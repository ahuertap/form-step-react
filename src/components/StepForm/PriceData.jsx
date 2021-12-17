import React from 'react';

import Form from './Form';

function PriceData() {
  return (
    <Form>
      <label className="form-label">Ingresa el monto por el cual quieres vender el departamento:</label>
      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input type="text" class="form-control form-control-sm" id="txtPrice" name="txtPrice" required />
      </div>
    </Form>
  )
}

export default PriceData;
