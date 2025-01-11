import React from 'react';
import Copy from '../assets/copy.svg';

export default function CopyLink(prop) {
  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(prop.link);
  };

  return (
    <a href={prop.link} onClick={handleClick}>
      <img className="copy" src={Copy} alt="Copy Link" />
    </a>
  );
}