import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const News = () => {
  const newsData = [
    { id:1, title: 'Article 1', description: 'Description 1', image: 'image-url-1' },
    { id: 2, title: 'Article 2', description: 'Description 2', image: 'image-url-2' },
    { id: 2, title: 'Article 2', description: 'Description 2', image: 'image-url-2' },
    { id: 2, title: 'Article 2', description: 'Description 2', image: 'image-url-2' },
    { id: 2, title: 'Article 2', description: 'Description 2', image: 'image-url-2' },
    { id: 2, title: 'Article 2', description: 'Description 2', image: 'image-url-2' },
    
  ];

  return (
    <>
      <NavBar />

      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>SRC-NEWS</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>src-news</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {newsData.map((article) => (
              <div className="col-md-4 mb-4" key={article.id}>
                <div className="card">
                  <img src={article.image} className="card-img-top" alt={article.title} />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <Link to={`/newsId`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default News;
