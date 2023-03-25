import { useState } from 'react';

function Header({ characters, seconds, minutes }) {
  const [showCharacters, setShowCharacters] = useState(false);
  const togglePictures = () => setShowCharacters((prevState) => !prevState);

  // Render characters left in the toggle window
  const charactersLeft = characters.filter((item) => item.found === false);
  const characterPictures = charactersLeft.map((item, index) => (
    <div key={index}>
      <img
        className="character-face"
        src={item.source}
        alt="anime character"
      ></img>
      <p>{item.name}</p>
    </div>
  ));

  return (
    <header>
      <div className="title">
        <h1>Tag'em! </h1>
      </div>
      <div className="timer">
        {minutes < 10 ? '0' : ''}
        {minutes}:{seconds < 10 ? '0' : ''}
        {seconds}
      </div>
      <button onClick={togglePictures} className="characters-icon">
        {charactersLeft.length}
      </button>
      {showCharacters && (
        <div className="header--character-pictures">{characterPictures}</div>
      )}
    </header>
  );
}

export default Header;
