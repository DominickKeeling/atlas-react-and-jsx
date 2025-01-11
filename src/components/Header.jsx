import React from 'react';
import { Greeting } from './Greeting.jsx';
import { SocialLinks } from './SocialLinks';

export default function Header() {
  return (
    <nav className="navbar">
      <Greeting />
      <SocialLinks />
    </nav>
  )
}