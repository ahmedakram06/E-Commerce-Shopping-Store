import React, { useState, useEffect } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="hero">
      <div className="frontBox container">
        <div className="frontText">
          <h1>Fashion Finds Await </h1>
          <h1> Step Inside Our Store!</h1> {/* Main Headline */}
          <p>
            Discover your new favorite styles. Explore our wide collection of
            clothing and accessories for men, women, and children.
          </p>{" "}
          {/* Descriptive paragraph */}
          <div className="inputBox">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for your perfect outfit..."
            />{" "}
            {/* Updated placeholder text */}
            <div className="search" id="search-bar-color">
              {/* <FontAwesomeIcon icon={faSearch} size="2x" /> Added search icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
