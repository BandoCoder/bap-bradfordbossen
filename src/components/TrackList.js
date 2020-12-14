import React, { useContext, memo } from "react";
import { Context } from "../hooks/useStore";
import { soundFiles } from "../sequence";
import Track from "./Track";

const TrackList = ({ currentStepId }) => {
  const {
    sequence: { trackList, noteCount },
  } = useContext(Context);
  const content = trackList.map((track, trackId) => {
    const { title, onNotes, soundFile } = track;
    const soundFilePath = soundFiles[soundFile];

    return (
      <Track
        key={title}
        trackId={+trackId}
        currentStepId={currentStepId}
        title={title}
        noteCount={noteCount}
        onNotes={onNotes}
        soundFilePath={soundFilePath}
      />
    );
  });

  return <div className="track-list">{content}</div>;
};

export default memo(TrackList);
