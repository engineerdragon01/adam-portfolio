import { useState } from 'react';

/**
 * Logo: optional inline SVG (vector, always crisp) or raster img with initials fallback.
 * `wide` fits horizontal wordmarks.
 */
function ExperienceTileLogo({ src, fallback, wide, SvgComponent }) {
  const [failed, setFailed] = useState(false);
  const showFallback = !SvgComponent && (!src || failed);
  const wrapClass = `experience-tile-logo-wrap${wide ? ' experience-tile-logo-wrap--wide' : ''}`;

  if (SvgComponent) {
    return (
      <div className={wrapClass} aria-hidden>
        <SvgComponent className="experience-tile-logo-svg" focusable="false" aria-hidden />
      </div>
    );
  }

  return (
    <div className={wrapClass} aria-hidden>
      {showFallback ? (
        <span className="experience-tile-logo-fallback">{fallback}</span>
      ) : (
        <img
          src={src}
          alt=""
          className="experience-tile-logo-img"
          onError={() => setFailed(true)}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
}

export default ExperienceTileLogo;
