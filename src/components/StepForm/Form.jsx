import React from 'react'
import StepWizard from "react-step-wizard";

import NavStep from './NavStep';
import render from './components';

import transitions from '../../utils/transitions';
import data from '../../formData.json';


function Form() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="card">
      <div className="card-body">
      <form onSubmit={handleSubmit}>
        <StepWizard isHashEnabled transitions={transitions} nav={<NavStep dataInfo={data.form}/>}>
        {
          data.form.map(blocks => render(blocks))
        }
        </StepWizard>
      </form>
      </div>
    </div>
  )
}

export default Form;
