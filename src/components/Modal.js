import { useState, useEffect } from 'react';
import { getData, setHighScores } from '../firebase/config';

function Modal({ seconds, minutes, newGame }) {
  const [displayNameInput, setDisplayNameInput] = useState(false);
  const [displayScores, setDisplayScores] = useState(false);
  const [scores, setScores] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const playerTime = Number('' + minutes + seconds);
  useEffect(() => {
    const answer = getData('High Scores', 'scores');
    // Check if player time is lower than worst time in scores or if no scores
    // If any of the above, prompt player for name, else display scores directly
    answer.then((data) => {
      if (data === 'Error, no document.') setDisplayNameInput(true);
      else {
        setScores(data.scores);
        const lastTime = data.scores[data.scores.length - 1].score;
        if (playerTime < lastTime || data.scores.length < 10)
          setDisplayNameInput(true);
        else setDisplayScores(true);
      }
    });
  }, []);

  const updateScores = () => {
    setScores((prevScores) => {
      const newArr = [...prevScores];
      newArr.push({
        name: playerName === '' ? 'DOE' : playerName,
        score: playerTime,
      });
      newArr.sort((a, b) => a.score - b.score);
      if (newArr.length > 10) newArr.pop();
      setHighScores({ scores: newArr });
      return newArr;
    });
    setDisplayNameInput(false);
    setDisplayScores(true);
  };

  const processScoreData = () => {
    return scores.map((item, index) => {
      let string = item.score.toString();
      let minutes = '00';
      let seconds = string.slice(-2);
      if (string.length === 1) {
        seconds = '0' + item.score;
      }
      if (string.length === 3) {
        minutes = '0' + string.slice(0, 1);
      }
      if (string.length === 4) {
        minutes = string.slice(0, 2);
      }
      if (string.length === 2) {
        seconds = item.score;
      }
      return (
        <li className="score-row" key={index}>
          <span>{item.name.toUpperCase()}</span>{' '}
          <span className="time">{`${minutes}:${seconds}`}</span>
        </li>
      );
    });
  };

  return (
    <div id="modal">
      {displayNameInput && (
        <div className="nameInput">
          <p>Please enter your initials for the high-scores</p>
          <input
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
            value={playerName}
            maxLength="3"
          ></input>
          <button onClick={updateScores}>SUBMIT</button>
        </div>
      )}
      {displayScores && (
        <div className="scores">
          <h1>Best times</h1>
          <ol className="scores-list">{processScoreData()}</ol>
          <p>
            Your time: {minutes < 10 ? '0' : ''}
            {minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
          </p>
          <button
            onClick={() => {
              newGame();
              setDisplayScores(false);
            }}
          >
            NEW GAME
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
