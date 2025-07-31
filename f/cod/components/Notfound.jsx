import React from "react";
import "../Style/Notfound.css"; // Make sure to create and import this CSS file

const Notfound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="home-link">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Notfound;
