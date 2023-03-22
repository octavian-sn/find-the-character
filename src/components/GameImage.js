import { useState, useEffect } from 'react';
import image from '../assets/picture.jpg';
import { getData, writeData, getCharacters } from '../firebase/config';

function GameImage({ openPopUp }) {
  return (
    <div className="game-image">
      <img onClick={() => {}} src={image} id="image" alt="anime collage" />
    </div>
  );
}

export default GameImage;
