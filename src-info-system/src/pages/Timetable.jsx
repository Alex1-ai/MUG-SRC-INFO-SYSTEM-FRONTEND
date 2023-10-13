import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Timetable = () => {
  const largeIcon = {
    fontSize: '2rem', /* Adjust the size as needed */
  };

  return (
    <>
      <section>
        <NavBar />
      </section>

      <section id="timetable" className=" text-white py-5 pb-3">
        <div className="container">
          <header className="section-header pb-3 pt-3 text-center">
            <h3 className="pt-4"><b>Faculty Timetables</b></h3>
          </header>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col mb-4 ">
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i style={largeIcon} className="bi bi-mortarboard"></i>
                <div className="card-body">
                  <h5 className="card-title"><b>Economics</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Faculty of Economics</h6>
                </div>
              </div>
            </div>
            </div>

            <div className="col mb-4">
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i style={largeIcon} className="bi bi-mortarboard"></i>
                <div className="card-body">
                  <h5 className="card-title"><b>Comm. Studies</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Faculty of Comm. Studies</h6>
                </div>
              </div>
            </div>
            </div>

            <div className="col mb-4">
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i style={largeIcon} className="bi bi-mortarboard"></i>
                <div className="card-body">
                  <h5 className="card-title"><b>Psychology</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Faculty of Psychology</h6>
                </div>
              </div>
            </div>
            </div>

            <div className="col mb-4">
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i style={largeIcon} className="bi bi-mortarboard"></i>
                <div className="card-body">
                  <h5 className="card-title"><b>Social Work</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Faculty of Social Work</h6>
                </div>
              </div>
            </div>
            </div>

            <div className="col mb-4">
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i style={largeIcon} className="bi bi-mortarboard"></i>
                <div className="card-body">
                  <h5 className="card-title"><b>Science</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Faculty of Science</h6>
                </div>
              </div>
            </div>
            </div>

        

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Timetable;
