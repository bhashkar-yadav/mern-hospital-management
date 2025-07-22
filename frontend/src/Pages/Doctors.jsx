import React from "react";
import { Heart, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      education: "MD, Harvard Medical School",
      rating: 4.9,
      reviews: 127,
      image: "/Doctors/Sarah-Johnson.png",
      specialties: ["Heart Surgery", "Cardiac Catheterization", "Cardiology"],
      availability: "Mon-Fri: 9AM-5PM",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Orthopedic Surgeon",
      experience: "12 years",
      education: "MD, Johns Hopkins University",
      rating: 4.8,
      reviews: 98,
      image: "/Doctors/Michael-Chen.png",
      specialties: ["Joint Replacement", "Sports Medicine", "Trauma Surgery"],
      availability: "Mon-Wed, Fri: 8AM-4PM",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10 years",
      education: "MD, Stanford Medical School",
      rating: 4.9,
      reviews: 156,
      image: "/Doctors/Emily-Rodriguez.png",
      specialties: ["Newborn Care", "Child Development", "Vaccinations"],
      availability: "Mon-Fri: 8AM-6PM",
    },
    {
      name: "Dr. David Thompson",
      specialty: "Neurologist",
      experience: "18 years",
      education: "MD, Mayo Clinic",
      rating: 4.7,
      reviews: 89,
      image: "/Doctors/David-Thompson.png",
      specialties: ["Stroke Care", "Epilepsy", "Movement Disorders"],
      availability: "Tue-Thu: 9AM-5PM",
    },
    {
      name: "Dr. Lisa Wang",
      specialty: "Oncologist",
      experience: "14 years",
      education: "MD, Memorial Sloan Kettering",
      rating: 4.8,
      reviews: 112,
      image: "/Doctors/Lisa-Wang.png",
      specialties: ["Breast Cancer", "Chemotherapy", "Clinical Trials"],
      availability: "Mon-Fri: 9AM-4PM",
    },
    {
      name: "Dr. Robert Martinez",
      specialty: "Emergency Medicine",
      experience: "8 years",
      education: "MD, UCLA Medical School",
      rating: 4.6,
      reviews: 74,
      image: "/Doctors/Robert-Martinez.png",
      specialties: ["Trauma Care", "Critical Care", "Emergency Surgery"],
      availability: "24/7 Emergency Coverage",
    },
  ];

  return (
    <>
      <div className="doctors-page">
        <section className="hero">
          <h1>Meet Our Expert Doctors</h1>
          <p>
            Our team of highly qualified and experienced medical professionals
            is dedicated to providing you with the best possible healthcare.
          </p>
        </section>

        <section className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-header">
                <div className="doctor-image">
                  <img src={doctor.image} alt={doctor.name} className="img" />
                </div>
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <div className="rating">
                  <Star className="star" />
                  <span>{doctor.rating}</span>
                  <span>({doctor.reviews} reviews)</span>
                </div>
              </div>
              <div className="doctor-info">
                <p>
                  <strong>Experience:</strong> {doctor.experience}
                </p>
                <p>
                  <strong>Education:</strong> {doctor.education}
                </p>
                <div className="specialties">
                  <h4>Specialties:</h4>
                  <div className="badges">
                    {doctor.specialties.map((item, idx) => (
                      <span key={idx} className="badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="availability">
                  <Calendar className="calendar" />
                  <span>{doctor.availability}</span>
                </div>
                <a href="/appointment" className="book-btn full">
                  Book Appointment
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="cta">
          <h2>Ready to Meet Our Doctors?</h2>
          <p>Schedule a consultation with our expert medical team today</p>
          <a href="/appointment" className="book-btn large">
            Book Your Appointment
          </a>
        </section>
      </div>
    </>
  );
};

export default Doctors;
