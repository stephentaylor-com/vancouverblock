import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Camera, Image, Info, Filter, Expand } from 'lucide-react';
import { galleryItems, galleryCategories } from '../../data/galleryItems.js';
import Lightbox from '../ui/Lightbox.jsx';

// Deterministic gradient palette for placeholders
const placeholderGradients = [
  'from-heritage-cream via-heritage-terracotta/60 to-heritage-bronze/30',
  'from-heritage-clock-glass via-heritage-cream/80 to-heritage-terracotta/40',
  'from-heritage-archive via-heritage-cream to-heritage-bronze/20',
  'from-heritage-blue/20 via-heritage-clock-glass/60 to-heritage-cream',
  'from-heritage-terracotta/40 via-heritage-cream to-heritage-archive/80',
  'from-heritage-charcoal/10 via-heritage-cream/90 to-heritage-terracotta/30',
];

function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const prefersReducedMotion = useReducedMotion();
  const gradientIndex = (typeof item.id === 'number' ? item.id - 1 : index) % placeholderGradients.length;

  return (
    <motion.article
      ref={ref}
      layout
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      className="group rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${placeholderGradients[gradientIndex]} flex flex-col items-center justify-center p-6`}>
            <Camera className="w-8 h-8 text-heritage-bronze/30 mb-2" aria-hidden="true" />
            <span className="font-display text-sm font-semibold text-heritage-charcoal/40 text-center leading-snug">
              {item.title}
            </span>
            <span className="font-body text-[10px] text-heritage-charcoal/25 mt-1">
              Image Pending
            </span>
          </div>
        )}

        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/85 backdrop-blur-sm border border-white/30 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/70 shadow-sm">
            {item.category}
          </span>
        </div>

        {/* Date badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full bg-heritage-charcoal/70 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-marble shadow-sm">
            {item.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-display text-base font-semibold text-heritage-charcoal mb-1.5 leading-snug">
          {item.title}
        </h3>
        <p className="font-body text-xs text-heritage-charcoal/65 leading-relaxed mb-3">
          {item.caption}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-body text-[10px] text-heritage-charcoal/40">
              {item.source}
            </span>
            {item.license && item.license !== 'Pending' && (
              <span className="inline-flex items-center rounded-full bg-heritage-cream/60 border border-heritage-cream-dark/20 px-2 py-0.5 text-[9px] font-body font-medium text-heritage-charcoal/45">
                {item.license}
              </span>
            )}
          </div>
          <div
            className="w-7 h-7 rounded-lg bg-heritage-cream/60 flex items-center justify-center group-hover:bg-heritage-cream transition-colors duration-200"
            aria-hidden="true"
          >
            <Expand className="w-3.5 h-3.5 text-heritage-charcoal/50" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function FilterBar({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14" role="group" aria-label="Filter gallery by category">
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

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="eyebrow">Visual Archive</span>
          <h2
            id="gallery-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Gallery
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Photographs and images documenting Vancouver Block's architecture, details, history,
            and place on Granville Street.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Filter bar */}
        <FilterBar
          categories={galleryCategories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} onClick={() => openLightbox(i)} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Image className="w-8 h-8 text-heritage-charcoal/20 mx-auto mb-3" aria-hidden="true" />
            <p className="font-body text-sm text-heritage-charcoal/50">
              No images found for this category.
            </p>
          </div>
        )}

        {/* Source note */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10 font-body text-xs text-heritage-charcoal/40 max-w-lg mx-auto flex items-center justify-center gap-1.5"
        >
          <Info className="w-3 h-3 shrink-0" aria-hidden="true" />
          Images are used under applicable licenses. Placeholder entries indicate photographs
          being sourced or awaiting rights confirmation.
        </motion.p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
