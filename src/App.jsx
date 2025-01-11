import React from 'react';
import Header from "./components/Header";
import Section from "./components/Section";

export function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        React is a JavaScript library that was created for dynamically building UIs (User Interfaces). React is great for creating reusable components (pieces of the app) such as sections, headers, footers, bottons and so on. It's great for managing changing data and updates the screen automatically when changed. It used a virtual DOM (Document Object Model) which essentially is a tree-like structure that represents all elements (text, images, and buttons) on a webpage allowing JavaScript to update the content and structure dynamically. So basically, React uses the virtual DOM to make updates without reloading the whole page. In short, React is a great way to build modern, interactive websites more easily and quickly. 
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Component based architecture</li>
          <li>Easy to debug and manage apps</li>
          <li>Managing changing data</li>
          <li>Virtual DOM</li>
          <li>Works great with other JavaScript libraries</li>
          <li>Extensive documentation</li>
        </ul>
      </Section>
    </div>
  );
}