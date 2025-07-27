import React from "react";
import "./Contact.css";

const Contact = () => {
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613147688!3d-6.194741395514638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x28b39c6b0c0a4e0!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1625833423948!5m2!1sen!2sid"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;