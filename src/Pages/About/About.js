import React from 'react'
import './About.css'
import storyimg from '../../images/about1.jpg'
import storyimg2 from '../../images/about2.jpg'
import storyimg3 from '../../images/about3.jpg'
import Footer from '../../Components/footer/Footer'



const About = () => {
  return (
    <div>

      <div className="container-fluid">
        <div className="row bg">
          <div className="col">
            <div className='mt-3'>
              <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1800">
                <div className="about_img">
                  <div className='about_text'>
                    <h1 className='fw-bold '>About</h1>
                    <p>Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach.  <p>Number one, like yourself. Number two, you have to eat healthy. And number three, you've got to squeeze your buns. </p> </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>





      {/* about story section */}


      <div className="container">
        <div className="row">
          <div className="col-md-6 p-3 mt-5">
            <div data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1800">
              <div className=''>
                <img src={storyimg} alt="" className='about_section_image mt-5' />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className='text-light mt-5'>
              <h2 className='fw-bold text-warning'>Our Story </h2>
              <div className='mt-4 pe-5'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, nulla eos dolores blanditiis sequi distinctio, ipsam placeat molestiae omnis odit quod. Nulla est odio et obcaecati dolore? Ipsam,
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,voluptas hic?
                  ipsam placeat molestiae omnis odit quod.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, expedita quo quam repudiandae laboriosam nostrum quas quidem consequuntur placeat animi inventor</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, </p>
              </div>
            </div>
          </div>
        </div>

        {/* second  */}

        <div className="row mt-5 formediaquery">
          <div className="col-md-6 ">
            <div className='text-light mt-5'>
              <h2 className='fw-bold text-warning'>Our Vision </h2>
              <div className='mt-4'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, nulla eos dolores blanditiis sequi distinctio, ipsam placeat molestiae omnis odit quod. Nulla est odio et obcaecati dolore? Ipsam,
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,voluptas hic?
                  ipsam placeat molestiae omnis odit quod.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, expedita quo quam repudiandae laboriosam nostrum quas quidem consequuntur placeat animi inventor</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolore  </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">


            <div data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1800">

              <div className=''>
                <img src={storyimg2} alt="" className='about_section_image' />
              </div>
            </div>
          </div>



        </div>

        {/* third  */}

        <div className="row mt-5">
          <div className="col-md-6 mt-5">
            <div data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1800">
              <div className=' mt-5'>
                <img src={storyimg3} alt="" className='about_section_image' />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className='text-light mt-5'>
              <h2 className='fw-bold text-warning'>Our Mission </h2>
              <div className='mt-4 pe-5'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, nulla eos dolores blanditiis sequi distinctio, ipsam placeat molestiae omnis odit quod. Nulla est odio et obcaecati dolore? Ipsam,
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,voluptas hic?
                  ipsam placeat molestiae omnis odit quod.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, expedita quo quam repudiandae laboriosam nostrum quas quidem consequuntur placeat animi inventor</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, </p>
              </div>
            </div>
          </div>
        </div>

      </div>
<Footer/>
    </div>

  )
}

export default About
