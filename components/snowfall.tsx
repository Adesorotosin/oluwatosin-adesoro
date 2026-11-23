"use client";

import type { CSSProperties } from "react";

const flakes = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: (index * 37.7) % 100,
  delay: -((index * 1.73) % 18),
  duration: 12 + ((index * 7) % 13),
  size: 2 + ((index * 11) % 4),
  drift: ((index * 19) % 70) - 35,
  opacity: 0.25 + ((index * 13) % 55) / 100,
}));

export function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snowfall__flake"
          style={
            {
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              "--snow-drift": `${flake.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
