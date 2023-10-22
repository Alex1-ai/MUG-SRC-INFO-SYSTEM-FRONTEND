import React from 'react'

const DashboardSideBar = () => {
    const buttonWidth = {
        width:"200px"
    }
  return (
    <>
        <aside class="col-md-3">
    {/* <!--   SIDEBAR   --> */}
    <ul class="list-group">
        <a class="list-group-item active " href="/dashboard"> Dashboard</a>
        
        <a class="list-group-item {% if '/edit_profile/' in request.path%}active {% endif %}" href="{% url 'edit_profile' %}">Edit Profile</a>
        <a class="list-group-item  {% if '/my_orders/' in request.path%}active {% endif %}" href="{% url 'my_orders' %}">Terms & Conditions</a>
        <a class="list-group-item   {% if '/change_password/' in request.path%}active {% endif %}" href="{% url 'change_password' %}" >Change Password </a>
        {/* <!-- <a class="list-group-item" href="#"> My Selling Items </a> */}
        {/* <a class="list-group-item" href="#"> Received orders </a> --> */}
    </ul>
    {/* <br/> */}
    {/* <div class="col-md-6"> */}
    <a class="btn btn-danger btn-block" style={buttonWidth} href="{% url 'logout' %}"> <i class="fa fa-power-off"></i> <span class="text">Log out</span> </a> 
    {/* </div> */}
    {/* <!--   SIDEBAR .//END   --> */}
   
</aside>

      
    </>
  )
}

export default DashboardSideBar
