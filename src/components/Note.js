import React, { useContext, useEffect, memo } from "react";
import classNames from "classnames";
import { Context } from "../hooks/useStore";
import "./Box.css";

const Box = ({ trackId, stepId, isBoxOn, isBoxOnCurrentStep, play }) => {
  const { toggleBox } = useContext(Context);
  const boxClassNames = classNames("box", {
    on: isBoxOn,
    playing: isBoxOn && isBoxOnCurrentStep,
  });
  useEffect(() => {
    if (isBoxOn && isBoxOnCurrentStep) {
      play();
    }
  }, [isBoxOn, isBoxOnCurrentStep, play]);

  const boxClicked = (e) => {
    e.target.classList.toggle("on");
    toggleBox({ trackId, stepId });
    play();
  };

  return <div className={boxClassNames} onClick={boxClicked} />;
};

export default memo(Box);
