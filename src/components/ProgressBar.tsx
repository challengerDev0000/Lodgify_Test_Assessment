import React from "react";
import "./ProgressBar.css";

interface IProgressProps {
  progress: number;
}

const ProgressBar: React.FC<IProgressProps> = ({ progress }) => {
  const clampedProgress = progress || 0;
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${clampedProgress}%` }}
      ></div>
      {progress >= 10 ? (
        <div
          className="progress-value"
          style={{ left: `calc(${clampedProgress}% - 45px)` }}
        >
          {clampedProgress}%
        </div>
      ) : (
        <div
          className="progress-value"
          style={{ left: `calc(10% - 45px)`, color: "black" }}
        >
          {clampedProgress}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
