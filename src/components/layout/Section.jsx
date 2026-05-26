const VARIANTS = {
  light: 'bg-heritage-marble',
  cream: 'bg-heritage-cream',
  dark: 'bg-heritage-charcoal text-heritage-marble',
  archive: 'bg-heritage-archive',
};

/**
 * Section — reusable content section wrapper with consistent spacing and typography.
 */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  variant = 'light',
  children,
  className = '',
}) {
  const isDark = variant === 'dark';

  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${VARIANTS[variant] || VARIANTS.light} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        {(eyebrow || title || subtitle) && (
          <div className="mb-12 max-w-3xl lg:mb-16">
            {eyebrow && (
              <p className={`eyebrow section-reveal mb-3 ${isDark ? 'text-heritage-bronze-light' : ''}`}>
                {eyebrow}
              </p>
            )}

            {eyebrow && title && (
              <div
                className={`heritage-rule mb-5 max-w-12 ${isDark ? 'opacity-40' : ''}`}
                aria-hidden="true"
              />
            )}

            {title && (
              <h2 className="section-reveal font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className={`section-reveal mt-4 text-base leading-relaxed lg:text-lg ${
                isDark ? 'text-heritage-marble/60' : 'text-heritage-charcoal/60'
              }`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Section body */}
        {children}
      </div>
    </section>
  );
}
