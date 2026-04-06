import React from 'react';

/**
 * Decorative SVG layer for the hero: gradient orbs and grid.
 * Purely visual; no semantic content.
 */
export default function HeroDeco() {
  return (
    <div className="hero-deco" aria-hidden="true">
      {/* Gradient orbs */}
      <svg className="hero-deco-orbs" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="orb-cyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-violet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse className="hero-deco-orb hero-deco-orb-1" cx="120" cy="180" rx="180" ry="160" fill="url(#orb-cyan)" />
        <ellipse className="hero-deco-orb hero-deco-orb-2" cx="680" cy="320" rx="220" ry="200" fill="url(#orb-blue)" />
        <ellipse className="hero-deco-orb hero-deco-orb-3" cx="400" cy="480" rx="160" ry="140" fill="url(#orb-violet)" />
      </svg>
      {/* Subtle grid */}
      <svg className="hero-deco-grid" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="currentColor" fillOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots)" />
      </svg>
      {/* Corner accent lines */}
      <svg className="hero-deco-lines" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path className="hero-deco-line hero-deco-line-1" d="M0 80 L80 0" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <path className="hero-deco-line hero-deco-line-2" d="M0 120 L120 0" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" />
      </svg>
    </div>
  );
}
