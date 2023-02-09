import React, { useState } from "react";
import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import HomeImage from "../assets/home_image.svg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__description">
        <h1 className="home__header">No.1 Australian Streaming Platform</h1>
        <h2 className="home__sub-header">
          Browse Thousands of movies at the click of a{" "}
          <span className="ausflix">button</span>
        </h2>
      </div>
      <SearchBar />
      <figure className="home__image--container">
        <img className="home__image" src={HomeImage} alt="" />
      </figure>
    </div>
  );
};

export default Home;
