"use client";

import { useProgressBar } from "@/app/component/ProgressBar";
import { useProgress } from "@/app/hooks/useProgress";
import { useState } from "react";

const Action = () => {
  const [started, setStarted] = useState(false);
  const progress  = useProgressBar()
  const seeProgress = () => {
    if (started) {
      progress.done();
    } else {
      progress.start();
    }
    setStarted(!started);
  };
  return <button onClick={seeProgress}>See progress</button>;
};

export default Action;
