import React from 'react'

function Form({ children }) {
  return (
    <div className="card">
      <div className="card-body">
      <form>
        {children}
      </form>
      </div>
    </div>
  )
}

export default Form;
