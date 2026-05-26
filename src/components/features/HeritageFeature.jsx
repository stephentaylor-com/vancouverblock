import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { heritageStatus } from '../../data/heritageStatus.js';

const MILESTONES = heritageStatus.milestones;
const FEATURES = heritageStatus.features;

const STATUS_BADGES = [
  { label: 'Active Commercial Use', color: 'bg-green-500' },
  { label: 'Class A Heritage', color: 'bg-heritage-bronze' },
  { label: 'National Register', color: 'bg-heritage-neon-blue' },
];

function MilestoneTimeline({ milestones, inView, prefersReducedMotion }) {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <motion.div
        initial={prefersReducedMotion ? {} : { scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px origin-top"
        style={{ background: 'linear-gradient(to bottom, #B8956A, rgba(184,149,106,0.15))' }}
        aria-hidden="true"
      />

      <div className="space-y-10 md:space-y-12">
        {milestones.map((milestone, i) => (
          <motion.div
            key={milestone.year}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2 + i * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-start gap-5 md:gap-6"
          >
            {/* Timeline node */}
            <div className="relative z-10 shrink-0">
              <div className="w-[31px] h-[31px] md:w-[39px] md:h-[39px] rounded-full border-2 border-heritage-bronze bg-heritage-charcoal flex items-center justify-center">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-heritage-bronze-light" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-0.5">
              <span className="font-display text-3xl md:text-4xl font-bold text-heritage-bronze-light tabular-nums tracking-tight">
                {milestone.year}
              </span>
              <h3 className="font-display text-lg md:text-xl font-semibold text-heritage-marble mt-1 tracking-tight">
                {milestone.title}
              </h3>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-heritage-bronze/70 mt-1.5 font-body">
                {milestone.authority}
              </p>
              <p className="text-sm leading-relaxed text-heritage-marble/45 font-body mt-2.5 max-w-sm">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function HeritageFeature() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-40px' });
  const imageInView = useInView(imageRef, { once: true, margin: '-40px' });

  const fade = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="heritage-overview"
      ref={sectionRef}
      className="relative overflow-hidden bg-heritage-charcoal"
      aria-labelledby="heritage-feature-heading"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      {/* Ambient bronze glow — bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.035] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B8956A 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* ─── HEADER ─── */}
        <div ref={headerRef} className="relative mb-16 md:mb-20">
          {/* Large decorative background text */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -top-4 md:-top-8 left-0 select-none pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none text-white/[0.02] whitespace-nowrap">
              Heritage
            </span>
          </motion.div>

          <motion.p
            {...fade(0)}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-heritage-bronze-light/70 mb-4 font-body"
          >
            Heritage Status
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0 }}
            animate={headerInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-12 mb-6 origin-left"
            style={{ background: 'linear-gradient(to right, #B8956A, transparent)' }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-2 lg:gap-16 items-end">
            <motion.h2
              {...fade(0.1)}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              id="heritage-feature-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-heritage-marble leading-[0.95]"
            >
              Protected<br />
              <span className="text-heritage-bronze-light">Heritage.</span>
            </motion.h2>

            <motion.p
              {...fade(0.2)}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              className="mt-6 lg:mt-0 text-base md:text-lg leading-relaxed text-heritage-marble/45 font-body max-w-lg"
            >
              Vancouver Block is recognized at both the municipal and national level as a place of lasting historical and architectural significance.
            </motion.p>
          </div>
        </div>

        {/* ─── MAIN CONTENT GRID ─── */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left column — milestones + stewardship */}
          <div ref={contentRef} className="lg:col-span-7 space-y-16">
            {/* Milestones timeline */}
            <MilestoneTimeline
              milestones={MILESTONES}
              inView={contentInView}
              prefersReducedMotion={prefersReducedMotion}
            />

            {/* Stewardship editorial block */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="h-px mb-10"
                style={{ background: 'linear-gradient(to right, rgba(184,149,106,0.2), transparent 60%)' }}
                aria-hidden="true"
              />

              <div className="flex items-start gap-4 md:gap-5">
                {/* Decorative rule */}
                <div className="shrink-0 mt-2">
                  <div className="w-px h-20 md:h-24" style={{ background: 'linear-gradient(to bottom, #B8956A, transparent)' }} />
                </div>

                <div className="space-y-4">
                  <p className="text-[0.9375rem] md:text-base leading-[1.8] text-heritage-marble/50 font-body italic">
                    Heritage designation does not freeze a building in time. It provides a framework for thoughtful stewardship — ensuring that the building's character-defining elements are preserved while allowing it to remain a functional, productive part of the city.
                  </p>
                  <p className="text-sm leading-relaxed text-heritage-marble/35 font-body">
                    Vancouver Block is managed by Equitable Real Estate Investment Corp., which oversees its ongoing commercial operations and conservation care.
                  </p>
                </div>
              </div>

              {/* Status badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {STATUS_BADGES.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-[0.6875rem] font-body font-medium text-heritage-marble/50"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.color}`} aria-hidden="true" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — image + protected features overlay */}
          <div ref={imageRef} className="lg:col-span-5">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.97 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/40 ring-1 ring-white/[0.06]">
                <img
                  src="/images/features/terracotta-capital.jpg"
                  alt="Terracotta ornamental capital — one of the protected heritage features of Vancouver Block"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for readability of card below */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Protected features card — overlaying bottom of image */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={imageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 inset-x-0 mx-3 mb-3 md:mx-4 md:mb-4"
              >
                <div className="bg-heritage-charcoal/90 backdrop-blur-md border border-white/[0.08] rounded-xl p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-4 h-4 text-heritage-bronze-light" aria-hidden="true" />
                    <h3 className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-heritage-bronze-light font-body">
                      Protected Features
                    </h3>
                  </div>

                  <ul className="space-y-2.5" role="list">
                    {FEATURES.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -8 }}
                        animate={imageInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle
                          className="w-3.5 h-3.5 text-heritage-bronze-light/60 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-[0.8125rem] leading-relaxed text-heritage-marble/50 font-body">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 md:mt-10"
            >
              <Link
                to="/heritage-status"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-heritage-bronze-light/80 hover:text-heritage-marble border border-heritage-bronze-light/20 hover:border-heritage-marble/25 rounded-full px-6 py-3 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-heritage-bronze-light"
              >
                Learn About Heritage Status
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom transition line */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(184,149,106,0.12) 20%, rgba(184,149,106,0.12) 80%, transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
