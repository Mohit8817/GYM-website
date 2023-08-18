import React, { useState } from 'react'
import { testimonials } from '../../data';

const Testimonials = () => {
    const [index, setIndex] = useState(1)
    const { name, quote, job, avatar } = testimonials[index];

    const prev = () => {
        setIndex(prev => prev - 1);

        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }

    }

    const next = () => {
        setIndex(prev => prev + 1);

        if (index >= testimonials.length - 1) {
            setIndex(0);
        }
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className='text-center'>
                        <h2 style={{ color: "white", fontSize: "40px" }} > <i className='fa fa-quote-left text-warning'></i> Testimonials</h2>
                    </div>                        

                    <div className="col">
                        {/* card  */}
                        <div className="card card-test ">
                            <div className="card-body test-body text-center ">
                            <div data-aos="fade-up"
                                    data-aos-duration="1200">

                                    <img src={avatar} alt="img" className='test-img' />
                                    </div>
                                    
                                <p className=''>{quote}</p>
                                <h3>{name}</h3>
                                <h6>{job}</h6>
                                <button className='btn btn-success fs-5 fw-bold m-3 ' onClick={prev}> &larr;</button>
                                <button className='btn btn-success fs-5 fw-bold ' onClick={next}> &rarr; </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
