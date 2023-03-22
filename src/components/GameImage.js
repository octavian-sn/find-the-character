import { useState, useEffect } from 'react';
import image from '../assets/picture.jpg';
import { getData, writeData, getCharacters } from '../firebase/config';

function GameImage({ openPopUp }) {
  function addCharacters({
    nativeEvent: { offsetX, offsetY },
    target: { width, height },
  }) {
    const names = ['Rias Gremory', 'Lelouch Vi Britannia', 'Ulquiorra Cifer'];
    let number = 0;
    const top = Number((offsetY / height - 0.07).toFixed(4));
    const bottom = Number((offsetY / height + 0.07).toFixed(4));
    const left = Number((offsetX / width - 0.024).toFixed(4));
    const right = Number((offsetX / width + 0.024).toFixed(4));
    const name = `${names[number]}`;
    writeData({
      name,
      top,
      bottom,
      left,
      right,
    });
    number++;
  }
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
      console.log(margin.left);
    }
  }

  return (
    <div className="game-image">
      <img onClick={() => {}} src={image} id="image" alt="anime collage" />
    </div>
  );
}

export default GameImage;
