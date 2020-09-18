import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from 'components/Nav';
import Home from 'pages/Home';
import About from 'pages/About';

import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="scroller">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
