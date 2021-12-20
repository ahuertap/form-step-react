import React from 'react';
import { connect } from 'react-redux';

import { navigateForward, navigateBackward, navigateClass } from '../../utils/navigate';
import { setPrice } from '../../actions';

function PriceData(props) {

  function handleInput(event) {
    props.setPrice(event.target.value);
  }

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
      <div key={key} className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control form-control-sm"
          id={props.name[key]}
          name={props.name[key]}
          onChange={handleInput}
          value={props.price || ''}
        />
      </div>
      );
    }
    return elements;
  }

  return (
    <>
      <label className="form-label">{ props.label }</label>
      { render() }
      <div className={navigateClass(props)}>
      { navigateBackward(props) }
      { navigateForward(props) }
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    price: state.price,
  };
};

const mapDispatchToProps = {
  setPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceData)

