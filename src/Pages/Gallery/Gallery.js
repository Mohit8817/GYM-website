import React from 'react'
import './Gallery.css'
import img1 from '../../images/gallery1.jpg'
import img2 from '../../images/gallery2.jpg'
import img3 from '../../images/gallery3.jpg'
import img4 from '../../images/gallery4.jpg'
import img5 from '../../images/gallery5.jpg'
import img6 from '../../images/gallery6.jpg'
import img7 from '../../images/gallery7.jpg'
import img8 from '../../images/gallery8.jpg'
import img9 from '../../images/gallery9.jpg'
import img10 from '../../images/gallery10.jpg'
import img11 from '../../images/gallery11.jpg'
import img12 from '../../images/gallery12.jpg'
import img13 from '../../images/gallery13.jpg'
import img14 from '../../images/gallery14.jpg'
import img15 from '../../images/gallery15.jpg'
import Footer from '../../Components/footer/Footer'



const Gallery = () => {
  return (
    <div>

      <div className="container-fluid bgimg">
        <div className="row formedia">
          <div className="col">
            <div data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1800">
              <div className='gall_text'>
                <div className='text-center text-light mt-5 p-1'>
                  <h1 className='mt-5 m-3'>Our Gallery   </h1>
                  <p>Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. <br />No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn’t trying.
                    <p className='para2'>Just believe in yourself. Even if you dont pretend that you do and, and some point, you will. </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row mt-5">
          <div className="col text-center m-4 mt-5">
            <h2 className='text-warning fw-bold mb-5 '> OUR GALLERY </h2>
            <div className="img">
              <img src={img1} alt="" className="gal_img" />
              <img src={img2} alt="" className="gal_img" />
              <img src={img3} alt="" className="gal_img" />
              <img src={img4} alt="" className="gal_img" />
              <img src={img5} alt="" className="gal_img" />
              <img src={img6} alt="" className="gal_img" />
              <img src={img7} alt="" className="gal_img" />
              <img src={img8} alt="" className="gal_img" />
              <img src={img9} alt="" className="gal_img" />
              <img src={img10} alt="" className="gal_img" />
              <img src={img11} alt="" className="gal_img" />
              <img src={img12} alt="" className="gal_img" />
              <img src={img13} alt="" className="gal_img" />
              <img src={img14} alt="" className="gal_img" />
              <img src={img15} alt="" className="gal_img" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Gallery
