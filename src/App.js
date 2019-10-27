import React from 'react';
import './App.css';
import './Components/Header/Header';
import Header from './Components/Header/Header';
import List from './Components/List/List';

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
    </div>
  );
}

export default App;
