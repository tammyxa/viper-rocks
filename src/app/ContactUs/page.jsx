import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p>
          If you have any questions or would like to get in touch with us, feel free to contact us using the information below:
        </p>
        <div className="contact-details">
          <p>Email: info@viperrocks.org</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Space Avenue, Rocket City</p>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Contact Form</h2>
        <p>
          Alternatively, you can use the form below to send us a message:
        </p>
        {/* Add your contact form component here */}
        <form>
          {/* Include form fields like name, email, message, etc. */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Add more sections or components as needed */}
    </div>
  );
};

export default ContactPage;
