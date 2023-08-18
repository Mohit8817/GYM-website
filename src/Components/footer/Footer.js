import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'


const Footer = () => {
  return (
      <div>
        <footer>
          <div className="container-fluid footer_cont">
            <div className="row">

              <div className="col-md-6 p-5">
                <div >
                  <Link to="/">
                    <img src={logo} alt="footer_logo" className='w-50 mb-4' />
                  </Link>
                  <p className='text-light '>
                  Physical fitness is not only one of the most important keys to a healthy body, <br /> it is the basis of dynamic and creative intellectual activity.. <p>Exercise is labor without weariness.</p></p>
                  <div className=' fs-4 footer-fa'>
                    <a href="https://linkedin.com"><i className='fa fa-linkedin bg-light rounded p-2 '></i></a>
                    <a href="https://facebook.com"><i className='fa fa-facebook m-2 bg-light rounded  p-2 '></i></a>
                    <a href="https://twitter.com"><i className='fa fa-twitter bg-light rounded p-2 '></i></a>
                    <a href="https://instagram.com"><i className='fa fa-instagram m-2 bg-light rounded p-2 '></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-2 ">
                <div className=' footer_col'>
                  <h4>Permalinks</h4>

                  <Link to="/about">About</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/plans">Plans</Link>
                  <Link to="/trainers">Trainers</Link>
                  <Link to="/contact">Contact</Link>




                </div>
              </div>

              <div className="col-md-2 ">
                <div className='footer_col'>
                  <h4>Insights</h4>
                  <Link to="/s">Blog</Link>
                  <Link to="/s">Case Studies</Link>
                  <Link to="/s">Events</Link>
                  <Link to="/s">Communities</Link>


                </div>
              </div>
              <div className="col-md-2">
                <div className='  footer_col'>
                  <h4>Get in touch</h4>
                  <Link to="/contact">Contact</Link>
                  <Link to="/s">Support</Link>


                </div>
              </div>

              <div className='text-center text-light fs-5 mb-3'>
                <hr />
                <small>2023 MY WORKOUT WEBSITE &copy; All Right Reserved </small>
              </div>

            </div>
          </div>
        </footer>


      </div>
  )
}

export default Footer
