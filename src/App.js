import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste des courses</h1>
      </header>
    <div className="input">
      
        <input type="text" placeholder="un achat"/>
      <button>+</button>
    </div>
    <div className="items-list">
      <ul>
        <li>lait</li>
        <li>cereales</li>
        
      </ul>
    </div>

    </div>
  );
}

export default App;
