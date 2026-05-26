import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const STORIES = [
  {
    number: '01',
    eyebrow: 'Architecture',
    title: "The Architect's Story",
    description:
      'Parr & Fee designed a building that married Edwardian ornament with modern steel-frame engineering. The details of their work can still be read on every floor.',
    href: '/architecture',
    image: '/images/hero/architecture-hero.jpg',
    featured: true,
  },
  {
    number: '02',
    eyebrow: 'Enterprise',
    title: "The Entrepreneur's Story",
    description:
      "Dominic Burns wagered on Vancouver's future — and built a landmark to prove it. His story connects meatpacking, railways, and the ambitions of a booming port city.",
    href: '/entrepreneurial-vancouver',
  },
  {
    number: '03',
    eyebrow: 'History',
    title: "The Street's Story",
    description:
      "Granville Street transformed from a rough frontier road to one of Canada's most prominent commercial corridors. Vancouver Block witnessed every chapter.",
    href: '/history',
  },
  {
    number: '04',
    eyebrow: 'Clock Tower',
    title: "The Clock's Story",
    description:
      "Four illuminated faces mark the hours above Granville Street. The clock tower is both a mechanical marvel and an enduring piece of the city's public landscape.",
    href: '/architecture',
    image: '/images/gallery/clock-exterior.jpg',
  },
  {
    number: '05',
    eyebrow: 'Conservation',
    title: 'The Heritage Story',
    description:
      'Class A heritage designation and Canadian Register listing ensure that this building remains protected for future generations.',
    href: '/heritage-status',
  },
  {
    number: '06',
    eyebrow: 'Experience',
    title: "The Visitor's Story",
    description:
      'Whether you pass by daily or have never looked up, there is always something new to notice about Vancouver Block. Walking tours begin at the sidewalk.',
    href: '/tours',
  },
];

function FeaturedCard({ story, inView, prefersReducedMotion }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-2 lg:row-span-2"
    >
      <Link
        to={story.href}
        className="group relative block h-full rounded-2xl overflow-hidden ring-1 ring-white/[0.06] focus-visible:outline-2 focus-visible:outline-heritage-bronze-light"
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={story.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal via-heritage-charcoal/60 to-heritage-charcoal/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-charcoal/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-7 md:p-9 lg:p-10 min-h-[360px] lg:min-h-[480px]">
          {/* Chapter number */}
          <span className="absolute top-7 left-7 md:top-9 md:left-9 font-display text-[5rem] md:text-[7rem] font-bold leading-none text-white/[0.04] select-none" aria-hidden="true">
            {story.number}
          </span>

          <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-heritage-bronze-light mb-3 font-body">
            {story.eyebrow}
          </p>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-heritage-marble tracking-tight leading-[1.1] mb-3">
            {story.title}
            <ArrowUpRight
              className="inline-block ml-2 w-5 h-5 md:w-6 md:h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              aria-hidden="true"
            />
          </h3>
          <p className="text-sm md:text-[0.9375rem] leading-relaxed text-heritage-marble/50 font-body max-w-md">
            {story.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

function StoryCard({ story, index, inView, prefersReducedMotion }) {
  const hasImage = !!story.image;

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.15 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={story.href}
        className="group relative block rounded-2xl overflow-hidden ring-1 ring-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-heritage-bronze-light"
      >
        {/* Accent line at top */}
        <div
          className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to right, transparent, #B8956A, transparent)' }}
          aria-hidden="true"
        />

        {hasImage && (
          <div className="relative h-40 overflow-hidden">
            <img
              src={story.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal/90 via-heritage-charcoal/30 to-transparent" />
          </div>
        )}

        <div className={`relative p-6 md:p-7 ${hasImage ? '' : 'pt-6 md:pt-7'}`}>
          {/* Number + eyebrow row */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-2xl md:text-3xl font-bold text-heritage-bronze/30 leading-none tabular-nums">
              {story.number}
            </span>
            <div
              className="h-px flex-1"
              style={{ background: 'linear-gradient(to right, rgba(184,149,106,0.2), transparent)' }}
              aria-hidden="true"
            />
            <span className="text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-heritage-bronze-light/60 font-body">
              {story.eyebrow}
            </span>
          </div>

          <h3 className="font-display text-lg md:text-xl font-semibold text-heritage-marble tracking-tight mb-2 group-hover:text-heritage-bronze-light transition-colors duration-300">
            {story.title}
            <ArrowUpRight
              className="inline-block ml-1.5 w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              aria-hidden="true"
            />
          </h3>
          <p className="text-[0.8125rem] leading-relaxed text-heritage-marble/40 font-body">
            {story.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function StoriesFeature() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-40px' });

  const featured = STORIES.find((s) => s.featured);
  const rest = STORIES.filter((s) => !s.featured);

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="relative overflow-hidden bg-heritage-charcoal py-24 md:py-32 lg:py-36"
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      {/* Ambient bronze glow — top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B8956A 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Top transition gradient from marble to charcoal */}
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(23,23,23,0) 0%, rgba(23,23,23,0) 100%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ─── HEADER ─── */}
        <div ref={headerRef} className="relative mb-16 md:mb-20 lg:mb-24">
          {/* Large decorative background text */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -top-6 md:-top-10 left-0 select-none pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-display text-[6rem] md:text-[9rem] lg:text-[12rem] font-bold leading-none text-white/[0.02] whitespace-nowrap">
              Stories
            </span>
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-heritage-bronze-light/70 mb-4 font-body"
          >
            Explore
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
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-heritage-marble leading-[0.95]"
            >
              One Building.<br />
              <span className="text-heritage-bronze-light">Many Stories.</span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 lg:mt-0 text-base md:text-lg leading-relaxed text-heritage-marble/45 font-body max-w-lg"
            >
              Vancouver Block is a place where architecture, enterprise, heritage, and daily city life converge. Each perspective reveals something new.
            </motion.p>
          </div>
        </div>

        {/* ─── STORIES GRID ─── */}
        <div ref={gridRef} className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Featured card spans 2 rows on large screens */}
          {featured && (
            <FeaturedCard
              story={featured}
              inView={gridInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          )}

          {/* Remaining story cards */}
          {rest.map((story, i) => (
            <StoryCard
              key={story.number}
              story={story}
              index={i}
              inView={gridInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>

      {/* Bottom transition — subtle gradient into the Clock Tower deep navy */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(12,26,40,0.4))' }}
        aria-hidden="true"
      />
    </section>
  );
}
