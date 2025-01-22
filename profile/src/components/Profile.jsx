import React, { useEffect, useState } from "react";
import LinkedLogo from "../assets/linked.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Profile({ profile }) {
  const [prof, setProf] = useState(profile);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="profile-card" data-aos="fade-up">
      <div className="profile-header">
        <a href={prof.link}>
          <img src={prof.image} alt="Profile Picture" className="profile-pic" />
        </a>
        <h1 className="name">{prof.name}</h1>
        <p className="current-role">{prof.role}</p>
      </div>
      <div className="profile-details">
        <div className="email-logo__wrapper">
          <div className="email">
            <strong>Email:</strong> {prof.email}{" "}
          </div>

          <span>
            <a href={prof.link} target="_">
              <img className="img__linked" src={LinkedLogo} alt="" />
            </a>
          </span>
        </div>
        <p>
          <strong>Phone:</strong> {prof.phone}
        </p>
        <p>
          <strong>Location:</strong> {prof.location}
        </p>
        <p>
          <strong>Graduate School:</strong>
        </p>
        <ul className="education-history">
          {prof.education.map((school, index) => (
            <li key={index}>{school}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
