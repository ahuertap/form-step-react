import React from 'react';

export function navigateBackward(props) {
  if (props.currentStep !== 1) {
    return <button type="button" className="btn btn-sm btn-primary" onClick={ props.previousStep }>Anterior</button>;
  }

  return '';
}

export function navigateForward(props) {
  if (props.currentStep !== props.totalSteps) {
    return <button type="button" className="btn btn-sm btn-primary" onClick={ props.nextStep }>Siguiente</button>;
  }

  return <button type="button" className="btn btn-sm btn-primary">Enviar</button>;
}

export function navigateClass(props) {
  if (props.currentStep !== 1) {
    return 'd-flex justify-content-between';
  }

  return 'd-flex justify-content-end'
}
