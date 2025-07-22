import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

//
import { Heart, Phone, MapPin, Mail } from "lucide-react";

//

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <Heart className="footer-logo-icon" />
                <span className="footer-logo-text">MediCare</span>
              </div>
              <p className="footer-description">
                Providing exceptional healthcare services with compassion and
                expertise.
              </p>
            </div>
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-list">
                <li>
                  <Link
                    className="footer-link"
                    to={"/services"}
                    onClick={() => setShow(!show)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    to={"/doctors"}
                    onClick={() => setShow(!show)}
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    to={"/appointment"}
                    onClick={() => setShow(!show)}
                  >
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    to={"/about"}
                    onClick={() => setShow(!show)}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Services</h3>
              <ul className="footer-list">
                <li>
                  <span className="footer-contact-text">Emergency Care</span>
                </li>
                <li>
                  <span className="footer-contact-text">Cardiology</span>
                </li>
                <li>
                  <span className="footer-contact-text">Orthopedics</span>
                </li>
                <li>
                  <span className="footer-contact-text">Pediatrics</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Contact Info</h3>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <span className="footer-contact-text">
                    +91 (555) 123-4567
                  </span>
                </div>
                <div className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <span className="footer-contact-text">
                    medicare@medicare.com
                  </span>
                </div>
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span className="footer-contact-text">
                    123 Health St, Medical City
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2025 MediCare Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
