import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response team",
      icon: "🚑",
    },
    {
      title: "Cardiology",
      description:
        "Advanced heart care with state-of-the-art cardiac facilities",
      icon: "❤️",
    },
    {
      title: "Orthopedics",
      description:
        "Comprehensive bone and joint care with minimally invasive procedures",
      icon: "🦴",
    },
    {
      title: "Pediatrics",
      description:
        "Specialized healthcare for infants, children, and adolescents",
      icon: "👶",
    },
    {
      title: "Neurology",
      description: "Expert care for neurological conditions and brain health",
      icon: "🧠",
    },
    {
      title: "Oncology",
      description: "Comprehensive cancer care with latest treatment options",
      icon: "🎗️",
    },
  ];

  return (
    <div>
      <section className="services">
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">Our Medical Services</h2>
            <p className="section-description">
              Comprehensive healthcare services delivered by our team of
              experienced medical professionals
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                </div>
                <div className="card-content">
                  <p className="card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
