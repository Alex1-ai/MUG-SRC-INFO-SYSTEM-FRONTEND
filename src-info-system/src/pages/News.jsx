import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div>
        <NavBar />
        {/* <h1>SRC NEWS</h1> */}
         {/* <!-- ======= Breadcrumbs Section ======= --> */}
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>SRC-NEWS</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>src-news</li>
          </ol>
        </div>

      </div>
    </section>
    {/* <!-- End Breadcrumbs Section --> */}

    <section class="inner-page pt-4">
      <div class="container">
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
        <p>
          Example inner page template
        </p>
      </div>
    </section>
        <Footer />
      
    </div>
  )
}

export default News
