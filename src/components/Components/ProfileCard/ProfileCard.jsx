import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./ProfileCard.css";

const ProfileCard = ({
  avatarUrl,
  name,
  title,
  id,
  contactText,
  onContactClick,
  linkedinUrl,
  instagramUrl,
}) => (
  <div className="profile-card style={{backgroundColor:'#181828'}}">
    <div className="profile-photo-top">
      <img src={avatarUrl} alt={name} />
    </div>
    <div className="profile-header">
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{id}</p>
    </div>
    <div className="profile-socials">
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      )}
     
      <button className="contact-btn" onClick={onContactClick} aria-label="Contact by Email">
        <FaEnvelope />
      </button>
    </div>
    <div className="profile-footer"></div>
  </div>
);

export default ProfileCard;