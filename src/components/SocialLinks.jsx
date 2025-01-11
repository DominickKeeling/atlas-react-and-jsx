import React from 'react';
import GithubLink from '../assets/github.svg';
import LinkedInLink from '../assets/linkedin.svg';

export function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/domckeeling">
        <img src={LinkedInLink} alt="linkedIn" />
      </a>
      <a href="https://github.com/DominickKeeling">
        <img src={GithubLink} alt="github" />
      </a>
    </div>
  );
}