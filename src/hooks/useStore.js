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
    case "SET_ON_NOTES":
      let newTrackList = state.trackList.map((track, trackID) => {
        if (action.trackID === trackID) {
          return {
            ...track,
            onNotes: action.value,
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
    let newOnNotes;
    const onNotes = sequence.trackList[trackId].onNotes;

    if (onNotes.indexOf(stepId) === -1) {
      newOnNotes = [...onNotes, stepId];
    } else {
      newOnNotes = onNotes.filter((col) => col !== stepId);
    }
    dispatch({
      type: "SET_ON_NOTES",
      value: newOnNotes,
      trackId,
    });
  };

  const selectSequence = (sequenceID) => {
    dispatch({
      type: "SET_SEQUENCE",
      value: sequenceID,
    });
  };

  return (
    <Context.Provider value={{ sequence, toggleBox, selectSequence }}>
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };
