"use client";

import type { CSSProperties } from "react";

// Fixed, deterministic positions keep the particle field stable between renders.
const flakes = Array.from({ length: 88 }, (_, index) => {
  const seed = index + 1;
  const layer = seed % 5 === 0 ? "near" : seed % 3 === 0 ? "mid" : "far";

  return {
    id: index,
    left: (seed * 47.731) % 100,
    delay: -((seed * 2.137) % 26),
    duration: 19 + ((seed * 7) % 19),
    size: layer === "near" ? 3.5 + ((seed * 13) % 2) : layer === "mid" ? 2 + ((seed * 11) % 2) : 1 + ((seed * 17) % 2),
    drift: ((seed * 29) % 90) - 45,
    opacity: layer === "near" ? 0.72 : layer === "mid" ? 0.52 : 0.34 + ((seed * 7) % 20) / 100,
    blur: layer === "near" ? 0 : layer === "mid" ? 0.25 : 0.55,
    layer,
  };
});

export function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className={`snowfall__flake snowfall__flake--${flake.layer}`}
          style={
            {
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              filter: `blur(${flake.blur}px)`,
              "--snow-drift": `${flake.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
