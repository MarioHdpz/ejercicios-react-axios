import React from 'react';
import './App.css';
import './stars.sass';
import Characters from './components/Characters';

function App() {
  return (
    <div>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div>
        <Characters />
      </div>
    </div>
  );
}

export default App;
