"use client";
import React from "react";
import { Press_Start_2P, Inconsolata } from "next/font/google";
import { useMouseRotate } from "./useMouseRotate";

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400"] });

const skills = [
  {
    top: "50%",
    left: "50%",
    img: "/icons/css.png",
    title: "CSS",
    duration: "5s",
    distance: "-15px",
  },
  {
    top: "5%",
    left: "78%",
    img: "/icons/docker.png",
    title: "Docker",
    duration: "6s",
    distance: "-20px",
  },
  {
    top: "87%",
    left: "59%",
    img: "/icons/html.png",
    title: "HTML",
    duration: "7s",
    distance: "-25px",
  },
  {
    top: "39%",
    left: "66%",
    img: "/icons/java.png",
    title: "Java",
    duration: "8s",
    distance: "-30px",
  },
  {
    top: "20%",
    left: "52%",
    img: "/icons/js.png",
    title: "JavaScript",
    duration: "9s",
    distance: "-35px",
  },
  {
    top: "10%",
    left: "15%",
    img: "/icons/mongo.png",
    title: "MongoDB",
    duration: "10s",
    distance: "-40px",
  },
  {
    top: "78%",
    left: "7%",
    img: "/icons/mysql.png",
    title: "MySQL",
    duration: "11s",
    distance: "-45px",
  },
  {
    top: "65%",
    left: "40%",
    img: "/icons/node.png",
    title: "Node.js",
    duration: "12s",
    distance: "-50px",
  },
  {
    top: "69%",
    left: "80%",
    img: "/icons/python.png",
    title: "Python",
    duration: "13s",
    distance: "-55px",
  },
  {
    top: "32%",
    left: "10%",
    img: "/icons/react.png",
    title: "React",
    duration: "14s",
    distance: "-60px",
  },
  {
    top: "58%",
    left: "14%",
    img: "/icons/redux.png",
    title: "Redux",
    duration: "15s",
    distance: "-65px",
  },
];

function DownArrow({ onClick }) {
  return (
    <div className="indicator cursor-pointer z-999" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function HeroSection() {
  const rotateRef = useMouseRotate();

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="flex h-screen w-full justify-center items-center relative">
      <div className={"absolute top-[30%] " + ps2p.className}>
        Pixels, Code, and Purpose.
        <div
          ref={rotateRef}
          style={{
            transform:
              "perspective(5000px) rotateX(var(--rotateY)) rotateY(var(--rotateX))",
          }}
          className={
            "absolute text-center mt-20 text-5xl follow-me " + ps2p.className
          }
        >
          Manmohan Labh
        </div>
      </div>

      <div className="absolute bottom-20 opacity-30 z-[9999]">
        <DownArrow onClick={handleScrollDown} />
      </div>

      <div className="relative w-full h-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute flex items-center blur-sm opacity-30 transition-transform hover:blur-none hover:scale-150 hover:opacity-100 cursor-pointer animate-up-down group"
            style={{
              left: skill.left,
              top: skill.top,
              "--duration": skill.duration,
              "--distance": skill.distance,
            }}
          >
            <div className="p-4 rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <img
                src={skill.img}
                className="size-20 rotate-[5deg] transition-transform duration-200 ease-in-out hover:rotate-0"
              />
            </div>

            <p
              className={`${inconsolata.className} text-base text-gray-300 leading-relaxed hidden transition-opacity duration-300 group-hover:block`}
            >
              <strong>{skill.title}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
