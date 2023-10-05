import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import DeveloperSection from '../components/DeveloperSection'
import Description from '../components/Description'
import Activities from '../components/Activities'

const Home = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <Description />
    <Activities />
    <DeveloperSection />
    <Footer />
    </>
  )
}

export default Home
