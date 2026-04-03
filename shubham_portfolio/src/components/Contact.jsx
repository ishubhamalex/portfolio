import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card glass-card">
        <p><strong>Email:</strong> shubhamalex1602@gmail.com</p>
        <p><strong>Phone:</strong> 9648535303</p>

        <div className="contact-buttons">
          <a href="mailto:shubhamalex1602@gmail.com" className="contact-btn">
            Email
          </a>

          <a href="tel:9648535303" className="contact-btn">
            Call
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-gupta-b95a96296"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ishubhamalex"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;