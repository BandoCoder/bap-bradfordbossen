import React, { useContext, memo } from "react";
import { sequenceState } from "../sequence.js";
import { Context } from "../hooks/useStore";
import "./Transport.css";

const Transport = ({
  setStartTime,
  setPastLapse,
  setBPM,
  isSequencePlaying,
  startTime,
  BPM,
}) => {
  const {
    sequence: { id: selectedSequenceId },
    selectSequence,
  } = useContext(Context);

  function togglePlayback() {
    if (isSequencePlaying) {
      setPastLapse((l) => l + performance.now() - startTime);
      setStartTime(null);
    } else {
      setStartTime(performance.now());
    }
  }

  function stopPlayback() {
    setPastLapse(0);
    setStartTime(null);
  }

  function updateBPM(e) {
    setBPM(e.target.value);
  }

  return (
    <nav className="transport">
      <button
        className="form_element button_stop"
        onClick={stopPlayback}
        aria-label="Stop"
      >
        <svg width="14" height="14" viewBox="0 0 14 14">
          <rect
            className="button_icon_path"
            x="2"
            y="2"
            width="10"
            height="10"
          />
        </svg>
      </button>
      <button
        className="form_element button_play_pause"
        onClick={togglePlayback}
        aria-label="Play / Pause"
      >
        <svg width="14" height="14" viewBox="8 8 20 20">
          {isSequencePlaying && (
            <path
              className="button_icon_path"
              id="pause-icon"
              data-state="playing"
              d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26"
            />
          )}
          {!isSequencePlaying && (
            <path
              className="button_icon_path"
              id="play-icon"
              data-state="paused"
              d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"
            />
          )}
        </svg>
      </button>
      <input
        className="form_element input_bpm"
        id="bpm"
        type="text"
        value={BPM}
        onChange={updateBPM}
      />
      <label className="label_bpm" htmlFor="bpm">
        BPM
      </label>
      <select
        className="form_element select_sequence"
        value={selectedSequenceId}
        onChange={(e) => selectSequence(+e.target.value)}
        aria-label="Select sequence"
      >
        {sequenceState.map((seq) => {
          return (
            <option key={seq.id} value={seq.id}>
              {seq.title}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export default memo(Transport);
