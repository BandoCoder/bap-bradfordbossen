import React, { memo } from "react";
import useSound from "../hooks/useSound";
import Box from "./Box";
import "./Track.css";

const Track = ({
  trackId,
  currentStepId,
  title,
  boxCount,
  onBoxes,
  soundFilePath,
}) => {
  const [play] = useSound(soundFilePath);

  const boxes = [...Array(boxCount)].map((el, i) => {
    const isBoxOn = onBoxes.indexOf(i) !== -1;
    const isBoxOnCurrentStep = currentStepId === i;
    const stepId = i;

    return (
      <Box
        key={i}
        trackId={trackId}
        stepId={stepId}
        isBoxOn={isBoxOn}
        isBoxOnCurrentStep={isBoxOnCurrentStep}
        play={play}
      />
    );
  });

  return (
    <div className="track">
      <header className="track_title">{title}</header>
      <main className="track_notes">{boxes}</main>
    </div>
  );
};

export default memo(Track);
