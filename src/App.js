import React from 'react';
import logo from './logo.svg';
import './App.css';
import Media from './components/media'
import Sum from './components/sum'
import Sort from './components/sort'
import Interval from './components/interval'

function App() {

  return (
    <div className="App">
      <h1>Hooks Example</h1>

      <div className='line'>
        <Interval></Interval>
      </div>

      <div className='line'>
        <Media></Media>
        <Sum></Sum>
        <Sort></Sort>
      </div>
    </div>
  );
}

export default App;
