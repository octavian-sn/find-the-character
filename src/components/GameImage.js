import { useState, useEffect } from 'react';
import image from '../assets/picture.jpg';
import { writeData, getData } from '../firebase/config';

function GameImage() {
  function checkPosition({
    nativeEvent: { offsetX, offsetY },
    target: { width, height },
  }) {
    const mouseClick = {
      x: offsetX,
      y: offsetY,
    };
    const margin = {
      left: width * 0.1725,
      right: width * 0.2205,
      top: height * 0.6325,
      bottom: height * 0.7622,
    };
    if (
      mouseClick.x > margin.left &&
      mouseClick.x < margin.right &&
      mouseClick.y > margin.top &&
      mouseClick.y < margin.bottom
    ) {
      console.log(true);
    }
  }

  return (
    <div className="game-image">
      <img onClick={checkPosition} src={image} id="image" />
    </div>
  );
}

export default GameImage;
