const sequenceState = [
  {
    id: 0,
    title: "Pulse",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [],
      },
      {
        title: "Open Hat",
        soundFile: "openHat",
        onNotes: [],
      },
      {
        title: "Closed Hat",
        soundFile: "closedHat",
        onNotes: [],
      },
      {
        title: "Shaker",
        soundFile: "shaker",
        onNotes: [],
      },
      {
        title: "Shout",
        soundFile: "shout",
        onNotes: [],
      },
    ],
  },
];

const soundFiles = {
  kick: "/sounds/kick.wav",
  snare: "/sounds/snare.wav",
  openHat: "/sounds/open-hat.wav",
  closedHat: "/sounds/closed-hat.wav",
  shaker: "/sounds/shaker.wav",
  shout: "/sounds/shout.wav",
};

export { sequenceState, soundFiles };
