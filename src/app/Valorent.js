"use client";

import { useState, useEffect } from "react";
import "./styles.css";
import backgroundMusic from "./BackgroundMusic";
import { Press_Start_2P } from "next/font/google";

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export default function Valorent() {
  const [isActive, setIsActive] = useState(false);
  const { play, pause } = backgroundMusic();

  useEffect(() => {
    if (isActive) {
      play();
      document.body.classList.add("active-global-style");
    } else {
      pause();
      document.body.classList.remove("active-global-style");
    }
  }, [isActive]);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className={`w-full mt-20 valorent-container ${ps2p.className}`}>
      <p className="valorent-text">
        You've Reached the Final Level! Unlocking ultimate skin . . .
      </p>
      <button onClick={handleClick} className="magic-button">
        {isActive ? "Power Down" : "Activate Spectrum Protocol!"}
      </button>
    </div>
  );
}
