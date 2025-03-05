"use client";
import React, { useState } from "react";
import {
  Fira_Code,
  JetBrains_Mono,
  Inconsolata,
  Press_Start_2P,
} from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400"] });

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

const Square = (props) => (
  <div
    className={
      "border flex items-center justify-center h-24 w-24 " +
      (props.value === "" ? "cursor-pointer " : "") +
      (props.isClicked
        ? props.isWinning
          ? "bg-green-500 "
          : "bg-red-500 animate-shake "
        : "") +
      ps2p.className
    }
    style={{ borderColor: "var(--foreground)" }}
    onClick={props.onClick}
  >
    {props.isClicked ? "X" : props.value}
  </div>
);

function ResumeGame() {
  const [clickedSquares, setClickedSquares] = useState(Array(9).fill(false));
  const [resumeReady, setResumeReady] = useState(false);
  const values = ["X", "0", "X", "0", "X", "", "", "0", ""];

  const handleClick = (index) => {
    if (resumeReady || clickedSquares[index] || values[index] !== "") {
      return;
    }

    const newClickedSquares = [...clickedSquares];
    newClickedSquares[index] = true;
    setClickedSquares(newClickedSquares);

    if (index === 8) {
      setResumeReady(true);
      newClickedSquares[0] = true;
      newClickedSquares[4] = true;
      newClickedSquares[8] = true;
      setClickedSquares(newClickedSquares);
    } else if (index === 6) {
      setResumeReady(true);
      newClickedSquares[2] = true;
      newClickedSquares[4] = true;
      newClickedSquares[6] = true;
      setClickedSquares(newClickedSquares);
    } else {
      setTimeout(() => {
        newClickedSquares[index] = false;
        setClickedSquares([...newClickedSquares]);
      }, 2000);
    }
  };

  return (
    <section className="mx-10 my-20 max-w-screen-lg flex flex-col items-center">
      <h2 className={"mb-20 text-3xl text-center " + ps2p.className}>
        Make the winning move 🏆— Download my resume!
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {values.map((value, index) => (
          <Square
            key={index}
            value={value}
            isClicked={clickedSquares[index]}
            isWinning={
              resumeReady &&
              (index === 0 ||
                index === 2 ||
                index === 4 ||
                index === 6 ||
                index === 8)
            }
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {resumeReady && (
        <a
          href="./Manmohan_Labh_CV_Feb_2025.pdf"
          download="Manmohan_Labh_Resume.pdf"
          className={
            "mt-10 p-2 bg-green-500 text-white rounded " +
            jetBrainsMono.className
          }
        >
          Download Resume
        </a>
      )}
    </section>
  );
}

export default ResumeGame;
