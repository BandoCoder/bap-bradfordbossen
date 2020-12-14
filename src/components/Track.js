import React, { memo } from "react";
import useSound from "../hooks/useSound";
import Box from "./Box";
import "./Track.css";

const Track = ({
  trackId,
  currentStepId,
  title,
  noteCount,
  onNotes,
  soundFilePath,
}) => {
  const [play] = useSound(soundFilePath);

  const notes = [...Array(noteCount)].map((el, i) => {
    const isNoteOn = onNotes.indexOf(i) !== -1;
    const isNoteOnCurrentStep = currentStepId === i;
    const stepId = i;

    return (
      <Box
        key={i}
        trackId={trackId}
        stepId={stepId}
        isNoteOn={isNoteOn}
        isNoteOnCurrentStep={isNoteOnCurrentStep}
        play={play}
      />
    );
  });

  return (
    <div className="track">
      <header className="track_title">{title}</header>
      <main className="track_notes">{notes}</main>
    </div>
  );
};

export default memo(Track);
