import React, { useState, useEffect } from "react";
import { RoundTimer } from "./RoundTimer";
import { TimerList } from "./Timer/List";

interface TimerRecord {
  duration: number;
  timestamp: number;
}

const App: React.FC = () => {
  const [timers, setTimers] = useState<TimerRecord[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    const storedTimers = localStorage.getItem("timers");
    if (storedTimers) {
      setTimers(JSON.parse(storedTimers));
    }
  }, []);

  const handleTimerComplete = () => {
    const duration = 60;
    const newTimer: TimerRecord = { duration, timestamp: Date.now() };
    const updatedTimers = [...timers, newTimer];
    setTimers(updatedTimers);
    localStorage.setItem("timers", JSON.stringify(updatedTimers));
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <RoundTimer
        duration={60}
        isPlaying={isRunning}
        onComplete={handleTimerComplete}
      />
      {/* <button 
        onClick={isRunning ? stopTimer : startTimer} 
        className="mt-4 text-2xl p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none"
      >
        {isRunning ? "Остановить таймер" : "Запустить таймер"}
      </button> */}
      <TimerList timers={timers} />
    </div>
  );
};

export default App;
