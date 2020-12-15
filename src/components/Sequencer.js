import React, { useState, useEffect } from "react";
import Transport from "../components/Transport";
import { Provider } from "../hooks/useStore";
import Steps from "../components/Steps";
import TrackList from "../components/TrackList";
import useTimer from "../hooks/useTimer";

const Sequencer = () => {
  const baseBPMPerOneSecond = 60;
  const stepsPerBar = 16;
  const beatsPerBar = 4;
  const barsPerSequence = 1;
  const totalSteps = stepsPerBar * barsPerSequence;
  const totalBeats = beatsPerBar * barsPerSequence;

  const [BPM, setBPM] = useState(128);
  const [startTime, setStartTime] = useState(null);
  const [pastLapsedTime, setPastLapse] = useState(0);
  const [currentStepId, setCurrentStep] = useState(null);

  const timePerSequence = (baseBPMPerOneSecond / BPM) * 1000 * totalBeats;
  const timePerStep = timePerSequence / totalSteps;
  const isSequencePlaying = startTime !== null;
  const playerTime = useTimer(isSequencePlaying);
  const lapsedTime = isSequencePlaying
    ? Math.max(0, playerTime - startTime)
    : 0;
  const totalLapsedTime = pastLapsedTime + lapsedTime;

  useEffect(() => {
    if (isSequencePlaying) {
      setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps);
    } else {
      setCurrentStep(null);
    }
  }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps]);

  const transportProps = {
    setStartTime,
    setPastLapse,
    setBPM,
    isSequencePlaying,
    startTime,
    BPM,
  };

  const trackListProps = {
    currentStepId,
  };
  return (
    <Provider>
      <div className="sequencer">
        <Transport {...transportProps} />
        <Steps count={totalSteps} />
        <TrackList {...trackListProps} />
      </div>
    </Provider>
  );
};

export default Sequencer;
