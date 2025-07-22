import React from "react";

const TakeCare = () => {
  return (
    <div>
      <section className="cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Take Care of Your Health?</h2>
          <p className="cta-description">
            Book an appointment today and experience world-class healthcare
          </p>
          <a href="/appointment" className="btn btn-lg btn-secondary">
            Schedule Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default TakeCare;
