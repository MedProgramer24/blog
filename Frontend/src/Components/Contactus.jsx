import React, { useState } from "react";
import "./style.css";

function Contactus() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    feedback: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Email sent successfully!");
        setFormData({ fullName: "", email: "", feedback: "" }); // Reset form
      } else {
        setMessage("❌ Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("❌ Error sending email. Check console for details.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <div className="aboutDesign">
          <div className="leftline"></div>
          <h1 className="fw-bold fs-1 text-white text-center">Contact Us</h1>
          <div className="rightline"></div>
        </div>
        <div className="container1">
          <div className="resum-contact">
            <div className="phone">
              <img src="Icon - Call.png" alt="" />
              <div className="same-start">
                <h3>Phone :</h3>
                <p>+212-617632799</p>
              </div>
            </div>
            <div className="email">
              <img src="Icon - Envelope.png" alt="" />
              <div className="same-start">
                <h3>Email :</h3>
                <p>mohamedaitlahsen24@gmail.com</p>
              </div>
            </div>
            <div className="location">
              <img src="Icon - Location.png" alt="" />
              <div className="same-start">
                <h3>Location :</h3>
                <p>Mohammedia</p>
              </div>
            </div>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="fullname">
                <label htmlFor="fullName">Full Name :</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="EamilForm">
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="feedback">
                <label htmlFor="feedback">Feedback :</label>
                <textarea
                  name="feedback"
                  id="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <input type="submit" value="Send" className="envoyer" />
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
