import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import Form from '../components/StepForm/Form';
import Home from '../components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Form />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
