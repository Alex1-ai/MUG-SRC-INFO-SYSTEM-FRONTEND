import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Vote = () => {
  return (
    <>
     <NavBar />
     <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>VOTE</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Vote</li>
          </ol>
        </div>

      </div>
    </section>



     <Footer/>
      
    </>
  )
}

export default Vote
