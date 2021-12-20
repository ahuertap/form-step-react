import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setFloor } from '../../actions';

function FloorData(props) {

  function handleInput(event) {
    props.setFloor(event.target.value);
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <input
          key={key}
          type="number"
          className="form-control form-control-sm"
          id={props.name[key]}
          name={props.name[key]}
          max="50"
          onChange={handleInput}
        />
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
  setFloor,
};

export default connect(null, mapDispatchToProps)(FloorData)

