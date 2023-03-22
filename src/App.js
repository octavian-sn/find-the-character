import React, { useState, useEffect } from 'react';
import GameImage from './components/GameImage';
import Header from './components/Header';
import PopUp from './components/PopUp';

function App() {
  const [showPupUp, setShowPopUp] = useState(true);
  const [characters, setCharacters] = useState([
    {
      name: 'Rias Gremory',
      found: false,
    },
    {
      name: 'Lelouch Vi Britannia',
      found: false,
    },
    {
      name: 'Ulquiorra Cifer',
      found: false,
    },
  ]);

  const openPopUp = () => setShowPopUp(true);
  const closePopUp = () => setShowPopUp(true);

  return (
    <div id="app">
      <Header />
      <GameImage openPopUp={openPopUp} />
      {showPupUp && <PopUp characters={characters} />}
    </div>
  );
}

export default App;
