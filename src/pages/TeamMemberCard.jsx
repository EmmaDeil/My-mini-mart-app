import React from 'react';

const TeamMemberCard = ({ 
  image, 
  name, 
  position, 
  socialLinks = {} 
}) => {
  const { facebook, twitter, instagram, linkedin, youtube } = socialLinks;

  return (
    <div className="team-card">
      <div className="team-card-inner">
        <div className="image-container">
          <img src={image} alt={name} className="team-image" />
          <div className="overlay">
            <div className="overlay-content">
              <h6 className="member-name">{name}</h6>
              <p className="member-position">{position}</p>
              <div className="social-icons">
                {facebook && (
                  <a href={facebook} className="social-icon" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                )}
                {twitter && (
                  <a href={twitter} className="social-icon" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                )}
                {instagram && (
                  <a href={instagram} className="social-icon" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} className="social-icon" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                )}
                {youtube && (
                  <a href={youtube} className="social-icon" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;