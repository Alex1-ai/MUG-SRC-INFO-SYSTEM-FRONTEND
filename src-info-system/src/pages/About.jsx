import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <NavBar />
    {/* <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>ABOUT US</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>About  </li>
          </ol>
        </div>

      </div>
    </section> */}
    {/* <!-- End Breadcrumbs Section --> */}
      <section id="about">
      <div class="container" data-aos="fade-up">

        <header class="section-header pt-5">
          <h3> SRC INFORMATION SYSTEM
          </h3>
        <p>We offer a platform that empowers students to share their feedback and address academic concerns, fostering an environment dedicated to enhancing and nurturing student academic progress.</p>
        </header>

        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
    
            </p>


            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title"><Link to="/news">SRC News </Link></h4>
              <p class="description">Stay up-to-date with the latest news and updates from the SRC Info System. Our news section provides you with valuable insights, latest announcements, and important developments.Check back regularly to ensure you don't miss any of the exciting news and updates from SRC Info System!</p>
              {/* <p class="description">Teacher rating is one of the topics that has been widely studied over the years, which needs relevant attention by our educational administrative institutions.</p> */}
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-brightness-high"></i></div>
              <h4 class="title"><a href="#">Students Problems</a></h4>
              <p class="description">We care about your concerns and challenges. At SRC Info System, we provide a platform where students can voice their issues, share concerns, or seek assistance for any problems they may be facing. Our dedicated SRC (Student Representative Council) team is here to listen, support, and help resolve your concerns. </p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bi bi-calendar4-week"></i></div>
              <h4 class="title"><a href="#">Student Timetable</a></h4>
              <p class="description">Our Student Timetable feature is designed to make your life as a student easier and more organized. Say goodbye to missed classes and assignment deadlines – keep everything in one place and stay on top of your academic commitments.

</p>
            </div>

{/* 
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title"><a href="{% url 'review' %}">Teacher's rating </a></h4>
              <p class="description">Teacher rating is one of the topics that has been widely studied over the years, which needs relevant attention by our educational administrative institutions.</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-brightness-high"></i></div>
              <h4 class="title"><a href="{% url 'review' %}">Students Feedback</a></h4>
              <p class="description">Students can give feedback as easy and stressfree as possible. This encourages both the lecturers and students to enhance Teaching and Learning. </p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bi bi-calendar4-week"></i></div>
              <h4 class="title"><a href="{% url 'review' %}">Improves Productivity</a></h4>
              <p class="description">This system also improve the productivity of the student and the lecturers by regular feedback, which gives the lecturer dynamic style of engaging and giving the students the best information.</p>
            </div> */}

          </div>

          <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <img src="assets/img/about-img.svg" class="img-fluid" alt=""/>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="assets/img/about-extra-1.svg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
            <h4>MAIN OBJECTIVE.</h4>
            <p>
            The main objective of the SRC (Student Representative Council) website is to serve as a central online platform that provides a wide range of resources, information, and services to the student body of an educational institution. 


            </p>
            <p>
            Communication Hub: The SRC website acts as a primary communication channel between the student council, students, faculty, and administration. It facilitates the dissemination of important announcements, news, and updates related to student affairs, events, and initiatives.
            </p>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="assets/img/about-extra-2.svg" class="img-fluid" alt="" />
          </div>

          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
            <h4>SIGNIFICANCE.</h4>
            <p>
            The SRC (Student Representative Council) Info System is a crucial digital platform created with the primary goal of enhancing the educational experience and well-being of students within an institution. This project holds great significance due to its potential to address several critical needs and challenges faced by both students and the institution itself. 
            </p>
            <p>
            It also provide a platform for students to voice their concerns, seek assistance, and engage in constructive dialogues, the SRC Info System empowers students to actively participate in shaping their educational experience. It fosters a sense of ownership and responsibility within the student body.
            </p>
            <p>
              Futhermore, it aids structured document,representation and eliminates the tedious of performing monotonous day to day activity. The system is designed in a way that makes it possible to access through any device connected to the internet.
            </p>
          </div>

        </div>

      </div>
     </section>
     <Footer />

    </>
  )
}

export default About
