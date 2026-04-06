import React from 'react';

/**
 * Subtle SVG background accents for sections. variant: 'light' (light bg) or 'dark' (dark bg).
 */
export default function SectionDeco({ variant = 'light' }) {
  const isDark = variant === 'dark';
  const color = isDark ? '#94a3b8' : '#cbd5e1';
  return (
    <div className={`section-deco section-deco--${variant}`} aria-hidden="true">
      <svg className="section-deco-svg section-deco-blobs" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`section-blob-a-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#38bdf8' : '#22d3ee'} stopOpacity="0.08" />
            <stop offset="100%" stopColor={isDark ? '#818cf8' : '#a5b4fc'} stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`section-blob-b-${variant}`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#22d3ee' : '#67e8f9'} stopOpacity="0.06" />
            <stop offset="100%" stopColor={isDark ? '#0ea5e9' : '#22d3ee'} stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse className="section-deco-blob section-deco-blob-1" cx="80" cy="100" rx="140" ry="120" fill={`url(#section-blob-a-${variant})`} />
        <ellipse className="section-deco-blob section-deco-blob-2" cx="320" cy="280" rx="160" ry="140" fill={`url(#section-blob-b-${variant})`} />
      </svg>
      <svg className="section-deco-svg section-deco-dots" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`section-dots-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={color} fillOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#section-dots-${variant})`} />
      </svg>
    </div>
  );
}
