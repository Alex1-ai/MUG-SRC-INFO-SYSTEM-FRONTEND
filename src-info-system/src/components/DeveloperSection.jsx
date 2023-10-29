import React from 'react'
import data from '../data/contributorsInfo'

const DeveloperSection = () => {
  return (
    <>
       {/* <!-- ======= Team Section ======= --> */}
    <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>CONTRIBUTORS </h3>
          <p>This are the Student who Contributed to the Open Source project of Methodist University SRC Information System</p>
        </div>

        <div className="row">

           {data.map((dev)=><>
            <div key={dev?.name}  className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div className="member">
              <img src={dev?.image} className="img-fluid" alt=""/>

              {/* <img src="assets/img/mypics2.png" className="img-fluid" alt=""/> */}

              <div className="member-info">
                <div className="member-info-content">
                  <h4>{dev?.name}</h4>
                  <span>{dev?.profession}</span>
                  <div className="social">
                    <a href={dev?.twitter}><i className="bi bi-twitter"></i></a>
                    <a href={dev?.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={dev?.github}><i className="bi bi-github"></i></a>
                    <a href={dev?.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
           
           
           </>)}


          {/* <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div className="member">
              <img src="assets/img/mypics2.png" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Onedibe Emmanuel</h4>
                  <span>Software Engineer</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div className="member">
              <img src="assets/img/mypics2.png" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Onedibe Emmanuel</h4>
                  <span>Software Engineer</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div className="member">
              <img src="assets/img/mypics2.png" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Onedibe Emmanuel</h4>
                  <span>Software Engineer</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
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
