"use client";
import React, { createContext, useContext, useEffect } from "react";
import { useProgress } from "../hooks/useProgress";
import { usePathname, useSearchParams } from "next/navigation";

export const ProgressBarContext = createContext(null);

export const useProgressBar = () => {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error(
      "useProgressBar must be used within the ProgressBarProvider"
    );
  }

  return progress;
};

const ProgressBar = ({ children }) => {
  const progress = useProgress();
  const pathname = usePathname();

  return (
    <ProgressBarContext.Provider value={progress}>
      {progress.state !== "initial" && (
      <div
        className="fixed top-0 z-50 h-1 bg-gradient-to-r from-blue-500 to-blue-300 duration-300 transition-all ease-in-out"
        style={{ width: `${progress.value}%` }}
      />
      )}
      {children}
    </ProgressBarContext.Provider>
  );
};

export default ProgressBar;
