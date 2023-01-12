import React from 'react'
import image3 from '../assets/image3.jpg'

function RightSidebar() {
  return (
    <div>
      <h4 className='ms-4 ps-4'>Task Overview</h4>
      <div className='m-5'>
      <span className='ms-0'>Attendees</span>
      <span className=' ms-5  rounded  border-radius-3 bg-light p-3'>4</span>
      </div>
      <div className='row ms-4'>
      <div className='col-3'>
      <img src={image3} className=" h-50 w-75 rounded-circle" alt="..."></img>

      </div>
      <div className='col-5 ms-0'>
      <span className='ms-0'>Desmond Teko</span>
      


      </div>
      <div className='col-4'>

      </div>

      </div>
    </div>
  )
}

export default RightSidebar
