import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const navLinkStyle = {
        textDecoration: 'none', // Remove the underline

    }
  return (
    <>
        {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" class="clearfix">
    <div class="container" data-aos="fade-up">

        <div class="hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/hero-img.svg" alt="" class="img-fluid"/>
        </div>

        <div class="hero-info" data-aos="zoom-in" data-aos-delay="100">
            <h2>Welcome to<br/><span>S . R . C</span><br/>Information System!</h2>
            <div>
            <Link style={navLinkStyle} to="/about"  class="btn-get-started scrollto">Get Started</Link>
            <Link style={navLinkStyle} to="/news" class="btn-services scrollto">SRC News</Link>
            </div>
        </div>

    </div>
  </section>
  {/* <!-- End Hero Section --> */}
      
    </>
  )
}

export default HeroSection
