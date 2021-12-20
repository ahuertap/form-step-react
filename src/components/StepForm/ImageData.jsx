import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setImage } from '../../actions';

function ImageData(props) {

  function handleInput(event) {
    props.setImage(event.target.value);
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <input
          key={key}
          type="file"
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
        <label className="form-label" htmlFor="imgDepartment">{ props.label }</label>
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
  setImage,
};

export default connect(null, mapDispatchToProps)(ImageData)
