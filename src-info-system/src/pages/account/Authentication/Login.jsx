import React from 'react'
import { Link } from 'react-router-dom'
// import "./auth.css"
const Login = () => {
  const imgDecor =  {
    // fontSize: "5rem",/* Adjust the size as needed */
     width:"120px",
     height:"120px" ,
     borderRadius:"20%"
}
  return (
    <>
    <section className="vh-100" style={{backgroundColor: "#004a99"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">
          <div className="text-center mb-3">
            <img src="assets/img/mug-src.ico" alt='imag' style={imgDecor} />
            </div>
            <h3 className="mb-4">Sign in</h3>

            <div className="form-outline mb-3">
            {/* <label className="form-label" for="typeEmailX-2">Email</label> */}
              <input type="email" id="typeEmailX-2" placeholder="Student's email" className="form-control form-control-lg" />
              
            </div>

            <div className="form-outline mb-2">
            {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
              <input  type="password" id="typePasswordX-2" placeholder='Password' className="form-control form-control-lg" />
              
            </div>

            {/* <!-- Checkbox --> */}
            <div className="d-flex justify-content-end align-items-left mb-4">
            {/* <!-- Checkbox --> */}
            {/* <div className="form-check"> */}
              {/* <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked /> */}
              {/* <label className="form-check-label" htmlFor="form1Example3"> Remember me </label> */}
            {/* </div> */}
            <a href="#!" className='text-sm'>Forgot password?</a>
          </div>

            <button className="btn btn-primary btn-lg btn-block w-75" type="submit">Login</button>

            <hr className="my-4"/>
            <div className="text-center">
              <p>don't have account? <Link to="/register">Register</Link></p>
             
            </div>

            {/* <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor:" #dd4b39"}}
              type="submit"><i className="fab fa-google me-2"></i> you don't have account? Register</button> */}
            {/* <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button> */}

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login

