import React from 'react'
import image from '../../images/values.jpg'
import { values } from '../../data'

const Value = () => {
    return (
        <div>
            <br /><br /><br /><br />
            <div className="container">
                <div className="row value-row">
                    <div className="col-md-5">
                        <div className='mt-5'>
                            <div data-aos="fade-right"
                                data-aos-duration="1000">
                                <img src={image} alt="value_img" className='w-75 m-5 value_img' />
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md-7'>
                        <div className="row">
                            <div className='text-center'>
                                <h2 style={{ color: "white", fontSize: "40px" }} > <i className='fa fa-heart text-warning'></i> OUR Value</h2>
                                <p className='text-secondary m-4'>Fitness can be described as a condition that helps us look, feel and do our best. Physical fitness involves the performance of the heart and lungs, and the muscles of the body.</p>
                            </div>

                            {
                                values.map(({ id, icon, title, desc }) => {
                                    return (

                                        <div className='col-md-5 m-2 mb-5' key={id}>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <span>{icon}</span>
                                                    <h3 className='card-title '>{title}</h3>
                                                    <small className='card-text '>{desc}</small>
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
        </div>

    )
}

export default Value
