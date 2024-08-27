import React from 'react'
import Add from './Add'

function View() {
  return (
    <div>
    <div className="d-flex justify-content-between w-100">
      <h2 className='text-warning'>Details</h2>
      <button className='btn'> <Add/> </button>
    </div>
    </div>
  )
}

export default View