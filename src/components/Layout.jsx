import React from 'react';

import '../assets/styles/App.css';

function Layout({ children }) {
  return (
    <div className="container">
      <div className="col align-self-center pt-4">
        {children}
      </div>
    </div>
  )
}

export default Layout
