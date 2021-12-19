import React from 'react'
import StepWizard from "react-step-wizard";

import NavStep from './NavStep';
import render from './components';

import data from '../../formData.json';

let custom = {
  enterRight: '',
  enterLeft : '',
  exitRight : '',
  exitLeft  : '',
  intro     : ''
}

function Form() {

  return (
    <div className="card">
      <div className="card-body">
      <form>
        <StepWizard isHashEnabled transitions={custom} nav={<NavStep />}>
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
