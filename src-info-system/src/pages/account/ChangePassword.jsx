import React from 'react'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'
import DashboardSideBar from '../../components/DashboardSideBar'

const ChangePassword = () => {
    const imgDecor = {
        // fontSize: "5rem",/* Adjust the size as needed */
        width: "50px",
        height: "50px",
        borderRadius: "50%"
    }
  return (
    <>
    <NavBar />
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>CHANGE PASSWORD</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>change-password</li>
          </ol>
        </div>

      </div>
    </section>
    <section class="inner-page pt-4">
      <div class="container">
            <section class="h-100 h-custom" style={{backgroundColor: "#eeecf8"}}>

                <div class="container py-5 h-100">

                    {/* <!-- ========================= SECTION CONTENT ========================= --> */}
                    <section class="section-conten padding-y bg">

                        <div class="container">
                            <div class="row">
                                
                                <DashboardSideBar name={"Change Password"}/>
                                <main class="col-md-9">
                                    
                                    <article class="card">

                                        <header class="card-header">
                                            <strong class="d-inline-block mr-3">Change Password </strong>
                                            {/* <!-- <span>{{user.full_name | capfirst}}</span> --> */}
                      
                                        </header>
                                        <div class="card-body">
                                            <div class="text-center mb-3">
                                                <img src="assets/img/avatar1.jpg" alt='imag' style={imgDecor} />
                                            </div>

                                            <div class="row">
                                                <br />

                                                <div class="col-md-12">
                                                    <form action="{% url 'edit_profile' %}" method="POST" enctype="multipart/form-data">
                                                        {/* {% csrf_token %} */}
                                                        <div class="form-row">
                                                            <div class="form-group ">
                                                                <label for="">Email</label>
                                                                <input type="text" class="form-control" name="" />
                                                                
                                                            </div>
                                                            {/* <div class="form-group ">
                                                                <label for="">Last Name</label>
                                                                <input type="text" class="form-control" name="" /> 
                                                                {/* Onedibe 
                                                            </div> */}
 
                                                        </div>
                                                        <input class="mt-3 form-control text-white btn btn-primary" type="submit" value="Reset Password" />
                                                        <br />
                                                        <br />

                                                   </form>
                                                </div>
                                            </div>
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
  )
}

export default ChangePassword
