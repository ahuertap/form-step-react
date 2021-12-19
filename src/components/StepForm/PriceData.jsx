import React from 'react';

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
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default PriceData;
