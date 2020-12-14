const sequenceState = [
  {
    id: 0,
    title: "User Pattern",
    boxCount: 16,
    userId: 0,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onBoxes: [],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onBoxes: [],
      },
      {
        title: "Open Hat",
        soundFile: "openHat",
        onBoxes: [],
      },
      {
        title: "Closed Hat",
        soundFile: "closedHat",
        onBoxes: [],
      },
      {
        title: "Shaker",
        soundFile: "shaker",
        onBoxes: [],
      },
      {
        title: "Shout",
        soundFile: "shout",
        onBoxes: [],
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
