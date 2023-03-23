import { async } from '@firebase/util';
import { getData, writeData, getCharacters } from '../firebase/config';

export default function positionChecker() {
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
  // Hard-coded-values
  // function checkPosition({
  //   nativeEvent: { offsetX, offsetY },
  //   target: { width, height },
  // }) {
  //   const mouseClick = {
  //     x: offsetX,
  //     y: offsetY,
  //   };
  //   const margin = {
  //     left: width * 0.1725,
  //     right: width * 0.2205,
  //     top: height * 0.6325,
  //     bottom: height * 0.7622,
  //   };
  //   if (
  //     mouseClick.x > margin.left &&
  //     mouseClick.x < margin.right &&
  //     mouseClick.y > margin.top &&
  //     mouseClick.y < margin.bottom
  //   ) {
  //     console.log(margin.left);
  //   }
  // }
  async function checkPosition(name, { offsetX, offsetY, height, width }) {
    try {
      const percentages = await getData(name);
      const margin = {
        left: width * percentages.left,
        right: width * percentages.right,
        top: height * percentages.top,
        bottom: height * percentages.bottom,
      };
      if (
        offsetX > margin.left &&
        offsetX < margin.right &&
        offsetY > margin.top &&
        offsetY < margin.bottom
      )
        return true;
    } catch (e) {
      console.log(e);
    }
  }

  return { checkPosition, addCharacters };
}
