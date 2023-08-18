import React from 'react'
import './Plans.css'
import { plans } from '../../data'
import Footer from '../../Components/footer/Footer'

const Plans = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">

            <div className="plan_img">
              <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1800">
                <div className='plan_text'>
                  <h1 className='fw-bold'>Membership Plans</h1>
                  <p></p>Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach.  <p>Number one, like yourself. Number two, you have to eat healthy. And number three, you've got to squeeze your buns. </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* plans section  */}

      <div className="container con2">
        <div className="row mt-5">
        <h2 className='text-warning  text-center fw-bold mb-5'> OUR Plans </h2>
            {
              plans.map(({id, name, desc, price, features }) => {
                return (
                  <div className='col-md-4' key={id}>
                    <div className='card m-3'>
                      <div className='card-body text-light '>
                        <h3 className='text-warning'>{name}</h3>
                        <h2 className='text-info'>$${price}/mo</h2>
                        <small>{desc}</small>
                        <h4>features</h4>
                       
                        {
                            features.map(({feature,available},index) =>{
                              return  <p key={index} className={!available ? 'disabled': ' '}>{feature}</p>
                              
                            })
                          }
                            <button className='btn'>Choose plan</button>
                      </div>
                    </div>
                  </div>
                )

              })
            }
          </div>
        </div>
        <Footer/>
      </div>
    
  )
}

export default Plans
