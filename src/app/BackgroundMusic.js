"use client";

import React, { useEffect, useRef } from "react";

const backgroundMusic = () => {
  const background_music = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      background_music.current = new Audio("/spectrum_audio.m4a");
    }

    return () => {
      if (background_music.current) {
        background_music.current.pause();
        background_music.current.currentTime = 0;
      }
    };
  }, []);

  return {
    play: () => {
      if (background_music.current) {
        background_music.current.currentTime = 0;
        background_music.current.loop = true;
        background_music.current.play();
      }
    },
    pause: () => {
      if (background_music.current) {
        background_music.current.pause();
      }
    },
  };
};

export default backgroundMusic;
