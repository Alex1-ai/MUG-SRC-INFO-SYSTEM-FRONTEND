import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
            <div className="footer-top">
                    <div className="container">
                        <div className="row">

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3>MUG SRC</h3>
                            <p>Methodist University has seen significant growth and transformation since its amalgamation, resulting in numerous positive impacts. In light of this, the Student Representative Council, in collaboration with the university, has developed an application designed to assist students in effortlessly navigating the campus and accessing vital information and notifications.</p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                Dansoman, weseley Grammarrs <br></br>
                                Accra Ghana, NY 535022<br></br>
                                Greater Accra<br></br>
                                <strong>Phone:</strong> +233 50 496 7983<br></br>
                                <strong>Email:</strong> mug-src@gmail.com<br></br>
                            </p>

                            <div className="social-links">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p> 
                            Greetings! Methodist University Ghana is pleased to announce a new approach to disseminating information to 
                            our esteemed students and staff. We have developed an innovative app that will make it easier for you to stay up-to-date with the latest news and events happening on campus. By subscribing to this platform, you will have access to all the information you need, right at your fingertips.
                             We look forward to your continued engagement with us. Thank you!
                    
                            </p> 
                            <form action="" method="post">
                                   <input type="email" name="email"></input>
                                    <input type="submit" value="Subscribe" ></input>
                            </form>
                        </div>

                        </div>
            </div>
            </div>

            <div className="container">
            <div className="copyright">
                &copy; Copyright <strong>Boostrapmade</strong>. All Rights Reserved
            </div>
            <div className="credits">
                {/* <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
            --> */}
                Designed by <a href="#">MUITSA  Methodist University Information Technology Students Association (Open-Source Project) . Directed by Onedibe</a>
            </div>
        </div>
    </footer>
  {/* <!-- End Footer --> */}
  
  
      
    </>
  )
}

export default Footer
