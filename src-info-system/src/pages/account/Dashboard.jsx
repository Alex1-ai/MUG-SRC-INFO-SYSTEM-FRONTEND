import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import DashboardSideBar from '../../components/DashboardSideBar'

const Dashboard = () => {

  const imgDecor =  {
    // fontSize: "5rem",/* Adjust the size as needed */
     width:"50px",
     height:"50px" ,
     borderRadius:"50%"
}
  return (
    <div>
      <NavBar />
      <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>PROFILE</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>profile</li>
          </ol>
        </div>

      </div>
    </section>
    {/* <!-- End Breadcrumbs Section --> */}

    <section class="inner-page pt-4">
      <div class="container">

      <section class="h-100 h-custom" style={{backgroundColor: "#eeecf8"}}>

<div class="container py-5 h-100">

{/* <!-- ========================= SECTION CONTENT ========================= --> */}
<section class="section-conten padding-y bg">

<div class="container">
    <div class="row">
   {/* {% include 'dashboard_sidebar.html' %} */}
    <DashboardSideBar />
    <main class="col-md-9 pt-4">
        <article class="card">
        <header class="card-header">
            <strong class="d-inline-block mr-3">Logged in as: </strong>
            <span> Onedibe Emmanuel</span>
        </header>
        <div class="card-body">
            <div class="row"> 
                <div class="col-md-6">
                    <div class="card"  style={{textAlign: "center"}}>
                        <div class="card-body">
                            <h5 class="card-title">
                                Current Level
                            </h5>
                            <h4>400</h4>
                            <a href="{% url 'my_orders' %}"> Edit Profile</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card" style={{textAlign: "center"}}>
                        <div class="card-body">
                            {/* {% if not userprofile %}
                                 <img class="mt-0"  src="{% static 'images/avatar2.png' %}" alt="avatar image" width="50px" height="50px" style="border-radius:50%; ">
                             {% else %} */}
                            <img class="mt-0"  src="assets/img/avatar1.jpg"  alt='img' style={imgDecor}/>

                             {/* {% endif %} */}
                           
                                 <p class="mb-0">alexanderemmanuel@gmail.com</p>
                           <p class="mb-0">+233 50 496 7983</p>
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

</section>      </div>
    </section>

      <Footer />
    </div>
  )
}

export default Dashboard
