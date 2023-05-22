import React from "react";

import "./home.css";
const Home = () => {
  return (
    <>
      <div className="bestSelling">
        <div>
          <h2>Best Selling Plants</h2>
          <p className="subtitle">
            Easiest way to healthy life by buying your favorite plants
          </p>
          <button className="seeMore">See more &rarr;</button>
        </div>
      </div>
      <div className="aboutUs">
        <h2>About Us </h2>
      </div>
      <div className="categories">
        <h2>Categories</h2>
      </div>
    </>
  );
};

export default Home;
