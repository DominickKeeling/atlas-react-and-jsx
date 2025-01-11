import React from 'react';
import Open from '../assets/open.svg';

export default function OpenLink(prop) {
  return (
    <a href={prop.link} target="_blank">
      <img src={Open} />
    </a>
  );
}