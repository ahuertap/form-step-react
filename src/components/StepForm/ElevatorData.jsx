import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setElevator } from '../../actions';

function ElevatorData(props) {

  function handleInput(event) {
    props.setElevator(event.target.value);
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <select key={key} className="form-control" id={props.name[key]} name={props.name[key]} onChange={handleInput} >
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

const mapDispatchToProps = {
  setElevator,
};

export default connect(null, mapDispatchToProps)(ElevatorData)
