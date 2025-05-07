import React, { useEffect, useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [mapUrl, setMapUrl] = useState("");

  
  return (
    <>
      <div className="contact-container">
        <section className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>

        <section className="map">
          <h2>Our Store Location</h2>
          <div className="map-embed">
            <iframe
              title="Google Maps"
              width="100%"
              height="300"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?q=New+Delhi&key=AIzaSyAhYE4g0Hxn1V_UjbK_KvB0UcFqfDeZPN8"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;