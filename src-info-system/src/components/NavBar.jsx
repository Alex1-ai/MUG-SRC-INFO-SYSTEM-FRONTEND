import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const logoLinkStyle = {
        fontSize: '30px',  // Adjust the font size as needed
        // Make the text bold
      };
const navLinkStyle = {
        textDecoration: 'none', // Remove the underline

    }
    const largeIcon =  {
        fontSize: "2.2rem",/* Adjust the size as needed */
    }

  return (
    <>
     <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Link to="/" style={logoLinkStyle} className="navbar-brand"><i style={largeIcon} class="fas fa-graduation-cap"></i> MUG-SRC</Link> {/* Use Link for the brand */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link style={navLinkStyle}to="/">Home</Link> {/* Use Link for the Nav links */}
            <Link style={navLinkStyle} to="/news">News</Link>
            <Link style={navLinkStyle} to="/about">About</Link>
            <Link style={navLinkStyle} to="/dashboard">Dashboard</Link>
            <Link style={navLinkStyle} to="/login">Login</Link>
            <Link style={navLinkStyle} to="/logout">Logout</Link>
            <Link style={navLinkStyle} to="/contact">Contact</Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link to="/">{/* Static link */}
              Welcome Jude
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between"> */}

{/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My React Bootstrap App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> {/* Align items to the left */}
            {/*  <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action-1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action-2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action-3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action-4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* </div>
      </header> */}
   

    {/* <!-- ======= Header ======= --> */}
  {/* <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between">

      <div className="logo"> */}
        {/* <!-- Uncomment below if you prefer to use an text logo --> */}
        {/* <h1><a href="index.html">MUG-SRC</a></h1>  */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
      {/* </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
        

      </nav> */}
      {/* <!-- .navbar --> */}

    {/* </div>
  </header> */}
  {/* <!-- #header --> */}
      
    </>
  )
}

export default NavBar
