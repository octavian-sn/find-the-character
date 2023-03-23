import React, { useState } from 'react';
import GameImage from './components/GameImage';
import Header from './components/Header';
import PopUp from './components/PopUp';
import positionChecker from './hooks/positionChecker';
import rias from './assets/rias.png';
import lelouch from './assets/lelouch.png';
import ulquiorra from './assets/ulquiorra.png';
import { async } from '@firebase/util';

function App() {
  const [showPupUp, setShowPopUp] = useState(false);
  const [clickData, setClickData] = useState('');
  const { checkPosition } = positionChecker();
  const [characters, setCharacters] = useState([
    {
      name: 'Rias Gremory',
      found: false,
      source: rias,
    },
    {
      name: 'Lelouch Vi Britannia',
      found: false,
      source: lelouch,
    },
    {
      name: 'Ulquiorra Cifer',
      found: false,
      source: ulquiorra,
    },
  ]);

  const togglePopUp = () => setShowPopUp((prevState) => !prevState);
  const updateClickData = ({
    pageX,
    pageY,
    nativeEvent: { offsetX, offsetY },
    target: { width, height },
  }) => {
    setClickData({
      pageX,
      pageY,
      width,
      height,
      offsetX,
      offsetY,
    });
  };

  async function characterSelect(characterName, clickData) {
    togglePopUp();
    const foundCharacter = await checkPosition(characterName, clickData);
    // If user selected the correct character
    if (foundCharacter) console.log(foundCharacter);
    else console.log('try again');
  }

  return (
    <div id="app">
      <Header characters={characters} />
      <GameImage togglePopUp={togglePopUp} updateClickData={updateClickData} />
      {showPupUp && (
        <PopUp
          characters={characters}
          clickData={clickData}
          characterSelect={characterSelect}
        />
      )}
    </div>
  );
}

export default App;
