import React from 'react';
import AboutSnipet from 'components/AboutSnipet';

const About = () => {
  return (
    <main className="main">
      <header className="header">
        <h1 className="header--title">About Me</h1>
        <h2 className="header--subtitle">Creator</h2>
      </header>
      <AboutSnipet />
    </main>
  );
};

export default About;
