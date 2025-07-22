import React from "react";
import { Users, Clock, Award, Heart } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose MediCare?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <Users className="feature-icon" />
            <h3 className="feature-title">Expert Team</h3>
            <p className="feature-description">
              Highly qualified doctors and medical staff
            </p>
          </div>
          <div className="feature-item">
            <Award className="feature-icon" />
            <h3 className="feature-title">Quality Care</h3>
            <p className="feature-description">
              Award-winning healthcare services
            </p>
          </div>
          <div className="feature-item">
            <Clock className="feature-icon" />
            <h3 className="feature-title">24/7 Support</h3>
            <p className="feature-description">
              Round-the-clock medical assistance
            </p>
          </div>
          <div className="feature-item">
            <Heart className="feature-icon" />
            <h3 className="feature-title">Compassionate</h3>
            <p className="feature-description">
              Patient-centered care with empathy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
