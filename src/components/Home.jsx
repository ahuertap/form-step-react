import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="d-flex justify-content-center center-element">
      <Link to="register/personal-information" className="btn btn-sm btn-primary">Register</Link>
    </div>
  )
}

export default Home
