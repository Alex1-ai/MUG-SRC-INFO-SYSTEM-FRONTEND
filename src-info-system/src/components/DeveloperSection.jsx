import React from 'react'
import data from '../data/contributorsInfo'

const DeveloperSection = () => {
  return (
    <>
       {/* <!-- ======= Team Section ======= --> */}
    <section id="team">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h3>Developers </h3>
          <p>This are the Student who Contributed to the Open Source project of Methodist University SRC Information System</p>
        </div>

        <div class="row">

           {data.map((dev)=><>
            <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div class="member">
              <img src={dev?.image} class="img-fluid" alt=""/>
              {/* <img src="assets/img/mypics2.png" class="img-fluid" alt=""/> */}
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{dev?.name}</h4>
                  <span>{dev?.profession}</span>
                  <div class="social">
                    <a href={dev?.twitter}><i class="bi bi-twitter"></i></a>
                    <a href={dev?.facebook}><i class="bi bi-facebook"></i></a>
                    <a href={dev?.github}><i class="bi bi-github"></i></a>
                    <a href={dev?.linkedin}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
           
           
           </>)}


          {/* <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div class="member">
              <img src="assets/img/mypics2.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Onedibe Emmanuel</h4>
                  <span>Software Engineer</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div class="member">
              <img src="assets/img/mypics2.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Onedibe Emmanuel</h4>
                  <span>Software Engineer</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div class="member">
              <img src="assets/img/mypics2.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Onedibe Emmanuel</h4>
                  <span>Software Engineer</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </section>
    {/* <!-- End Team Section --> */}
      
    </>
  )
}

export default DeveloperSection
