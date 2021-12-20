import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setDepartment } from '../../actions';

function DepartmentData(props) {

  function handleInput(event) {
    props.setDepartment(event.target.value);
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <input
          key={key}
          type="text"
          className="form-control form-control-sm"
          id={props.name[key]}
          name={props.name[key]}
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
  setDepartment,
};

export default connect(null, mapDispatchToProps)(DepartmentData)

