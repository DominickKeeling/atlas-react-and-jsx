import React from 'react';
import day from '../assets/day.svg';
import night from "../assets/night.svg";
import evening from "../assets/evening.svg";

export function Greeting() {
  const currentTime = new Date().getHours();
  let greeting;
  let image;

  switch (true) {
    case currentTime >= 6 && currentTime > 12:
      greeting = 'Good Morning!';
      image = day;
      break;
    case currentTime >= 12 && currentTime < 17:
      greeting = 'Good Afternoon!';
      image = day;
      break;
    case currentTime >= 17 && currentTime < 21:
      greeting = 'Good Evening!';
      image = evening;
      break;
    default:
      greeting = 'Good Night!';
      image = night;
      break;
  }
  return (
    <div>
      <h1 className="greeting">
        <img src={image} alt={greeting} />
        {greeting}
      </h1>
    </div>
  );
}
