function ClockFace() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]" aria-hidden="true">
      <svg
        viewBox="0 0 400 400"
        className="h-[min(90vw,700px)] w-[min(90vw,700px)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="0.5" />

        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 200 + 175 * Math.sin(angle);
          const y1 = 200 - 175 * Math.cos(angle);
          const x2 = 200 + 185 * Math.sin(angle);
          const y2 = 200 - 185 * Math.cos(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="currentColor" strokeWidth={i % 3 === 0 ? 2 : 1} />
          );
        })}

        {Array.from({ length: 60 }).map((_, i) => {
          if (i % 5 === 0) return null;
          const angle = (i * 6 * Math.PI) / 180;
          const x1 = 200 + 180 * Math.sin(angle);
          const y1 = 200 - 180 * Math.cos(angle);
          const x2 = 200 + 185 * Math.sin(angle);
          const y2 = 200 - 185 * Math.cos(angle);
          return (
            <line key={`m-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="currentColor" strokeWidth="0.5" />
          );
        })}

        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 200 + 20 * Math.sin(angle);
          const y1 = 200 - 20 * Math.cos(angle);
          const x2 = 200 + 170 * Math.sin(angle);
          const y2 = 200 - 170 * Math.cos(angle);
          return (
            <line key={`r-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 6" />
          );
        })}

        <circle cx="200" cy="200" r="6" fill="currentColor" />

        <line x1="200" y1="200" x2="200" y2="90"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          className="origin-center animate-[clock-hour_720s_linear_infinite]"
          style={{ transformOrigin: '200px 200px' }} />

        <line x1="200" y1="200" x2="200" y2="50"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          className="origin-center animate-[clock-minute_60s_linear_infinite]"
          style={{ transformOrigin: '200px 200px' }} />
      </svg>

      <style>{`
        @keyframes clock-hour { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes clock-minute { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[clock-hour_720s_linear_infinite\\],
          .animate-\\[clock-minute_60s_linear_infinite\\] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

function FactChips({ facts }) {
  if (!facts || facts.length === 0) return null;
  return (
    <div className="hero-fade-in mt-8 flex flex-wrap justify-center gap-2" style={{ animationDelay: '0.6s' }}>
      {facts.map((fact, i) => (
        <span key={i}
          className="inline-flex items-center rounded-full border border-heritage-bronze/20 bg-heritage-marble/10 px-3 py-1 text-[0.6875rem] font-medium tracking-wide text-heritage-marble/80 backdrop-blur-sm">
          {fact}
        </span>
      ))}
    </div>
  );
}

export default function PageHero({ eyebrow, title, subtitle, image, variant = 'page', facts, children }) {
  if (variant === 'home') {
    return (
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-heritage-charcoal text-heritage-marble"
        aria-labelledby="hero-title"
      >
        {image && (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true">
            <div className="absolute inset-0 bg-heritage-charcoal/70" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-charcoal/40 via-heritage-charcoal/80 to-heritage-charcoal" aria-hidden="true" />
        <ClockFace />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8 lg:py-40">
          {eyebrow && (
            <p className="eyebrow hero-fade-in mb-4 text-heritage-bronze-light" style={{ animationDelay: '0.1s' }}>
              {eyebrow}
            </p>
          )}

          <h1 id="hero-title"
            className="hero-fade-in font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: '0.2s' }}>
            {title}
          </h1>

          {subtitle && (
            <p className="hero-fade-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-heritage-marble/70 lg:text-xl"
              style={{ animationDelay: '0.35s' }}>
              {subtitle}
            </p>
          )}

          <FactChips facts={facts} />

          {children && (
            <div className="hero-fade-in mt-10" style={{ animationDelay: '0.5s' }}>
              {children}
            </div>
          )}
        </div>

        <div className="hero-fade-in absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animationDelay: '1.2s' }} aria-hidden="true">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-heritage-marble/20 p-1">
            <div className="h-1.5 w-1 rounded-full bg-heritage-marble/50 animate-[scroll-hint_1.8s_ease-in-out_infinite]" />
          </div>
        </div>

        <style>{`
          @keyframes scroll-hint {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
        `}</style>
      </section>
    );
  }

  if (variant === 'page') {
    return (
      <section
        className="relative flex min-h-[60vh] items-end overflow-hidden bg-heritage-charcoal text-heritage-marble"
        aria-labelledby="hero-title"
      >
        {image && (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true">
            <div className="absolute inset-0 bg-heritage-charcoal/60" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal via-heritage-charcoal/60 to-transparent" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-8 lg:pb-20 lg:pt-52">
          {eyebrow && (
            <p className="eyebrow hero-fade-in mb-4 text-heritage-bronze-light" style={{ animationDelay: '0.1s' }}>
              {eyebrow}
            </p>
          )}
          <div className="heritage-rule mb-5 max-w-16" aria-hidden="true" />
          <h1 id="hero-title"
            className="hero-fade-in font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.2s' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="hero-fade-in mt-5 max-w-xl text-base leading-relaxed text-heritage-marble/70 lg:text-lg"
              style={{ animationDelay: '0.35s' }}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="hero-fade-in mt-8" style={{ animationDelay: '0.45s' }}>
              {children}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-heritage-cream pt-28 pb-12 lg:pt-36 lg:pb-16" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {eyebrow && (
          <p className="eyebrow hero-fade-in mb-3" style={{ animationDelay: '0.05s' }}>{eyebrow}</p>
        )}
        <h1 id="hero-title"
          className="hero-fade-in font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          style={{ animationDelay: '0.1s' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="hero-fade-in mt-4 max-w-2xl text-base leading-relaxed text-heritage-charcoal/60 lg:text-lg"
            style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="hero-fade-in mt-6" style={{ animationDelay: '0.3s' }}>{children}</div>
        )}
      </div>
    </section>
  );
}
