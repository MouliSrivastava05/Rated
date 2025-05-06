import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To help users make better buying decisions through authentic reviews and easy-to-use product ratings.</p>
        </div>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>To be the most trusted platform for reviewing and discovering quality products online.</p>
        </section>
    
      </div>
    </>
  );
};

export default About;