import React from 'react';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import DashboardSideBar from '../../components/DashboardSideBar';

const TermsConditions = () => {
  return (
    <>
      <NavBar  />

      {/* Breadcrumbs Section */}
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Terms & Conditions</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>Terms & Conditions</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End Breadcrumbs Section */}

      <section class="inner-page pt-4">
        <div class="container">
          
        <section class="h-100 h-custom" style={{backgroundColor: "#eeecf8"}}>

      <div class="container py-5 h-100">

    {/* <!-- ========================= SECTION CONTENT ========================= --> */}
    <section class="section-conten padding-y bg">

        <div class="container">
        {/* <div class="container"> */}
        <div class="row">
                                
         <DashboardSideBar name={"Terms & Conditions"}/>
        <main class="col-md-9">
                                    
        <article class="card">
        {/* <DashboardSideBar name={"Terms & Conditions"}/> */}
          <header className="section-header pb-3 pt-3 text-center">
            <h3 className="pt-4"><b>Terms & Conditions</b></h3>
          </header>
          <div className='p-3'>
            <h5><strong>1. Introduction</strong></h5>
            {/* <br /> */}
           <p> Welcome to the Methodist University Information System. These terms and conditions govern your use of this system. By accessing and using this system, you accept and agree to be bound by these terms and conditions.</p>

            <h5><strong>2. User Responsibilities</strong></h5>
            {/* <br /> */}
            <p>Users of this system are responsible for maintaining the confidentiality of their login credentials. You are responsible for all activities that occur under your account. If you suspect any unauthorized use of your account, you should notify the system administrators immediately.</p>

            <h5><strong>3. Usage Guidelines</strong></h5>
            {/* <br /> */}
            - Users must use this system for educational and authorized purposes only.
            <br />
            - Unauthorized access or attempts to breach the security of the system are strictly prohibited.
            <br />
            - Users are responsible for the content they upload or share within the system.

            <h5><strong>4. Privacy Policy</strong></h5>
            {/* <br /> */}
           <p>Please review our Privacy Policy to understand how we collect, use, and protect your personal information within the system.</p> 

            <h5><strong>5. Termination</strong></h5>
            {/* <br /> */}
           <p> We reserve the right to terminate or suspend your access to the system at our discretion, with or without cause.</p>

            <h5><strong>6. Changes to Terms</strong></h5>
            {/* <br /> */}
            <p>
            These terms and conditions are subject to change without notice. Users are responsible for reviewing the terms regularly.
            </p>
            <h5><strong>7. Contact Information</strong></h5>
            {/* <br /> */}
            <p>
            If you have any questions or concerns regarding these terms and conditions, please contact us at [Contact Information].
            </p>

          </div>
        </article>
        </main>
        </div>
        </div>
        </section>
        </div>
        </section>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
