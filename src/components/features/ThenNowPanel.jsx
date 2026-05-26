import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Camera, Clock, ArrowLeftRight, GripVertical } from 'lucide-react';
import { thenNowItems } from '../../data/thenNowItems.js';

function ImagePlaceholder({ label, variant }) {
  const isHistoric = variant === 'historic';

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-6 ${
      isHistoric
        ? 'bg-gradient-to-br from-heritage-archive via-heritage-cream to-heritage-terracotta/30'
        : 'bg-gradient-to-br from-heritage-clock-glass/30 via-heritage-marble to-heritage-cream/60'
    }`}>
      <Camera className={`w-8 h-8 mb-2 ${
        isHistoric ? 'text-heritage-bronze/25' : 'text-heritage-charcoal/15'
      }`} aria-hidden="true" />
      <span className={`font-body text-xs font-medium text-center ${
        isHistoric ? 'text-heritage-bronze/40' : 'text-heritage-charcoal/30'
      }`}>
        {label}
      </span>
    </div>
  );
}

function ComparisonCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      {/* Image comparison area */}
      <div className="relative">
        <div className="grid grid-cols-2">
          {/* Historic side */}
          <div className="relative aspect-[4/3] overflow-hidden border-r border-black/5">
            {item.historicImage ? (
              <img
                src={item.historicImage}
                alt={`Historical view: ${item.title}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            ) : (
              <ImagePlaceholder label="Historical Image" variant="historic" />
            )}

            {/* Year badge */}
            <div className="absolute bottom-2 left-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-heritage-charcoal/75 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-marble shadow-sm">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {item.historicYear}
              </span>
            </div>
          </div>

          {/* Modern side */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {item.modernImage ? (
              <img
                src={item.modernImage}
                alt={`Contemporary view: ${item.title}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            ) : (
              <ImagePlaceholder label="Contemporary Image" variant="modern" />
            )}

            {/* Year badge */}
            <div className="absolute bottom-2 right-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/70 shadow-sm">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {item.modernYear}
              </span>
            </div>
          </div>
        </div>

        {/* Center slider indicator (decorative) */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center z-10" aria-hidden="true">
          <div className="flex flex-col items-center">
            <div className="w-px h-full bg-white/60 absolute" />
            <div className="relative w-8 h-8 rounded-full bg-white shadow-md border border-black/10 flex items-center justify-center">
              <GripVertical className="w-4 h-4 text-heritage-charcoal/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-display text-lg font-semibold text-heritage-charcoal">
            {item.title}
          </h3>
          <span className="flex items-center gap-1 text-heritage-charcoal/30" aria-hidden="true">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center rounded-full bg-heritage-archive/60 border border-heritage-cream-dark/20 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/55">
            {item.historicYear}
          </span>
          <span className="text-heritage-charcoal/20 text-xs" aria-hidden="true">vs</span>
          <span className="inline-flex items-center rounded-full bg-heritage-clock-glass/30 border border-heritage-clock-glass/40 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/55">
            {item.modernYear}
          </span>
        </div>

        <p className="font-body text-sm text-heritage-charcoal/70 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ThenNowPanel() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="then-now-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow">Continuity & Change</span>
          <h2
            id="then-now-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Then & Now
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Compare historical and contemporary views of Vancouver Block and its surroundings.
            The building endures while the city transforms around it.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {thenNowItems.map((item, i) => (
            <ComparisonCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-10 font-body text-xs text-heritage-charcoal/40 max-w-md mx-auto"
        >
          Historical images courtesy of City of Vancouver Archives and BC Royal Museum Archives.
          Contemporary photography by Martin Knowles Photo/Media.
        </motion.p>
      </div>
    </section>
  );
}
