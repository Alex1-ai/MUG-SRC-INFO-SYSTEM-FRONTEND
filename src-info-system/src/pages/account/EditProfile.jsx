import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import DashboardSideBar from '../../components/DashboardSideBar'
import { Link } from 'react-router-dom'


const EditProfile =()=> {
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
          <h2>PROFILE</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>edit-profile</li>
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
                                
                                <DashboardSideBar name={"Edit Profile"}/>
                                <main class="col-md-9">
                                    
                                    <article class="card">

                                        <header class="card-header">
                                            <strong class="d-inline-block mr-3">Edit Your Profile </strong>
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
                                                                <label for="">First Name</label>
                                                                <input type="text" class="form-control" name="" />
                                                                
                                                            </div>
                                                            <div class="form-group ">
                                                                <label for="">Last Name</label>
                                                                <input type="text" class="form-control" name="" /> 
                                                                {/* Onedibe */}
                                                            </div>

                                                        </div>

                                                        {/* <!--  --> */}
                                                        <div class="form-row">
                                                            <div class="form-group ">
                                                                <label for="">Phone Number</label>
                                                                <input type="text" class="form-control" name="" /> 
                                                                {/* +233 50 496 7983 */}
                                                            </div>
                                                            <div class="form-group ">
                                                                <label for="">Profile Picture</label>
                                                               <input type="file" class="form-control" name=""/> 
                                                                {/* {{ profile_form.profile_picture }} */}
                                                                {/* <img src='assets/img/avatar1.jpg' alt='' /> */}
                                                            </div>

                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Address Line 1</label>
                                                             <input class="form-control" type="text"/>
                                                            {/* {{ profile_form.address_line_1}} */}
                                                            {/* Dansoman weseley Grammar */}
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Address Line 2</label>
                                                            <input class="form-control" type="text" /> 
                                                            {/* Dansoman wesley Grammar */}
                                                        </div>

                                                        <div class="form-row">
                                                            <div class="form-group">
                                                                <label for="">City</label>
                                                                <input type="text" class="form-control" name=""/> 
                                                                {/* Accra */}
                                                            </div>
                                                            <div class="form-group ">
                                                                <label for="">State</label>
                                                               <input type="text" class="form-control" name=""/> 
                                                                {/* Greater Accra */}
                                                            </div>
                                                            <div class="form-group mb-2">
                                                                <label for="">Country</label>
                                                                <input type="text" class="form-control" name=""/>
                                                                {/* Nigeria */}
                                                            </div>



                                                        </div>
                                               
                                                        <input class=" form-control text-white btn btn-primary" type="submit" value="Save" />
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

            <Footer />
        </>
    )
}

export default EditProfile