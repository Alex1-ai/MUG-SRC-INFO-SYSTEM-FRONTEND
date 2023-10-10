import React from 'react'
import { Link } from 'react-router-dom'

const Activities = () => {
    const largeIcon =  {
        fontSize: "5rem",/* Adjust the size as needed */
    }
  return (
    <>
     <section id="why-us">
      <div class="container" data-aos="fade-up">
        <header class="section-header pb-3">
          <h3 >ACTIVITIES SECTION</h3>
         
        </header>

        <div class="row row-eq-height justify-content-center">
          
        <div class="col-lg-4 mb-4">
           <Link to="/dashboard">
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <i style={largeIcon} class="bi bi-person-circle"></i>
              <div class="card-body">
                <h5 class="card-title">PROFILE</h5>
                {/* <p class="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                <a href="#" class="readmore">Read more </a> */}
              </div>
            </div>
            </Link>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card" data-aos="zoom-in" data-aos-delay="100">
              <i style={largeIcon} class="bi bi-calendar4-week "></i>
              <div class="card-body">
                <h5 class="card-title">TIME-TABLE</h5>
                {/* <p class="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                <a href="#" class="readmore">Read more </a>*/}
              </div> 
            </div>
          </div>

          

          <div class="col-lg-4 mb-4">
            <Link to="/news">
            <div class="card" data-aos="zoom-in" data-aos-delay="300">
              <i style={largeIcon} class="bi bi-chat-square-text"></i>
              <div class="card-body">
                <h5 class="card-title">SRC NEWS</h5>
                {/* <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                <a href="#" class="readmore">Read more </a> */}
              </div>
            </div>
            </Link>
          </div>

          <div class="col-lg-4 mb-4">
            <Link to="/vote">
            <div class="card" data-aos="zoom-in" data-aos-delay="300">
            <i style={largeIcon} class="bi bi-bar-chart-line-fill"></i>
              <div class="card-body">
                <h5 class="card-title">VOTE</h5>
                {/* <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                <a href="#" class="readmore">Read more </a> */}
              </div>
            </div>
            </Link>
          </div>


          <div class="col-lg-4 mb-4">
            <Link to="https://library.mug.edu.gh/">
              <div class="card" data-aos="zoom-in" data-aos-delay="300">
                {/* <i style={largeIcon} class="bi bi-chat-square-text"></i> */}
                <i class="fa fa-university" style={largeIcon} aria-hidden="true"></i>
                <div class="card-body">
                  <h5 class="card-title">MUG ONLINE LIBRARY</h5>
                  {/* <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                  <a href="#" class="readmore">Read more </a> */}
                </div>
            
            </div>
            </Link>
          </div>

          <div class="col-lg-4 mb-4">
            <Link to="https://alexis.onrender.com">
            <div class="card" data-aos="zoom-in" data-aos-delay="300">
            <i style={largeIcon} class="fas fa-utensils"></i>
              <div class="card-body">
                <h5 class="card-title"> MUG CANTEEN </h5>
                {/* <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                <a href="#" class="readmore">Read more </a> */}
              </div>
            </div>
            </Link>
          </div>

          <div class="col-lg-4 mb-4">
            <Link to="https://osissip.osis.online/">
            <div class="card" data-aos="zoom-in" data-aos-delay="300">
            <i style={largeIcon} class="fas fa-graduation-cap"></i>
              <div class="card-body">
                <h5 class="card-title">MUG STUDENT PORTAL</h5>
                {/* <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                <a href="#" class="readmore">Read more </a> */}
              </div>
            </div>
            </Link>
          </div>
          

        </div>

        {/* <div class="row counters" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="1" class="purecounter"></span>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1364" data-purecounter-duration="1" class="purecounter"></span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" class="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div> */}

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}

      
      
    </>
  )
}

export default Activities
