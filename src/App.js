import React from 'react';
import './App.css';
import './stars.sass';
import Characters from './components/Characters';
import { Provider } from 'react-redux';
import { createStore, /*applyMiddleware*/ } from 'redux';
import { characters } from './store/reducer';

const store = createStore(characters);

function App() {
  return (
    <div>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Provider store={store}>
        <Characters />
      </Provider>
    </div>
  );
}

export default App;
