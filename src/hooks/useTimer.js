import { useState, useEffect } from 'react';

export default function useTimer() {
  const [counter, setCounter] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const toggleTimer = () => setIsRunning((prevState) => !prevState);

  return {
    counter,
    seconds,
    minutes,
    toggleTimer,
  };
}
