import { useState, useEffect } from 'react';
import { getData, setHighScores } from '../firebase/config';

function Modal({ seconds, minutes }) {
  const [displayNameInput, setDisplayNameInput] = useState(true);
  const [displayScores, setDisplayScores] = useState(false);
  const [scores, setScores] = useState('');
  useEffect(() => {
    const playerTime = Number('' + minutes + seconds);
    const answer = getData('High Scores', 'scores');
    // Check if player time is lower than worst time in scores or if no scores
    // If any of the above, prompt player for name, else display scores directly
    answer.then((data) => {
      if (data === 'Error, no document.') setDisplayNameInput(true);
      else {
        setScores(data.scores);
        const lastTime = data.scores[data.scores.length - 1].score;
        if (playerTime < lastTime) setDisplayNameInput(true);
        else setDisplayScores(true);
      }
    });
  }, []);

  return (
    <div id="modal">
      {displayNameInput && (
        <div className="nameInput">
          <p>Please enter your name for the high-scores</p>
          <input></input>
          <button>SUBMIT</button>
        </div>
      )}
    </div>
  );
}

export default Modal;
