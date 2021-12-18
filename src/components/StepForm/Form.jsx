import React from 'react'

import StepWizard from "react-step-wizard";

import NavStep from './NavStep';
import PersonalData from './PersonalData';
import EmailData from './EmailData';
import DepartmentData from './DepartmentData';
import FloorData from './FloorData';
import ComfortData from './ComfortData';
import ParkingData from './ParkingData';
import PriceData from './PriceData';
import ImageData from './ImageData';
import ElevatorData from './ElevatorData';
import ResumeData from './ResumeData';

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
          <PersonalData hashKey="informacion-personal" />
          <EmailData hashKey="email" />
          <DepartmentData hashKey="departamento" />
          <FloorData hashKey="piso-departamento" />
          <ComfortData hashKey="comodidades" />
          <ParkingData hashKey="parqueadero" />
          <PriceData hashKey="precio-departamento" />
          <ImageData hashKey="imagen-departamento" />
          <ElevatorData hashKey="ascensor" />
          <ResumeData hashKey="resumen" />
        </StepWizard>
      </form>
      </div>
    </div>
  )
}

export default Form;
