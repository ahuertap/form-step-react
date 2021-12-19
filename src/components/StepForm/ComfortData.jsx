import React from 'react';

function ComfortData(props) {

  function render() {
    const elements = [];

    for (let key in props.name) {
      const options = ['Zona BBQ', 'Salón comunal', 'Parque de juegos'];

      elements.push(
        <div key={key} className="form-check">
          <input className="form-check-input" type="checkbox" id={props.name[key]} name={props.name[key]} />
          <label className="form-check-label" htmlFor="chkBBQ">{options[key]}</label>
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
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default ComfortData;
