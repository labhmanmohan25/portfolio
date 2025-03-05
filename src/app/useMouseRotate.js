"use client";
import { useEffect, useRef } from "react";

export function useMouseRotate() {
  const ref = useRef(null);

  useEffect(() => {
    function rotateElement(event) {
      if (!ref.current) return;

      const { clientX: x, clientY: y } = event;
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;

      ref.current.style.setProperty("--rotateX", `${offsetX}deg`);
      ref.current.style.setProperty("--rotateY", `${-offsetY}deg`);
    }

    window.addEventListener("mousemove", rotateElement);
    return () => window.removeEventListener("mousemove", rotateElement);
  }, []);

  return ref;
}
