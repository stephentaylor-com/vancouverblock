import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import {
  UserRound, Compass, Users, MapPin, TrainFront, Factory,
  Building2, Lightbulb, HeartHandshake, Filter, Layers,
} from 'lucide-react';
import { entrepreneurialHistory, entrepreneurialCategories } from '../../data/entrepreneurialHistory.js';

const iconMap = {
  'user-round': UserRound,
  'compass': Compass,
  'users': Users,
  'map-pin': MapPin,
  'train-front': TrainFront,
  'factory': Factory,
  'building-2': Building2,
  'lightbulb': Lightbulb,
  'heart-handshake': HeartHandshake,
};

const categoryAccents = {
  People: { ring: 'ring-heritage-neon-blue/20', dot: 'bg-heritage-neon-blue' },
  Places: { ring: 'ring-heritage-bronze/20', dot: 'bg-heritage-bronze' },
  Industries: { ring: 'ring-heritage-neon-red/20', dot: 'bg-heritage-neon-red' },
  Infrastructure: { ring: 'ring-purple-500/20', dot: 'bg-purple-500' },
  Legacy: { ring: 'ring-green-600/20', dot: 'bg-green-600' },
};

function ExplorerCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[item.icon] || Layers;
  const accent = categoryAccents[item.category] || { ring: 'ring-heritage-charcoal/10', dot: 'bg-heritage-charcoal/50' };

  return (
    <motion.article
      ref={ref}
      layout
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 25, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -15, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      className={`relative rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group ring-1 ${accent.ring}`}
    >
      {/* Connection line hint (decorative) */}
      <div className="absolute -right-3 top-1/2 w-3 h-px bg-heritage-bronze/15 hidden lg:block" aria-hidden="true" />
      <div className="absolute -left-3 top-1/2 w-3 h-px bg-heritage-bronze/15 hidden lg:block" aria-hidden="true" />

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-heritage-cream flex items-center justify-center shrink-0 group-hover:bg-heritage-terracotta/30 transition-colors duration-300">
          <Icon className="w-5 h-5 text-heritage-bronze" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold text-heritage-charcoal leading-snug">
            {item.title}
          </h3>
          <p className="font-body text-xs text-heritage-charcoal/50 mt-0.5">
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-body text-xs font-medium text-heritage-charcoal/60 bg-heritage-cream/60 rounded-full px-2.5 py-0.5 border border-heritage-cream-dark/30">
          {item.dateRange}
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
          <span className="font-body text-[10px] font-medium text-heritage-charcoal/50 uppercase tracking-wider">
            {item.category}
          </span>
        </span>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-heritage-charcoal/70 leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Why it matters */}
      <div className="rounded-lg bg-heritage-archive/40 border border-heritage-cream-dark/20 p-3">
        <p className="font-body text-xs text-heritage-charcoal/60 leading-relaxed">
          <span className="font-medium text-heritage-bronze text-[10px] uppercase tracking-wider block mb-1">
            Why It Matters
          </span>
          {item.whyItMatters}
        </p>
      </div>
    </motion.article>
  );
}

function FilterBar({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14" role="group" aria-label="Filter entrepreneurial history by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`rounded-full px-4 py-1.5 text-xs font-body font-medium border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-heritage-bronze ${
            active === cat
              ? 'bg-heritage-charcoal text-heritage-marble border-heritage-charcoal shadow-sm'
              : 'bg-white/60 text-heritage-charcoal/70 border-black/10 hover:bg-heritage-cream/60 hover:border-heritage-bronze/20'
          }`}
          aria-pressed={active === cat}
        >
          {cat === 'All' && <Filter className="w-3 h-3 inline mr-1.5 -mt-0.5" aria-hidden="true" />}
          {cat}
        </button>
      ))}
    </div>
  );
}

export default function EntrepreneurialVancouverExplorer() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  const filtered = activeCategory === 'All'
    ? entrepreneurialHistory
    : entrepreneurialHistory.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="entrepreneurial-heading"
    >
      {/* Faint connection grid */}
      <div className="absolute inset-0 arch-grid-bg opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="eyebrow">Networks of Enterprise</span>
          <h2
            id="entrepreneurial-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Entrepreneurial Vancouver
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Vancouver Block did not exist in isolation. It was a node in a network of people,
            industries, infrastructure, and ideas that built a city from the ground up.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Filter bar */}
        <FilterBar
          categories={entrepreneurialCategories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <ExplorerCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Layers className="w-8 h-8 text-heritage-charcoal/20 mx-auto mb-3" aria-hidden="true" />
            <p className="font-body text-sm text-heritage-charcoal/50">
              No entries found for this category.
            </p>
          </div>
        )}

        {/* System note */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 font-body text-xs text-heritage-charcoal/40 max-w-lg mx-auto"
        >
          Each card represents a node in the network of enterprise, infrastructure, and culture
          that produced and sustained Vancouver Block for more than a century.
        </motion.p>
      </div>
    </section>
  );
}
