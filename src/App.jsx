import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    currentYear: "",
    branch: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Send registration info to admin
    emailjs
      .sendForm(
        "service_pm3jtvb",        // Replace with your EmailJS service ID
        "template_io0091l",     // Admin template name
        formRef.current,
        "cmJJinMNWxuoD8rBe"         // Replace with your EmailJS public key
      )
      .then(
        (result) => console.log("Admin email sent:", result.text),
        (error) => console.error("Admin email error:", error.text)
      );

    // ✅ Send thank-you email to user
    emailjs
      .send(
        "service_pm3jtvb",        // Same service ID
        "template_543sh5c",          // User template name
        {
          fullName: formData.fullName,
          email: formData.email,
        },
        "cmJJinMNWxuoD8rBe"         // Same public key
      )
      .then(
        (result) => console.log("User email sent:", result.text),
        (error) => console.error("User email error:", error.text)
      );

    setIsRegistered(true);
  };

  return (
    <div>
      <video autoPlay muted loop playsInline id="bg-video">
        <source src="/vid121.mp4" type="video/mp4" />
      </video>

      <div className="container-wrapper">
        <div className="form-container">
          <div className="banner">
            <img src="/finalogo.png" alt="Event Banner" className="event-banner" />
          </div>
          {/* ✅ Event Info Section */}
<div className="event-info">
  <h2>🚀 Decoding Dilemmas: Find clarity in the chaos</h2>
  <p>
    Listen to alumni tell real-life stories behind significant decisions:<br />
    📖 Grades vs Skills | 💼 Corporate vs Startup | 💻 Coding vs Non-Coding Roles and more.
  </p>
  <p>
    🎯 Gain clarity for your own path from the best industry experts.
  </p>
  <p>
    📅 <strong>Date:</strong> 5th September, 2025<br />
    🕰 <strong>Time:</strong> 11:00am - 12:30pm<br />
    📍 <strong>Venue:</strong> Online (Zoom)
  </p>
</div>  

          {isRegistered ? (
            <div className="success-page">
              <h2>You have successfully registered!</h2>
              <p>Thank you for registering. See you at the event! 🎉</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input-grid">
                <div className="input-group">
                  <label htmlFor="full-name">Full Name *</label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="contact-no">Contact Number *</label>
                  <input
                    type="tel"
                    id="contact-no"
                    name="contactNumber"
                    placeholder="+91 98765 43210"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group-row">
                  <div className="input-group">
                    <label htmlFor="year">Current Year *</label>
                    <select
                      id="year"
                      name="currentYear"
                      value={formData.currentYear}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select year</option>
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Fourth Year">Fourth Year</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="branch">Branch *</label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select branch</option>
                      <option value="COMPS">COMPS</option>
                      <option value="CSBS">CSBS</option>
                      <option value="AIDS">AIDS</option>
                      <option value="IT">IT</option>
                      <option value="EXCP">EXCP</option>
                      <option value="CCE">CCE</option>
                      <option value="EXTC">EXTC</option>
                      <option value="VLSI">VLSI</option>
                      <option value="MECH">MECH</option>
                      <option value="RAI">RAI</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit">Register for the Event</button>
            </form>
          )}

          <div className="contact-section">
            <p>If you have any doubts, please contact:</p>

            <div className="contact-persons">
              <div>
                <strong>Sanjeevani</strong>
                <br />
                <a href="tel:+917977249924">+91 79 7724 9924</a>
              </div>
              <div>
                <strong>Janice</strong>
                <br />
                <a href="tel:+919820532319">+91 98205 32319</a>
              </div>
            </div>

            <div className="connect">
              <p>Connect With Us</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/alumnicell_kjsce/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/alumnicellkjsce/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:alumni.engg@somaiya.edu">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
