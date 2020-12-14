import React, { useReducer, createContext } from "react";
import { sequenceState } from "../sequence";

const Context = createContext({
  sequence: {},
  toggleBox: () => {},
  selectSequence: () => {},
});

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEQUENCE":
      return {
        ...sequenceState.find((seq) => seq.id === action.value),
      };
    case "SET_ON_BOXES":
      let newTrackList = state.trackList.map((track, trackId) => {
        if (action.trackId === trackId) {
          return {
            ...track,
            onBoxes: action.value,
          };
        } else {
          return track;
        }
      });
      return {
        ...state,
        trackList: newTrackList,
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [sequence, dispatch] = useReducer(appReducer, { ...sequenceState[0] });

  const toggleBox = ({ trackId, stepId }) => {
    let newOnBoxes;
    const onBoxes = sequence.trackList[trackId].onBoxes;

    if (onBoxes.indexOf(stepId) === -1) {
      newOnBoxes = [...onBoxes, stepId];
    } else {
      newOnBoxes = onBoxes.filter((col) => col !== stepId);
    }
    dispatch({
      type: "SET_ON_BOXES",
      value: newOnBoxes,
      trackId,
    });
  };

  const selectSequence = (sequenceId) => {
    dispatch({
      type: "SET_SEQUENCE",
      value: sequenceId,
    });
  };

  return (
    <Context.Provider value={{ sequence, toggleBox, selectSequence }}>
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };
