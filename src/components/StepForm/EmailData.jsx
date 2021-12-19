import React from 'react';

import { navigateForward, navigateBackward } from '../../utils/navigate';

function EmailData(props) {

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <input key={key} type="email" className="form-control form-control-sm" id={props.name[key]} name={props.name[key]} />
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

export default EmailData;
