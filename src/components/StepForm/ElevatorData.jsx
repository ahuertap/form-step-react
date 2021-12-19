import React from 'react';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';

function ElevatorData(props) {

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
      <div className={navigateClass(props)}>
      { navigateBackward(props) }
      { navigateForward(props) }
      </div>
    </>
  )
}

export default ElevatorData
