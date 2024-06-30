import React from "react";

interface TimerListProps {
  timers: { duration: number; timestamp: number }[];
}

export const TimerList: React.FC<TimerListProps> = ({ timers }) => {
  return (
    <>
      {timers && (
        <>
          <div>
            <h2>History</h2>
            <ul>
              {timers.map((timer, index) => (
                <li key={index}>
                  Duration:{" "}
                  {new Date(timer.duration * 1000).toISOString().substr(11, 8)},
                  Started: {new Date(timer.timestamp).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
