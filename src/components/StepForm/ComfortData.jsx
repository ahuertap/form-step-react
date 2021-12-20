import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setComfort, deleteComfort } from '../../actions';

function ComfortData(props) {

  function handleInput(event, name) {
    console.log(name)
    if (event.target.checked) {
      props.setComfort(event.target.value);
    } else {
      props.deleteComfort(name);
    }
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      const options = ['Zona BBQ', 'Salón comunal', 'Parque de juegos'];

      elements.push(
        <div key={key} className="form-check">
          <input className="form-check-input" type="checkbox" id={props.name[key]} name={props.name[key]} onChange={(event) => handleInput(event, options[key]) } value={options[key]} />
          <label className="form-check-label" htmlFor={props.name[key]}>{options[key]}</label>
        </div>
      );
    }
    return elements;
  }

  return (
    <>
      <div className="mb-3">
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
  setComfort,
  deleteComfort,
};

export default connect(null, mapDispatchToProps)(ComfortData)
