// NewsItem.js

import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = () => {


  // Dummy data for demonstration
  const article = {
    id: 1,
    title: `Article`,
    description: `Description for Article `,
    content: `Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices. Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices.Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices.Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices.Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices.Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices.Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices.Content for Article . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus quis urna ultricies ultrices.`,
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p className="card-text">{article.description}</p>
          <p className="card-text">{article.content}</p>
          <Link to="/news" className="btn btn-primary">
            Back to News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
