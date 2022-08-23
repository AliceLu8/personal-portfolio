import React from "react";

// Import React icons
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <div className="connect">
            <h4>Ready to Connect...</h4>
          </div>
          <p>
            Like what I created!! Have a question or want to work together.
            Connect with me and let's have a quick chat!!
          </p>
        </div>

        <div className="header-socials">
          <a href="https://www.linkedin.com/in/aliceludesign/">
            <FiLinkedin size={40} />
          </a>
          <a href="https://github.com/AliceLu8">
            <FiGithub size={40} />
          </a>
        </div>

        <div className="email-container">
          <p>Or you can reach me by email: </p>
          <div className="email">
            <a href="mailto:alicelu.webdesign@gmail.com" className="cta">
              <span>Click me</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
