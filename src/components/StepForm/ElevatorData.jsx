import React from 'react';

import Form from './Form';

function ElevatorData() {
  return (
    <Form>
      <div className="form-group mb-3">
        <label className="form-label">¿El departamento tiene ascensor?:</label>
        <select className="form-control" id="sltElevator" name="sltElevator">
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
    </Form>
  )
}

export default ElevatorData
