import React, { useState, useEffect } from 'react';

interface TimerProps {
  onTimerComplete: (duration: number) => void;
}

export const Timer: React.FC<TimerProps> = ({ onTimerComplete }) => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning && intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
      onTimerComplete(time);
      setTime(0);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div>
      <h2>Timer: {new Date(time * 1000).toISOString().substr(11, 8)}</h2>
      <button onClick={startTimer} disabled={isRunning}>Старт</button>
      <button onClick={stopTimer} disabled={!isRunning}>Стоп</button>
    </div>
  );
};
