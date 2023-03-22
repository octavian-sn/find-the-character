import React, { useState, useEffect } from 'react';
import GameImage from './components/GameImage';
import Header from './components/Header';
import PopUp from './components/PopUp';
import positionChecker from './hooks/positionChecker';

function App() {
  const [showPupUp, setShowPopUp] = useState(false);
  const [clickData, setClickData] = useState('');
  const { checkPosition } = positionChecker();
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

  const togglePopUp = () => setShowPopUp((prevState) => !prevState);
  const updateClickData = ({ pageX, pageY }) => {
    setClickData({
      pageX,
      pageY,
    });
    console.log(clickData);
  };

  return (
    <div id="app">
      <Header />
      <GameImage togglePopUp={togglePopUp} updateClickData={updateClickData} />
      {showPupUp && <PopUp characters={characters} clickData={clickData} />}
    </div>
  );
}

export default App;
