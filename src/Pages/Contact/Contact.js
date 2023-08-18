import React from 'react'
import './Contact.css'
import Footer from '../../Components/footer/Footer'
const Contact = () => {
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col mt-5">

            <div className='contactimg '>
              <div className=' contact_text'>
                <h1 className='mt-5'>Get in Touch </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore omnis laboriosam veniam, atque nemo ab amet non sint sit! <br /> Amet, nisi alias
                  laboriosam veniam, atque nemo ab amet non sint sit! Amet, nisi alias dignissimos </p>
              </div>

            </div>

            <div data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1800">

              <div className='contact_fa text-center'>
                <a href="mailto:mohitverma8817@gmail.com"><i className='fa fa-envelope '></i></a>
                <a href="tel:91 8076766168"><i className='fa fa-phone'></i></a>
                <a href="https://wa.me/+91 8076766168/"><i className='fa fa-whatsapp'></i></a>
              </div>

            </div>


            {/* contact login form  */}

            <div className="login-box">
              <h2>Login</h2>
              <form>
                <div className="user-box">
                  <input type="text" name="" required="aaa" />
                  <label>Username</label>
                </div>
                <div className="user-box">
                  <input type="password" name="" required="aa" />
                  <label>Password</label>
                </div>
                <a href="/">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>








          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Contact
