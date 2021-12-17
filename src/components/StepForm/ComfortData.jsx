import React from 'react';

import Form from './Form';

function ComfortData() {
  return (
    <Form>
      <label className="form-label">¿El departamento cuenta con algunas de las siguientes comodidades?:</label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="chkBBQ" />
        <label class="form-check-label" for="chkBBQ">Zona BBQ</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="chkSalon" />
        <label class="form-check-label" for="chkSalon">Salón comunal</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="chkJuegos" />
        <label class="form-check-label" for="chkJuegos">Parque de juegos</label>
      </div>
    </Form>
  )
}

export default ComfortData;
