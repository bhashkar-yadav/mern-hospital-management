import React from "react";

import { Heart, Users, Award, Target, Eye, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and dignity, ensuring their comfort and well-being.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in medical care, continuously improving our services and outcomes.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Our collaborative approach brings together diverse expertise to provide comprehensive patient care.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and medical advances to deliver the best possible treatments.",
    },
  ];

  const leadership = [
    {
      name: "Dr. James Wilson",
      position: "Chief Executive Officer",
      education: "MD, MBA - Harvard Business School",
      experience: "25+ years in healthcare leadership",
      image: "/Doctors/James-Wilson.png",
    },
    {
      name: "Dr. Maria Garcia",
      position: "Chief Medical Officer",
      education: "MD - Johns Hopkins University",
      experience: "20+ years in clinical practice",
      image: "/Doctors/Maria-Garcia.png",
    },
    {
      name: "Dr. Jennifer Adams",
      position: "Chief Nursing Officer",
      education: "MSN, RN - University of Pennsylvania",
      experience: "18+ years in nursing leadership",
      image: "/Doctors/Jennifer-Adams.png",
    },
  ];

  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="about-container hero-center">
            <h1 className="hero-title">About MediCare Hospital</h1>
            <p className="hero-subtitle">
              For over 25 years, we have been committed to providing exceptional
              healthcare services with compassion, expertise, and cutting-edge
              technology.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section">
          <div className="about-container">
            <div className="mission-grid">
              <div>
                <img
                  src="/Vision.jpeg"
                  alt="Hospital interior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="mission-text-block">
                <div>
                  <div className="section-icon-title">
                    <Target className="about-logo-icon" />
                    <h2>Our Mission</h2>
                  </div>
                  <p className="section-description">
                    To provide exceptional, compassionate healthcare services
                    that improve the health and well-being of our community. We
                    are committed to delivering patient-centered care with the
                    highest standards of safety, quality, and service
                    excellence.
                  </p>
                </div>
                <div>
                  <div className="section-icon-title">
                    <Eye className="about-logo-icon" />
                    <h2>Our Vision</h2>
                  </div>
                  <p className="section-description">
                    To be the leading healthcare provider in our region,
                    recognized for clinical excellence, innovation, and
                    compassionate care. We envision a healthier community where
                    every individual has access to world-class medical services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="core-values">
          <div className="about-container">
            <h2>Our Core Values</h2>
            <p>
              These fundamental principles guide everything we do and shape our
              commitment to excellence in healthcare.
            </p>
            <div className="values-grid">
              {values.map((value, index) => (
                <div className="card" key={index}>
                  <div className="card-icon">
                    {<value.icon className="card-icon" />}
                  </div>
                  <div className="card-title">{value.title}</div>
                  <div className="card-description">{value.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="impact-section">
          <div className="about-container">
            <h2>Our Impact</h2>
            <p>Making a difference in our community every day</p>
            <div className="impact-grid">
              <div className="stat-box">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years of Service</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">150+</div>
                <div className="stat-label">Medical Professionals</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Patients Served Annually</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">98%</div>
                <div className="stat-label">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="leadership-section">
          <div className="about-container">
            <h2>Our Leadership Team</h2>
            <p>
              Meet the experienced leaders who guide our mission to provide
              exceptional healthcare.
            </p>
            <div className="leadership-grid">
              {leadership.map((leader, index) => (
                <div className="card" key={index}>
                  <div className="leader-image">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      width={128}
                      height={128}
                      className="leader-image"
                    />
                  </div>
                  <div className="leader-name">{leader.name}</div>
                  <div className="leader-position">{leader.position}</div>
                  <div className="leader-details">
                    <p>
                      <strong>Education:</strong> {leader.education}
                    </p>
                    <p>
                      <strong>Experience:</strong> {leader.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="about-container">
            <h2>Ready to Experience Our Care?</h2>
            <p>
              Join thousands of patients who trust us with their healthcare
              needs
            </p>
            <a href="/appointment" className="cta-btn">
              Schedule Your Visit
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
