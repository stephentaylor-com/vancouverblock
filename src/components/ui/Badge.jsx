const VARIANT_CLASSES = {
  heritage:
    'bg-heritage-bronze/15 text-heritage-bronze border-heritage-bronze/20',
  status:
    'bg-emerald-50 text-emerald-700 border-emerald-200',
  category:
    'bg-heritage-cream text-heritage-charcoal/70 border-heritage-cream-dark/40',
};

/**
 * Badge — small pill-shaped label.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'heritage'|'status'|'category'} props.variant
 * @param {string} props.className
 */
export default function Badge({
  children,
  variant = 'heritage',
  className = '',
}) {
  const classes = [
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.1em] leading-none',
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.heritage,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
}
