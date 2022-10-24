import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import AboutComponent from '../../components/about/About'
import Duration from '../../components/duration/Duration'
import './about.css'
import Footer from './../../components/footer/Footer';
import AboutRemark from './../../components/aboutRemark/AboutRemark';
import AboutGallery from '../../components/aboutGallery/AboutGallery'
import Service from '../../components/service/Service'

const About = () => {

  return (
    <>
        <Navbar/>
        <Header aboutPage = {true}/>
        <div className='main-about-container'>
          <Duration/>
          <AboutGallery/>
          <AboutRemark/>
          <Service/>
        </div>
        <Footer/>
    </>
  )
}

export default About