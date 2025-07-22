import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
// import { services } from "../data/services";

const Services = () => {
  const services = [
    {
      title: "Emergency Care",
      description:
        "24/7 emergency medical services with rapid response team and advanced life support",
      features: [
        "24/7 Availability",
        "Trauma Care",
        "Critical Care",
        "Ambulance Service",
      ],
      image: "/departments/EmergencyCare.jpg",
    },
    {
      title: "Cardiology",
      description:
        "Comprehensive heart care with state-of-the-art cardiac facilities and expert cardiologists",
      features: [
        "Heart Surgery",
        "Cardiac Catheterization",
        "ECG/EKG",
        "Pacemaker Implantation",
      ],
      image: "/departments/Cardiology.jpg",
    },
    {
      title: "Orthopedics",
      description:
        "Complete bone and joint care with minimally invasive procedures and rehabilitation",
      features: [
        "Joint Replacement",
        "Sports Medicine",
        "Fracture Care",
        "Physical Therapy",
      ],
      image: "/departments/Orthopedics.jpg",
    },
    {
      title: "Pediatrics",
      description:
        "Specialized healthcare for infants, children, and adolescents with child-friendly environment",
      features: [
        "Newborn Care",
        "Vaccinations",
        "Growth Monitoring",
        "Pediatric Surgery",
      ],
      image: "/departments/Pediatrics.jpg",
    },
    {
      title: "Neurology",
      description:
        "Expert care for neurological conditions and brain health with advanced diagnostic tools",
      features: [
        "Brain Surgery",
        "Stroke Care",
        "Epilepsy Treatment",
        "Neuroimaging",
      ],
      image: "/departments/Neurology.jpg",
    },
    {
      title: "Oncology",
      description:
        "Comprehensive cancer care with latest treatment options and supportive care",
      features: [
        "Chemotherapy",
        "Radiation Therapy",
        "Surgical Oncology",
        "Palliative Care",
      ],
      image: "/departments/Oncology.jpg",
    },
    {
      title: "Maternity Care",
      description:
        "Complete pregnancy and childbirth care with modern delivery suites",
      features: [
        "Prenatal Care",
        "Labor & Delivery",
        "Postpartum Care",
        "NICU",
      ],
      image: "/departments/MaternityCare.jpg",
    },
    {
      title: "Radiology",
      description:
        "Advanced imaging services with latest technology for accurate diagnosis",
      features: ["MRI", "CT Scan", "X-Ray", "Ultrasound"],
      image: "/departments/Radiology.jpg",
    },
  ];

  return (
    <>
      <div className="services-page">
        {/* Hero */}
        <section className="services-hero">
          <div className="services-container">
            <h1 className="services-hero-title">Our Medical Services</h1>
            <p className="services-hero-subtitle">
              Comprehensive healthcare services delivered by our team of
              experienced medical professionals using state-of-the-art
              technology and compassionate care.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-section">
          <div className="services-container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-image-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <h4 className="service-features-title">Key Features:</h4>
                    <ul className="service-features">
                      {service.features.map((feature, i) => (
                        <p key={i} className="service-feature-badge">
                          {feature}
                        </p>
                      ))}
                    </ul>
                    <a href="/appointment" className="service-cta">
                      Book Consultation
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="services-cta-section">
          <div className="services-container">
            <h2 className="services-cta-title">Need Medical Assistance?</h2>
            <p className="services-cta-subtitle">
              Our medical experts are here to help you 24/7
            </p>
            <div className="services-cta-buttons">
              <a href="/appointment" className="services-cta-primary">
                Book Appointment
              </a>
              <a href="/contact" className="services-cta-outline">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
