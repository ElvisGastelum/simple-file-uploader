import React from 'react';

import HomeSnipet from 'components/HomeSnipet';

import './Home.css';

const Home = () => {

  return (
    <main className="main">
      <header className="header">
        <h1 className="header--title">Home Page</h1>
        <h2 className="header--subtitle">Template react project</h2>
      </header>
      <HomeSnipet />
    </main>
  );
};

export default Home;
