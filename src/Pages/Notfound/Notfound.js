import React from 'react'
import './Notfound.css'
import { Link } from 'react-router-dom'
import img from '../../images/404.jpg'

const Notfound = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col mt-5">
            <div className='text-center'>
              <img src={img} alt="img404" className='w-50 mt-5 mb-3' />
              <h1 className='text-light fs-1 fw-bold '>Page Not Found</h1>
              <Link to="/" className="btn rounded-pill">GO TO HOME PAGE </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notfound
