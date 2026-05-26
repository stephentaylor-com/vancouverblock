import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Shield, Award, Flag, Scroll, CheckCircle, Heart } from 'lucide-react';
import { heritageStatus } from '../../data/heritageStatus.js';

const iconMap = {
  scroll: Scroll,
  award: Award,
  flag: Flag,
};

function MilestoneBadge({ milestone, index, compact }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const prefersReducedMotion = useReducedMotion();

  const Icon = iconMap[milestone.icon] || Shield;

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.175, 0.885, 0.32, 1.275],
      }}
      className={`relative rounded-2xl border-2 border-heritage-bronze/20 bg-white/80 backdrop-blur shadow-sm overflow-hidden group hover:border-heritage-bronze/40 transition-colors duration-300 ${
        compact ? 'p-4' : 'p-6 md:p-8'
      }`}
    >
      {/* Stamp corner marks */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-heritage-bronze/20 rounded-tl-sm" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-heritage-bronze/20 rounded-tr-sm" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-heritage-bronze/20 rounded-bl-sm" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-heritage-bronze/20 rounded-br-sm" />

      {/* Faint stamp watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Icon className="w-32 h-32 text-heritage-bronze" aria-hidden="true" />
      </div>

      <div className="relative z-10">
        {/* Year badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className={`inline-flex items-center justify-center rounded-lg bg-heritage-charcoal text-heritage-marble font-display font-bold ${
            compact ? 'px-3 py-1 text-sm' : 'px-4 py-1.5 text-base'
          }`}>
            {milestone.year}
          </span>
          <div className={`flex items-center justify-center rounded-full bg-heritage-cream ${
            compact ? 'w-8 h-8' : 'w-10 h-10'
          }`}>
            <Icon className={`text-heritage-bronze ${compact ? 'w-4 h-4' : 'w-5 h-5'}`} aria-hidden="true" />
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-display font-semibold text-heritage-charcoal ${
          compact ? 'text-base mb-1' : 'text-lg md:text-xl mb-2'
        }`}>
          {milestone.title}
        </h3>

        {/* Authority */}
        <p className={`eyebrow mb-2 ${compact ? 'text-[10px]' : ''}`}>
          {milestone.authority}
        </p>

        {/* Description */}
        {!compact && (
          <p className="font-body text-sm text-heritage-charcoal/70 leading-relaxed">
            {milestone.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function FeatureItem({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex items-start gap-3"
    >
      <CheckCircle className="w-4 h-4 text-heritage-bronze mt-0.5 shrink-0" aria-hidden="true" />
      <span className="font-body text-sm text-heritage-charcoal/80 leading-relaxed">{feature}</span>
    </motion.li>
  );
}

export default function HeritageBadgePanel({ compact = false }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className={`relative ${compact ? 'py-12' : 'py-20 md:py-28'}`}
      aria-labelledby="heritage-status-heading"
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? '' : ''}`}>
        {/* Header */}
        {!compact && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="eyebrow">Official Recognition</span>
            <h2
              id="heritage-status-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
            >
              Heritage Status
            </h2>
            <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
              Vancouver Block holds the highest municipal heritage classification
              and is recognized at the national level as a place of historic significance.
            </p>
            <div className="heritage-rule max-w-xs mx-auto mt-6" />
          </motion.div>
        )}

        {/* Milestone badges */}
        <div className={`grid gap-4 md:gap-6 mb-10 md:mb-14 ${
          compact
            ? 'grid-cols-1 sm:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-3'
        }`}>
          {heritageStatus.milestones.map((milestone, i) => (
            <MilestoneBadge
              key={milestone.year}
              milestone={milestone}
              index={i}
              compact={compact}
            />
          ))}
        </div>

        {/* Protected features + Stewardship */}
        <div className={`grid gap-6 ${compact ? 'grid-cols-1' : 'md:grid-cols-2 gap-8'}`}>
          {/* Protected features */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-heritage-bronze" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-heritage-charcoal">
                Protected Features
              </h3>
            </div>
            <ul className="space-y-2.5" role="list">
              {heritageStatus.features.map((feature, i) => (
                <FeatureItem key={i} feature={feature} index={i} />
              ))}
            </ul>
          </motion.div>

          {/* Stewardship note */}
          {!compact && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-2xl border border-heritage-bronze/15 bg-heritage-cream/40 backdrop-blur shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-heritage-bronze" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-heritage-charcoal">
                    Stewardship
                  </h3>
                </div>
                <p className="font-body text-sm text-heritage-charcoal/75 leading-relaxed mb-4">
                  Heritage designation does not freeze a building in time. It provides a framework for
                  thoughtful stewardship — ensuring that the building's character-defining elements are
                  preserved while allowing it to remain a functional, productive part of the city.
                </p>
                <p className="font-body text-sm text-heritage-charcoal/75 leading-relaxed">
                  Vancouver Block is managed by Equitable Real Estate Investment Corp., which oversees
                  its ongoing commercial operations and conservation care.
                </p>
              </div>

              {/* Status pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-charcoal/5 border border-heritage-charcoal/10 px-3 py-1 text-xs font-body font-medium text-heritage-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                  Active Commercial Use
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-charcoal/5 border border-heritage-charcoal/10 px-3 py-1 text-xs font-body font-medium text-heritage-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-bronze" aria-hidden="true" />
                  Class A Heritage
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-charcoal/5 border border-heritage-charcoal/10 px-3 py-1 text-xs font-body font-medium text-heritage-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-neon-blue" aria-hidden="true" />
                  National Register
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
