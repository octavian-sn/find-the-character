import { useState, useEffect } from 'react';
import image from '../assets/picture.jpg';
import { getData, writeData, getCharacters } from '../firebase/config';

function GameImage({ togglePopUp, updateClickData }) {
  return (
    <div className="game-image">
      <img
        onClick={(e) => {
          togglePopUp(e);
          updateClickData(e);
        }}
        src={image}
        id="image"
        alt="anime collage"
      />
    </div>
  );
}

export default GameImage;
