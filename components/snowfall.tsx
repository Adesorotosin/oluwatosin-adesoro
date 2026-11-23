"use client";

import type { CSSProperties } from "react";

const bulbColors = ["#ffd98a", "#fff1c2", "#e88b78", "#f6c66f", "#d9e8c5", "#fff0bd"];

const bulbs = Array.from({ length: 17 }, (_, index) => ({
  id: index,
  left: (index / 16) * 100,
  top: 9 + Math.sin((index / 16) * Math.PI * 2) * 7,
  delay: -((index * 0.71) % 3.8),
  color: bulbColors[index % bulbColors.length],
}));

const sparkles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: (index * 61.73 + 7) % 100,
  top: (index * 37.19 + 13) % 100,
  delay: -((index * 1.17) % 5),
  duration: 3.2 + ((index * 7) % 30) / 10,
  size: 2 + ((index * 11) % 3),
}));

const embers = Array.from({ length: 13 }, (_, index) => ({
  id: index,
  left: (index * 43.17 + 11) % 100,
  delay: -((index * 3.71) % 22),
  duration: 13 + ((index * 7) % 12),
  drift: ((index * 31) % 120) - 60,
  size: 3 + ((index * 5) % 4),
  glow: index % 3 === 0 ? "bright" : "soft",
}));

export function ChristmasDecor() {
  return (
    <div className="christmas-decor" aria-hidden="true">
      <div className="christmas-garland">
        <span className="christmas-garland__wire" />
        {bulbs.map((bulb) => (
          <span
            key={bulb.id}
            className="christmas-bulb"
            style={
              {
                left: `${bulb.left}%`,
                top: `${bulb.top}px`,
                animationDelay: `${bulb.delay}s`,
                "--bulb-color": bulb.color,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="christmas-sparkles">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="christmas-sparkle"
            style={
              {
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                animationDelay: `${sparkle.delay}s`,
                animationDuration: `${sparkle.duration}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="christmas-embers">
        {embers.map((ember) => (
          <span
            key={ember.id}
            className={`christmas-ember christmas-ember--${ember.glow}`}
            style={
              {
                left: `${ember.left}%`,
                width: `${ember.size}px`,
                height: `${ember.size}px`,
                animationDelay: `${ember.delay}s`,
                animationDuration: `${ember.duration}s`,
                "--ember-drift": `${ember.drift}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
