import React from 'react';

function PersonalData(props) {

  function render() {
    const elements = [];

    for (let key in props.name) {
      elements.push(
        <input key={key} type="text" className="form-control form-control-sm" id={props.name[key]} name={props.name[key]} />
      );
    }
    return elements;
  }

  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label">{ props.label }</label>
        {
          render()
        }
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-sm btn-primary" onClick={ props.nextStep }>Next</button>
      </div>
    </>
  )
}

export default PersonalData
