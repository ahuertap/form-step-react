import React from 'react';

import { navigateForward, navigateBackward } from '../../utils/navigate';

function ParkingData(props) {

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <select key={key} className="form-control" id={props.name[key]} name={props.name[key]} >
          <option value="">Seleccione una opción...</option>
          <option value="No">No</option>
          <option value="Si">Si</option>
        </select>
      );
    }
    return elements;
  }

  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">{ props.label }</label>
        { render() }
      </div>
      <div id="divParking" className="form-group mb-3" hidden>
        <label className="form-label">¿Es cubierto?:</label>
        <select className="form-control" id="sltCubierto" name="sltCubierto">
          <option value="No">No</option>
          <option value="Si">Si</option>
        </select>
      </div>
      <div className="d-flex justify-content-between">
      { navigateBackward(props) }
      { navigateForward(props) }
      </div>
    </>
  )
}

export default ParkingData;
