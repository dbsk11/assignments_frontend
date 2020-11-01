import React from 'react';
import './App.css';

import Header from './headers/Header'
import MainPage from './headers/MainPage'

import NavBarStudent from './headers/NavBarStudent'
import NavBarTeacher from './headers/NavBarTeacher'


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
