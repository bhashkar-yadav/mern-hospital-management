import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title"> {title} </h1>
              <p className="hero-description">
                Providing exceptional healthcare services with compassion,
                expertise, and cutting-edge technology. Your journey to better
                health starts here.
              </p>
              <div className="hero-buttons">
                <a href="/appointment" className="btn btn-lg btn-secondary">
                  Book Appointment
                </a>
                <a href="/services" className="btn btn-lg btn-outline">
                  Our Services
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src={imageUrl}
                alt="Hospital building"
                width={600}
                height={600}
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
