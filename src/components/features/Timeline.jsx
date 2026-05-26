import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { timeline as defaultTimeline } from '../../data/timeline.js';

const categoryColors = {
  'Vancouver History': { bg: 'bg-heritage-neon-blue/10', text: 'text-heritage-neon-blue', border: 'border-heritage-neon-blue/20' },
  'Construction': { bg: 'bg-heritage-bronze/10', text: 'text-heritage-bronze', border: 'border-heritage-bronze/20' },
  'Heritage': { bg: 'bg-green-500/10', text: 'text-green-700', border: 'border-green-500/20' },
  'Clock Tower': { bg: 'bg-heritage-neon-red/10', text: 'text-heritage-neon-red', border: 'border-heritage-neon-red/20' },
  'Restoration': { bg: 'bg-purple-500/10', text: 'text-purple-700', border: 'border-purple-500/20' },
};

function TimelineEntry({ entry, index, isLeft }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();

  const colors = categoryColors[entry.category] || {
    bg: 'bg-heritage-charcoal/5',
    text: 'text-heritage-charcoal/70',
    border: 'border-heritage-charcoal/10',
  };

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30, x: isLeft ? -20 : 20 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Mobile dot on the left line */}
      <div className="absolute left-[7px] top-2 w-4 h-4 rounded-full border-2 border-heritage-bronze bg-heritage-marble z-10 md:hidden" />

      {/* Content card */}
      <div className={`flex-1 ml-8 md:ml-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <div className={`rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-5 md:p-6 hover:shadow-md transition-shadow duration-300 ${
          isLeft ? 'md:ml-auto' : 'md:mr-auto'
        } max-w-lg`}>
          {/* Year */}
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <span className="font-display text-2xl md:text-3xl font-bold text-heritage-charcoal">
              {entry.year}
            </span>
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-body font-medium border ${colors.bg} ${colors.text} ${colors.border}`}>
              {entry.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-base md:text-lg font-semibold text-heritage-charcoal mb-2">
            {entry.title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-heritage-charcoal/70 leading-relaxed">
            {entry.description}
          </p>

          {/* Photo */}
          {entry.image && (
            <div className="mt-3 rounded-lg overflow-hidden">
              <img
                src={entry.image}
                alt={entry.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              {entry.imageCredit && (
                <p className={`font-body text-[10px] text-heritage-charcoal/40 mt-1 ${isLeft ? 'md:text-right' : ''}`}>
                  {entry.imageCredit}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Center dot — desktop only */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 z-10">
        <div className="w-4 h-4 rounded-full border-2 border-heritage-bronze bg-heritage-marble shadow-sm" />
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14" role="group" aria-label="Filter timeline by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`rounded-full px-4 py-1.5 text-xs font-body font-medium border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-heritage-bronze ${
            activeCategory === cat
              ? 'bg-heritage-charcoal text-heritage-marble border-heritage-charcoal'
              : 'bg-white/60 text-heritage-charcoal/70 border-black/10 hover:bg-heritage-cream/60 hover:border-heritage-bronze/20'
          }`}
          aria-pressed={activeCategory === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default function Timeline({
  items,
  layout = 'center',
  showCategories = true,
  maxItems,
}) {
  const timelineData = items || defaultTimeline;
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const categories = ['All', ...new Set(timelineData.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? timelineData
    : timelineData.filter((item) => item.category === activeCategory);

  const displayItems = maxItems ? filtered.slice(0, maxItems) : filtered;
  const hasMore = maxItems && filtered.length > maxItems;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="eyebrow">From 1886 to Today</span>
          <h2
            id="timeline-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Timeline
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Key moments in the history of Vancouver Block and the city that built it.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Category filter */}
        {showCategories && (
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        )}

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-px bg-gradient-to-b from-heritage-bronze/40 via-heritage-bronze/20 to-transparent"
            aria-hidden="true"
          />

          {/* Left line — mobile */}
          <div
            className="md:hidden absolute left-[14px] top-0 bottom-0 w-px bg-gradient-to-b from-heritage-bronze/40 via-heritage-bronze/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {displayItems.map((entry, i) => (
              <TimelineEntry
                key={`${entry.year}-${entry.title}`}
                entry={entry}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>

          {/* Terminal dot */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="w-3 h-3 rounded-full bg-heritage-bronze/30" />
          </div>
          <div className="md:hidden flex mt-6">
            <div className="ml-[11px] w-3 h-3 rounded-full bg-heritage-bronze/30" />
          </div>
        </div>

        {/* View more link */}
        {hasMore && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/history"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-heritage-bronze hover:text-heritage-charcoal border border-heritage-bronze/30 hover:border-heritage-charcoal/20 rounded-full px-6 py-3 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-heritage-bronze"
            >
              View Full Timeline
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
