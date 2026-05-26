import * as LucideIcons from 'lucide-react';

/**
 * StatCard — prominent stat display.
 *
 * @param {Object} props
 * @param {string} props.label - Small label above the value
 * @param {string|number} props.value - The main statistic
 * @param {string} props.icon - Lucide icon name (e.g. "Clock", "Building2")
 * @param {string} props.description - Optional explanation text
 */
export default function StatCard({ label, value, icon, description }) {
  const IconComponent = icon && LucideIcons[icon] ? LucideIcons[icon] : null;

  return (
    <div className="group relative rounded-2xl border border-black/5 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-8">
      {/* Icon */}
      {IconComponent && (
        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
          <IconComponent size={18} aria-hidden="true" />
        </div>
      )}

      {/* Label */}
      {label && (
        <p className="eyebrow mb-2">{label}</p>
      )}

      {/* Value */}
      <p className="font-display text-3xl font-bold tracking-tight text-heritage-charcoal lg:text-4xl">
        {value}
      </p>

      {/* Description */}
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/50">
          {description}
        </p>
      )}
    </div>
  );
}
