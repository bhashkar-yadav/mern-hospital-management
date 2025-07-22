import React from "react";
import { useState } from "react";
import { Heart, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <>
      <div className="contact-page">
        {/* Hero */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We're here to help you with any questions or concerns. Get in touch
            with our friendly team.
          </p>
        </section>

        {/* Contact Info */}
        <section className="contact-info-section">
          <div className="contact-info-card">
            <Phone className="icon" />
            <h3>Phone</h3>
            <p>Main Line </p>
            <p>+91 (555) 123-4567</p>
            <p>Emergency </p>
            <p className="highlight">911</p>
          </div>
          <div className="contact-info-card">
            <Mail className="icon" />
            <h3>Email</h3>
            <p>General Inquiries</p>
            <p>medicare@medicare.com</p>
            <p>Appointments</p>
            <p>appointments@medicare.com</p>
          </div>
          <div className="contact-info-card">
            <MapPin className="icon" />
            <h3>Address</h3>
            <p>123 Health Street </p>
            <p>Medical City, MC 12345</p>
            <p>Delhi</p>
          </div>
          <div className="contact-info-card">
            <Clock className="icon" />
            <h3>Hours</h3>
            <p>Monday - Friday</p>
            <p>8:00 AM - 6:00 PM</p>
            <p>Saturday</p>
            <p>9:00 AM - 4:00 PM</p>
            <p>Emergency: 24/7</p>
          </div>
        </section>

        {/* Form & Map */}
        <section className="contact-form-section">
          <div className="contact-form">
            <h2>
              <MessageSquare className="icon" /> Send us a Message
            </h2>
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form onSubmit={handleSubmit}>
              <label>Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />

              <div className="row">
                <div className="half">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="half">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <label>Subject *</label>
              <select
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="appointment">Appointment Question</option>
                <option value="billing">Billing Question</option>
                <option value="medical">Medical Records</option>
                <option value="feedback">Feedback/Complaint</option>
                <option value="other">Other</option>
              </select>

              <label>Message *</label>
              <textarea
                rows="6"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-map">
            <h3 className="contact-map-Find">Find Us</h3>
            <p className="contact-map-Location">
              Located in the heart of Medical City with easy access and parking
              available.
            </p>
            <div className="map-placeholder">
              <MapPin className="icon" />
              <p>Interactive Map</p>
              <p className="text-sm">123 Health Street, Medical City</p>
            </div>
            <div className="directions">
              <h4>Parking Information</h4>
              <p>
                Free parking in the main garage. Valet at the main entrance
                available.
              </p>

              <h4>Public Transportation</h4>
              <p>
                Accessible via Metro Bus Routes 15, 22, 45. 5-min walk from
                Medical Center Metro Station.
              </p>

              <button className="outline-btn">Get Directions</button>
            </div>
          </div>
        </section>

        {/* Emergency */}
        <section className="contact-emergency">
          <h2>Medical Emergency?</h2>
          <p>
            If you're experiencing a medical emergency, do not use this contact
            form. Call 911 or visit our Emergency Department.
          </p>
          <div className="emergency-buttons">
            <button className="danger">Call 911</button>
            <button className="outline-red">Emergency Department Info</button>
          </div>
        </section>

        {/* FAQ */}
        <section className="contact-faq">
          <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <p className="faq-container-Quick">
              Quick answers to common questions
            </p>

            <div className="faq-grid">
              <div className="faq-card">
                <h3>How do I schedule an appointment?</h3>
                <p>
                  You can schedule an appointment by calling us at +1 (555)
                  123-4567, using our online booking system, or visiting us in
                  person during business hours.
                </p>
              </div>
              <div className="faq-card">
                <h3>What insurance do you accept?</h3>
                <p>
                  We accept most major insurance plans. Please call our billing
                  department to verify your specific coverage before your
                  appointment.
                </p>
              </div>
              <div className="faq-card">
                <h3>Do you offer emergency services?</h3>
                <p>
                  Yes, our Emergency Department is open 24/7 with
                  board-certified emergency physicians and state-of-the-art
                  equipment to handle all types of medical emergencies.
                </p>
              </div>
              <div className="faq-card">
                <h3>How can I access my medical records?</h3>
                <p>
                  You can request your medical records through our patient
                  portal, by calling our medical records department, or by
                  visiting in person with proper identification.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
