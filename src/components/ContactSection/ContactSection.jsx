import React, { useState } from "react";
import "../../style.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (email API / backend)
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact-section">
      <h1>Connect With Me</h1>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="success-msg">Message sent! I will get back to you soon.</p>}
        </form>

        {/* <div className="contact-info">
          <h2>Other Ways to Connect</h2>
          <p>Email: <a href="mailto:gauraangsthakkar@gmail.com">gauraangsthakkar@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/gauraangst" target="_blank">linkedin.com/in/gauraangst</a></p>
          <p>GitHub: <a href="https://github.com/Gauraangst" target="_blank">github.com/Gauraangst</a></p>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
