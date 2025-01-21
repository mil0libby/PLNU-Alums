import React, { useEffect, useState } from "react";
import profiles from "../data.json";
import LinkedLogo from "../assets/linked.png";

export default function Profile({ index }) {
  const [profile, setProfile] = useState(profiles[index]);

  useEffect(() => {
    console.log(profiles);
  }, []);
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={profile.image}
          alt="Profile Picture"
          className="profile-pic"
        />
        <h1 className="name">{profile.name}</h1>
        <p className="current-role">{profile.role}</p>
      </div>
      <div className="profile-details">
        <div className="email-logo__wrapper">
          <div className="email">
            <strong>Email:</strong> {profile.email}{" "}
          </div>

          <span>
            <a href={profile.link} target="_">
              <img className="img__linked" src={LinkedLogo} alt="" />
            </a>
          </span>
        </div>
        <p>
          <strong>Phone:</strong> {profile.phone}
        </p>
        <p>
          <strong>Location:</strong> {profile.location}
        </p>
        <p>
          <strong>Graduate School:</strong>
        </p>
        <ul className="education-history">
          {profile.education.map((school, index) => (
            <li key={index}>{school}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
