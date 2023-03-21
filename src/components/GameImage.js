import { useState, useEffect } from 'react';
import image from '../assets/picture.jpg';
import { writeData, getData } from '../firebase/config';

function GameImage() {
  function printMousePos({
    nativeEvent: { offsetX, offsetY },
    target: { width, height },
  }) {
    const data = {
      offsetX,
      offsetY,
      width,
      height,
      devicePixelRatio,
      xLeft: width * 0.1709,
      xRight: width * 0.2194,
      yTop: width * 0.7402,
      yBottom: width * 0.8366,
    };
    const xLeft = width * 0.1725;
    const xRight = width * 0.2205;
    const yTop = height * 0.6325;
    const yBottom = height * 0.7622;
    if (
      offsetX > xLeft &&
      offsetX < xRight &&
      offsetY > yTop &&
      offsetY < yBottom
    ) {
      console.log(data);
    }
  }

  return (
    <div className="game-image">
      <img onClick={printMousePos} src={image} id="image" />
    </div>
  );
}

export default GameImage;
