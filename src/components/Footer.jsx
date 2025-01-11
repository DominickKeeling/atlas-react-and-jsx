import React from 'react';
import Links from '../assets/links.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {Links.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© {currentYear} Atlas School</p>
    </footer>
  );
}