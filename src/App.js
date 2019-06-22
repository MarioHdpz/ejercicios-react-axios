import React from 'react';
import './App.css';
import './stars.sass';
import Characters from './components/Characters';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <BrowserRouter>
        <Route exact path="/:page" component={Characters} />
        <Route exact path="/" component={Characters} />
      </BrowserRouter>
    </div>
  );
}

export default App;
