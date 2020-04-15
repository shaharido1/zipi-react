import React from 'react';
import './App.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Main } from './components/Main/Main';

function App() {
  return (
      <div className="App">
        <Toolbar/>
        <Main/>
      </div>
  );
}

export default App;
