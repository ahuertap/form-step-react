import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setEmail } from '../../actions';

function EmailData(props) {

  function handleInput(event) {
    props.setEmail(event.target.value);
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <input
          key={key}
          type="email"
          className="form-control form-control-sm"
          id={props.name[key]}
          name={props.name[key]}
          onChange={handleInput}
          value={props.email || ''}
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

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

const mapDispatchToProps = {
  setEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailData);
