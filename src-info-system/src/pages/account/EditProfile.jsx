import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import DashboardSideBar from '../../components/DashboardSideBar'

const EditProfile = () => {
  return (

    <>

    <NavBar/>
    <section class="h-100 h-custom" style="background-color: #eeecf8;">

<div class="container py-5 h-100">
    
{/* <!-- ========================= SECTION CONTENT ========================= --> */}
<section class="section-conten padding-y bg">

<div class="container">
    <div class="row">
   {/* {% include 'dashboard_sidebar.html' %} */}
   <DashboardSideBar />
    <main class="col-md-9">
        {% include 'alert.html'%}
        <article class="card">
        
        <header class="card-header">
            <strong class="d-inline-block mr-3">Edit Your Profile </strong>
            <!-- <span>{{user.full_name | capfirst}}</span> -->
        </header>
            <div class="card-body">
                <div class="text-center mb-3">
                    <img src="{{ userprofile.profile_picture.url}}"  alt="Profile Picture" width="100" style="border-radius:50px;">
                </div>

                <div class="row">
                        <br/>
                    
                        <div class="col-md-12">
                        <form action="{% url 'edit_profile' %}" method="POST" enctype="multipart/form-data">
                            {/* {% csrf_token %} */}
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="">First Name</label>
                                    {/* <!-- <input type="text" class="form-control" name=""> --> */}
                                    Emmanuel
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="">Last Name</label>
                                    {/* <!-- <input type="text" class="form-control" name=""> --> */}
                                    Onedibe 
                                </div>

                            </div>

                            {/* <!--  --> */}
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="">Phone Number</label>
                                    {/* <!-- <input type="text" class="form-control" name=""> --> */}
                                    +233 50 496 7983
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="">Profile Picture</label>
                                    {/* <!-- <input type="file" class="form-control" name=""> --> */}
                                    {/* {{ profile_form.profile_picture }} */}
                                    <img src='assets/img/avatar1.jpg' alt='' />
                                </div>

                            </div>
                            <div class="form-group">
                                <label for="">Address Line 1</label>
                                {/* <!-- <input class="form-control" type="text". --> */}
                                {/* {{ profile_form.address_line_1}} */}
                                Dansoman weseley Grammar
                            </div>
                            <div class="form-group">
                                <label for="">Address Line 2</label>
                                {/* <!-- <input class="form-control" type="text"> --> */}
                                 Dansoman wesley Grammar 
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="">City</label>
                                    {/* <!-- <input type="text" class="form-control" name=""> --> */}
                                     Accra 
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">State</label>
                                    {/* <!-- <input type="text" class="form-control" name=""> --> */}
                                    Greater Accra  
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Country</label>
                                    {/* <!-- <input type="text" class="form-control" name=""> --> */}
                                    Nigeria 
                                </div>



                            </div>
                            
                            <input  class=" form-control text-white btn btn-primary" type="submit" value="Save" />
                            <br/>
                            <br/>

                        </form>
                            

                            
                        </div>
                    </div>
                
            </div>
            </div>
            
             {/* <!-- row.// --> */}
        </div>
         {/* <!-- card-body .// --> */}
        
        </article> 
        {/* <!-- order-group.// -->  */}
    </main>
</div> 
{/* <!-- row.// --> */}
</div>


</section>
{/* <!-- ========================= SECTION CONTENT END// ========================= --> */}

</div>

</section>    

    <Footer />
      
    </>
  )
}

export default EditProfile
