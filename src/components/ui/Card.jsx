import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

const VARIANT_CLASSES = {
  default:
    'rounded-2xl border border-black/10 bg-white/70 shadow-sm hover:shadow-md',
  heritage:
    'rounded-2xl border border-heritage-bronze/15 bg-heritage-cream/60 shadow-sm hover:shadow-md',
  dark:
    'rounded-2xl border border-white/10 bg-heritage-charcoal text-heritage-marble shadow-sm hover:shadow-md',
  glass:
    'rounded-2xl border border-white/20 bg-white/30 shadow-sm backdrop-blur-lg hover:shadow-md',
};

/**
 * Card — multi-variant content card.
 * Uses React Router Link for internal hrefs, anchor for external.
 */
export default function Card({
  title,
  eyebrow,
  children,
  variant = 'default',
  href,
  className = '',
  icon,
}) {
  const isDark = variant === 'dark';
  const isHeritage = variant === 'heritage';

  // Resolve lucide icon component from string name
  const IconComponent = icon && LucideIcons[icon] ? LucideIcons[icon] : null;

  const cardClasses = [
    'group relative transition-all duration-300 hover:-translate-y-0.5',
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.default,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {/* Heritage accent line */}
      {isHeritage && (
        <div
          className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-heritage-bronze/50 to-transparent"
          aria-hidden="true"
        />
      )}

      <div className="p-6 lg:p-8">
        {/* Icon */}
        {IconComponent && (
          <div
            className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
              isDark
                ? 'bg-heritage-marble/10 text-heritage-bronze-light'
                : 'bg-heritage-bronze/10 text-heritage-bronze'
            }`}
          >
            <IconComponent size={20} aria-hidden="true" />
          </div>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <p
            className={`eyebrow mb-2 ${
              isDark ? 'text-heritage-bronze-light' : ''
            }`}
          >
            {eyebrow}
          </p>
        )}

        {/* Title */}
        {title && (
          <h3
            className={`font-display text-lg font-semibold tracking-tight lg:text-xl ${
              isDark ? 'text-heritage-marble' : 'text-heritage-charcoal'
            }`}
          >
            {title}
            {href && (
              <span
                className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                &rarr;
              </span>
            )}
          </h3>
        )}

        {/* Body */}
        {children && (
          <div
            className={`mt-3 text-sm leading-relaxed ${
              isDark ? 'text-heritage-marble/60' : 'text-heritage-charcoal/60'
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    // Internal links use React Router Link
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={`block ${cardClasses}`}>
          {content}
        </Link>
      );
    }
    // External links use anchor
    return (
      <a href={href} className={`block ${cardClasses}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
