import React, { useState, useEffect } from 'react';
import GameImage from './components/GameImage';
import Header from './components/Header';
import PopUp from './components/PopUp';
import usePositionChecker from './hooks/usePositionChecker';
import useTimer from './hooks/useTimer';

function App() {
  const [showPupUp, setShowPopUp] = useState(false);
  const [clickData, setClickData] = useState('');
  const [resultNotification, setResultNotification] = useState(null);
  const { checkPosition, setCharacters, characters } = usePositionChecker();
  const { seconds, minutes, toggleTimer } = useTimer();

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
    const result = await checkPosition(characterName, clickData);
    const [correct, name] = result;
    // If user selected the correct character
    if (correct) {
      // Set character's found => true
      setCharacters((prevCharacters) =>
        prevCharacters.map((item) => {
          if (item.name === name) return { ...item, found: true };
          return item;
        })
      );
      setResultNotification(`Cool, you found ${name}!`);
    } else {
      setResultNotification(`That's not ${name}, try again!`);
    }
    setTimeout(() => setResultNotification(null), 1000);
  }

  return (
    <div id="app">
      <Header characters={characters} seconds={seconds} minutes={minutes} />
      <GameImage togglePopUp={togglePopUp} updateClickData={updateClickData} />
      {showPupUp && (
        <PopUp
          characters={characters}
          clickData={clickData}
          characterSelect={characterSelect}
        />
      )}
      {resultNotification && (
        <PopUp clickData={clickData} notification={resultNotification} />
      )}
      <button>Big Button</button>
    </div>
  );
}

export default App;
