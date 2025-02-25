import React from "react";
import "./privacy.css"; // Import the CSS file
import Footer from "./Footer";

export default function Privacy() {
  return (
    <>
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p className="text-muted text-center">Last updated: February 2025</p>

      <div className="content">
        <h3>1. Introduction</h3>
        <p>
          Welcome to <strong>The Code Journal</strong>. Your privacy is important to us. This Privacy Policy
          outlines how we collect, use, and protect your personal data.
        </p>

        <h3>2. Information We Collect</h3>
        <p>
          We collect personal data such as your name, email, and browsing activity when you
          interact with our blog.
        </p>

        <h3>3. How We Use Your Information</h3>
        <p>We use your data to improve our services, send updates, and respond to inquiries.</p>

        <h3>4. Data Protection</h3>
        <p>Your data is securely stored and never shared with third parties without your consent.</p>

        <h3>5. Cookies</h3>
        <p>
          We use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
        </p>

        <h3>6. Contact Us</h3>
        <p>
          If you have any questions about this policy, please contact us at:
          <strong> mohamedaitlahsen24@gmail.com</strong>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
