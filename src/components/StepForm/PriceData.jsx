import React from 'react';

import { navigateForward, navigateBackward } from '../../utils/navigate';

function PriceData(props) {

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
      <div key={key} className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control form-control-sm" id={props.name[key]} name={props.name[key]} />
      </div>
      );
    }
    return elements;
  }

  return (
    <>
      <label className="form-label">{ props.label }</label>
      { render() }
      <div className="d-flex justify-content-between">
      { navigateBackward(props) }
      { navigateForward(props) }
      </div>
    </>
  )
}

export default PriceData;
