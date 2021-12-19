import React from 'react';

import PersonalData from './PersonalData';
import EmailData from './EmailData';
import DepartmentData from './DepartmentData';
import FloorData from './FloorData';
import ComfortData from './ComfortData';
import ParkingData from './ParkingData';
import PriceData from './PriceData';
import ImageData from './ImageData';
import ElevatorData from './ElevatorData';

const components = {
  PersonalData: PersonalData,
  EmailData: EmailData,
  DepartmentData: DepartmentData,
  FloorData: FloorData,
  ComfortData: ComfortData,
  ParkingData: ParkingData,
  PriceData: PriceData,
  ImageData: ImageData,
  ElevatorData: ElevatorData,
};

function render(data) {
  return React.createElement(
    components[data.component],
    {
      key: data.order,
      hashKey: data.hash,
    }
  );
}

export default render;
