import React from 'react';

export default function Section(prop) {
  return (
    <div className="section">
      <h1>{prop.title}</h1>
      {prop.children}
    </div>
  );
}