import { Link } from 'react-router-dom';

const VARIANT_CLASSES = {
  primary:
    'bg-heritage-charcoal text-heritage-marble hover:bg-heritage-bronze focus-visible:ring-heritage-bronze',
  secondary:
    'border border-heritage-bronze text-heritage-bronze hover:bg-heritage-bronze hover:text-white focus-visible:ring-heritage-bronze',
  ghost:
    'text-heritage-bronze hover:text-heritage-charcoal focus-visible:ring-heritage-bronze',
};

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

/**
 * Button — renders a <Link> for internal hrefs, <a> for external, <button> otherwise.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const classes = [
    baseClasses,
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
    SIZE_CLASSES[size] || SIZE_CLASSES.md,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    // Internal links use React Router Link
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }
    // External links use anchor
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
