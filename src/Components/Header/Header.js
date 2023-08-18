import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/main_header.png'
import CountUp from 'react-countup';





const Header = () => {
    return (
        <div> 
        {/* dashboard content  */}

            <div className="container ">
                <div className="row head_col">
                    <div className="col-md-6 p-5 ">
                        <div className='head_text'>
                            <div>
                                <h4 style={{ color: "orange" }}># <CountUp start={300} end={1000} duration={7} /> DaysOfworkOut</h4>
                            </div>
                            <h1 className='fw-bold'>Join The Legends of <br />The Fitness World</h1>
                            <p className='fs-6 text-secondary'>“Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.” </p>
                            <Link to="/plans" className='btn btn-info btn w-50 mt-4 rounded-pill'> Get started</Link>
                        </div>
                    </div>


                    {/* amination divs  */}
                 
                        <div className='box'></div>
                        <div className='box2'></div>
                        <div className='moon'></div>
                 
                      

                      {/* dashboard background image  */}
                    <div className="col-md-6 mt-5">
                        <div className='mt-5'>
                            <div className='circle'></div>
                            <div data-aos="fade-right"
                                data-aos-duration="1200">
                                <img src={image} alt="hearder_img" className="head_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header
