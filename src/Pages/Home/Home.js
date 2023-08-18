import React from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import Programs from '../../Components/programs/Programs'
import Value from '../../Components/Value/Value'
import Accordion from '../../Components/F&Q/Accordion'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/footer/Footer'

const Home = () => {
  return (
    <div>

  

       
        <Header/>
        <Programs/>
        <Value/>
        <Accordion/>
        <Testimonials/>
        <Footer/> 
    </div>
  )
}

export default Home
