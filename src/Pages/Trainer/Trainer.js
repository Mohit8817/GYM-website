import React from 'react'
import './Trainer.css'
import { trainers } from '../../data'
import Footer from '../../Components/footer/Footer'


const Trainer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">

            <div className="trainer_img">
              <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1800">
                <div className='trainer_text'>
                  <h1 className='fw-bold'>OUR Trainers</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla reiciendis, ad, modi distinctio pariatur, dicta sapiente  cupiditate delectus<br /> nobis itaque in ullam! Possimus, repellat veritatis reprehenderit quidem minus quibusdam.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* second section  */}

      <div className="container  mt-5">
        <div className="row">
          <h2 className='text-warning  text-center fw-bold  mt-5 mb-2'> OUR Trainers </h2>

          <div className="col">

            <div className='row'>
              {
                trainers.map(({ id, image, name, job, }) => {

                  return (
                    <div className='col-md-4 mt-5' key={id}>
                      <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1800">
                        <div className='card m-3'>
                          <div className='card-body '>
                            <img src={image} alt="trainer-images" className='train_img' />
                            <h2 className='m-3 text-warning'>{name}</h2>
                            <h3 className='text-light'>{job}</h3>
                            <div className=' fs-4 footer-fa'>
                              <a href="https://linkedin.com"><i className='fa fa-linkedin  '></i></a>
                              <a href="https://facebook.com"><i className='fa fa-facebook m-2 '></i></a>
                              <a href="https://twitter.com"><i className='fa fa-twitter '></i></a>
                              <a href="https://instagram.com"><i className='fa fa-instagram m-2'></i></a>
                            </div>
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
      <Footer />
    </div>
  )
}

export default Trainer










