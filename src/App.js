import React, { useState } from 'react';
import GameImage from './components/GameImage';
import Header from './components/Header';
import PopUp from './components/PopUp';
import usePositionChecker from './hooks/usePositionChecker';

function App() {
  const [showPupUp, setShowPopUp] = useState(false);
  const [clickData, setClickData] = useState('');
  const { checkPosition, setCharacters, characters } = usePositionChecker();

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
