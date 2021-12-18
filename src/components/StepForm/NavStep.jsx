import React from 'react';

import { Stepper, Step } from 'react-form-stepper';

const styles = {
  'activeBgColor': '#6610f2',
  'completedBgColor': '#290661',
};

function NavStep(props) {

  const activeStep = props.currentStep - 1;

  const rederSteps = () => {
    const steps = [];

    for (let i = 1; i <= props.totalSteps; i++) {
      steps.push(
          <Step key={i} />
      );
    }
    return steps;
  };

  return (
    <Stepper activeStep={activeStep} styleConfig={styles}>
      {rederSteps()}
    </Stepper>
  )
}

export default NavStep;
