// RoundTimer.tsx
import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FaPlay, FaPause } from 'react-icons/fa';

interface RoundTimerProps {
  duration: number;
  isPlaying: boolean;
  onComplete: () => void;
}

export const RoundTimer: React.FC<RoundTimerProps> = ({
  duration,
  isPlaying,
  onComplete,
}) => {
  const [isPlayingInternal, setIsPlayingInternal] = useState(isPlaying);

  const togglePlayPause = () => {
    setIsPlayingInternal(!isPlayingInternal);
  };

  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <CountdownCircleTimer
        isPlaying={isPlayingInternal}
        duration={duration}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
          onComplete();
          setIsPlayingInternal(false);
        }}
      >
        {({ remainingTime }) => (
          <div className="flex flex-col items-center text-6xl">
            {remainingTime}
            <button 
              onClick={togglePlayPause} 
              className="mt-4 text-3xl p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none"
            >
              {isPlayingInternal ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};
