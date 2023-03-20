import { useState, useEffect } from 'react';
import image from '../assets/picture.jpg';
import { writeData, getData } from '../firebase/config';

function GameImage() {
  function printMousePos(event) {
    // console.log('clientX: ' + event.clientX + ' - clientY: ' + event.clientY);
    console.log(event);
  }

  console.log(getData());

  return (
    <div className="game-image">
      <img onClick={printMousePos} src={image} id="image" />
    </div>
  );
}

export default GameImage;
