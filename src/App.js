import React, { useState, useEffect } from "react";
import Transport from "./components/Transport";
import Steps from "./components/Steps";
import TrackList from "./components/TrackList";
import { Provider } from "./hooks/useStore";
import useTimer from "./hooks/useTimer";
import "./App.css";

function App() {
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
      <main className="App">
        <header className="App-header">
          <h1>BAP - Web Based Drum Sequencer</h1>
          <Transport {...transportProps} />
        </header>
        <Steps count={totalSteps} />
        <div className="app-content">
          <TrackList {...trackListProps} />
        </div>
      </main>
    </Provider>
  );
}

export default App;
