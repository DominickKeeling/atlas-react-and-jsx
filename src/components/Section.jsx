import React from 'react';

export default function Section(prop) {
  return (
    <div class="section">
      <h1>{prop.title}</h1>
      {prop.children}
    </div>
  );
}