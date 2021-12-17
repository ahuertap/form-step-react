import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../components/Home';
import PersonalData from '../components/StepForm/PersonalData';
import EmailData from '../components/StepForm/EmailData';
import DepartmentData from '../components/StepForm/DepartmentData';
import FloorData from '../components/StepForm/FloorData';
import ComfortData from '../components/StepForm/ComfortData';
import ParkingData from '../components/StepForm/ParkingData';
import PriceData from '../components/StepForm/PriceData';
import ImageData from '../components/StepForm/ImageData';
import ElevatorData from '../components/StepForm/ElevatorData';
import ResumeData from '../components/StepForm/ResumeData';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register/personal-information" element={<PersonalData />} />
            <Route path="/register/personal-email" element={<EmailData />} />
            <Route path="/register/department-info" element={<DepartmentData />} />
            <Route path="/register/department-floor" element={<FloorData />} />
            <Route path="/register/department-comfort" element={<ComfortData />} />
            <Route path="/register/department-parking" element={<ParkingData />} />
            <Route path="/register/department-price" element={<PriceData />} />
            <Route path="/register/department-image" element={<ImageData />} />
            <Route path="/register/department-elevator" element={<ElevatorData />} />
            <Route path="/register/resume" element={<ResumeData />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
