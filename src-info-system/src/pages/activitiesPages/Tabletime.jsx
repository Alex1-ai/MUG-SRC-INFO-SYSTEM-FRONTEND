import React from 'react'
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';

const Timetable = () => {

  const largeIcon =  {
    fontSize: "2rem",/* Adjust the size as needed */
}

  return (
    <>
    <section>
      <NavBar/>
    </section>
 <section id="hero">
     <div class="container">
     <header class="section-header pb-3">
          <h3 style={{color:"white"}}>FACULTY TIMETABLES</h3>
         
        </header>
     </div>

     <div class="col col-eq-height justify-content-center align-items-center">

     <div class="col-lg-4 mb-4">
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <i style={largeIcon} class="bi bi-mortarboard"></i>
              <div class="card-body">
                <h5 class="card-title">Economics</h5>
                
              </div>
            </div>
          </div>


          <div class="col-lg-4 mb-4">
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <i style={largeIcon} class="bi bi-mortarboard"></i>
              <div class="card-body">
                <h5 class="card-title">Comm. Studies</h5>
                
              </div>
            </div>
          </div>



          <div class="col-lg-4  mb-4">
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <i style={largeIcon} class="bi bi-mortarboard"></i>
              <div class="card-body">
                <h5 class="card-title">Psychology</h5>
                
              </div>
            </div>
          </div>


          <div class="col-lg-4 mb-4">
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <i style={largeIcon} class="bi bi-mortarboard"></i>
              <div class="card-body">
                <h5 class="card-title">Social Work</h5>
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <i style={largeIcon} class="bi bi-mortarboard"></i>
              <div class="card-body">
                <h5 class="card-title">Science</h5>
                <h5 class="card-title" style={{color:"rgbo(25, 25, 25, 0.2)"}}>Faculty of Economics</h5>
                
              </div>
            </div>
          </div>

          

          </div>
    </section>


    <Footer/>
    </>
  )
}

export default Timetable
