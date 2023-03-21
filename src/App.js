import React, { useState, useEffect } from 'react';
import GameImage from './components/GameImage';
import Header from './components/Header';

function App() {
  return (
    <div id="app">
      <Header />
      <GameImage />
    </div>
  );
}

export default App;
