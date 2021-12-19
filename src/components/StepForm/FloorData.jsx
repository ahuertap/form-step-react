import React from 'react';

import { navigateForward, navigateBackward } from '../../utils/navigate';

function FloorData(props) {

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <input key={key} type="number" className="form-control form-control-sm" id={props.name[key]} name={props.name[key]} max="50" />
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
      <div className="d-flex justify-content-between">
      { navigateBackward(props) }
      { navigateForward(props) }
      </div>
    </>
  )
}

export default FloorData
