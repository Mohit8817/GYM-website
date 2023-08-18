import React from 'react'
import './program.css'
import { programs } from '../../data'
import { Link } from 'react-router-dom'


const Programs = () => {
    return (
        <div>
            <br />
            <div className="container">
                <div className="row mt-5">
                    <div className="col">                    
                        <div className='m-4 p-4'>
                            <h2 style={{ color: "white", fontSize: "40px" }}> <i className='fa fa-shield  text-warning'></i> Programs</h2>
                        </div>
                    </div>
                    {/* animation divs  */}
                    <div className='box2'></div>    
                        <div className='moon'></div>

                    <div className='row'>
                        {
                            programs.map(({ id, icon, title, info, path }) => {

                                return (
                                    <div className='col-md-3' key={id}>
                                        <div data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1800">
                                            <div className='card m-3'>
                                                <div className='card-body'>
                                                    <span>{icon}</span>
                                                    <h3 className='card-title '>{title}</h3>
                                                    <small className='card-text '>{info}</small>
                                                    <Link to={path} className='btn btn-info rounded-pill w-75 '>Learn More &rarr;</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Programs
