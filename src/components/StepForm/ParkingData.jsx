import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setParking } from '../../actions';

function ParkingData(props) {

  function handleInput(event) {
    props.setParking(event.target.value);
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <select key={key} className="form-control" id={props.name[key]} name={props.name[key]} onChange={handleInput} value={props.parking || ''} >
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
          <option value="">Selecciona una opción</option>
          <option value="No">No</option>
          <option value="Si">Si</option>
        </select>
      </div>
      <div className={navigateClass(props)}>
      { navigateBackward(props) }
      { navigateForward(props) }
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    parking: state.parking,
  };
};

const mapDispatchToProps = {
  setParking,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingData)
