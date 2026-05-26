import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { value: '4', unit: '', label: 'Illuminated Faces' },
  { value: '22', unit: 'ft', label: 'Diameter Per Dial' },
  { value: '1912', unit: '', label: 'In Service Since' },
  { value: '112', unit: '+', label: 'Years Keeping Time' },
];

const DETAIL_IMAGES = [
  { src: '/images/features/clock-corner-detail.jpg', alt: 'Terracotta rosette ornament on the clock tower corner' },
  { src: '/images/gallery/clock-mechanism-gears.jpg', alt: 'Brass winding gears of the original 1912 clock mechanism' },
  { src: '/images/features/clock-neon-detail.jpg', alt: 'Neon tubing tracing the outline of a clock hand' },
  { src: '/images/gallery/tower-detail.jpg', alt: 'Terracotta cornice and projecting detail on the clock tower' },
];

export default function ClockTowerFeature() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const proseRef = useRef(null);
  const mosaicRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const heroInView = useInView(heroRef, { once: true, margin: '-80px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' });
  const proseInView = useInView(proseRef, { once: true, margin: '-60px' });
  const mosaicInView = useInView(mosaicRef, { once: true, margin: '-40px' });

  // Parallax on the hero image
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['-8%', '4%']);

  const fade = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0C1A28]"
      aria-labelledby="clock-tower-home-heading"
    >
      {/* ─── HERO IMAGE ─── */}
      <div ref={heroRef} className="relative h-[75vh] min-h-[520px] lg:h-[90vh] lg:min-h-[640px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={prefersReducedMotion ? {} : { y: heroY }}
        >
          <img
            src="/images/features/clock-face-city.jpg"
            alt="The Vancouver Block clock face framing the downtown skyline at golden hour"
            loading="lazy"
            decoding="async"
            className="w-full h-[115%] object-cover object-center"
          />
        </motion.div>

        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A28] via-[#0C1A28]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A28]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0C1A28] to-transparent" />

        {/* Title lockup */}
        <div className="absolute inset-x-0 bottom-0 pb-14 md:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.p
              {...fade(0)}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-heritage-bronze-light/80 mb-4"
            >
              The Crown
            </motion.p>
            <motion.div
              {...fade(0.05)}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="h-px w-12 mb-6"
              style={{ background: 'linear-gradient(to right, #B8956A, transparent)' }}
              aria-hidden="true"
            />
            <motion.h2
              {...fade(0.12)}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              id="clock-tower-home-heading"
              className="font-display text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-heritage-marble leading-[0.88]"
            >
              The Clock<br />Tower
            </motion.h2>
            <motion.p
              {...fade(0.2)}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="mt-5 max-w-md text-base md:text-lg leading-relaxed text-heritage-marble/55 font-body"
            >
              Since 1912, four illuminated faces have marked the hours above Granville Street — a civic interface between architecture and the life of the city.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ─── STATS BAR ─── */}
      <div ref={statsRef} className="relative z-10 bg-[#0C1A28] border-y border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.05]">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="py-8 md:py-10 text-center"
              >
                <span className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-heritage-bronze-light tabular-nums tracking-tight">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-base md:text-lg lg:text-xl text-heritage-bronze/50 ml-0.5 font-body font-medium">
                      {stat.unit}
                    </span>
                  )}
                </span>
                <span className="block mt-1.5 text-[0.625rem] md:text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-heritage-marble/35 font-body">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── EDITORIAL CONTENT ─── */}
      <div ref={proseRef} className="relative py-20 md:py-28 lg:py-32">
        {/* Ambient glow */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-[0.035] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B8956A 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            {/* Prose column */}
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={proseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-heritage-marble mb-2 tracking-tight">
                An Urban Interface
              </h3>
              <div className="space-y-5 text-[0.9375rem] md:text-base leading-[1.8] text-heritage-marble/55 font-body">
                <p>
                  The clock tower did not simply tell time. It announced the building's presence on
                  the skyline, oriented pedestrians along Granville Street, and — once electrified in
                  the 1920s — joined the neon-lit visual culture that defined Vancouver's most
                  important commercial corridor.
                </p>
                <p>
                  Four clock faces turned private enterprise into public infrastructure, giving the
                  city a shared reference point visible from every direction. Rising above the
                  commercial streetwall, the tower marked the building on the skyline and drew the
                  eye upward from the sidewalk to the sky.
                </p>
                <p>
                  Neon illumination in the late 1920s transformed the tower into a nighttime beacon,
                  connecting the building to Granville Street's culture of electric spectacle. The
                  clock became an icon — a visible intersection of heritage and modernity that
                  continues to define the building's public identity.
                </p>
              </div>
            </motion.div>

            {/* Feature image */}
            <motion.div
              className="lg:col-span-5"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.97 }}
              animate={proseInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/40 ring-1 ring-white/[0.06]">
                  <img
                    src="/images/features/clock-neon-hands.jpg"
                    alt="Neon-outlined clock hands glowing against the translucent glass face with the city beyond"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating caption */}
                <div className="absolute -bottom-4 -left-3 md:-bottom-5 md:-left-5 bg-[#0C1A28]/95 backdrop-blur-sm border border-white/[0.06] rounded-xl px-4 py-3 max-w-[220px]">
                  <p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-heritage-bronze-light font-body">
                    Neon Since the 1920s
                  </p>
                  <p className="mt-1 text-[0.6875rem] text-heritage-marble/40 leading-relaxed font-body">
                    Connecting the tower to Granville Street's electric culture.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── DETAIL MOSAIC ─── */}
      <div ref={mosaicRef} className="relative pb-16 md:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="h-px mb-10 md:mb-14"
            style={{ background: 'linear-gradient(to right, transparent, rgba(184,149,106,0.15), transparent)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3.5">
            {DETAIL_IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
                animate={mosaicInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-square rounded-xl overflow-hidden group ring-1 ring-white/[0.05]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A28]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={mosaicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 md:mt-16 text-center"
          >
            <Link
              to="/architecture#clock-tower"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-heritage-bronze-light/80 hover:text-heritage-marble border border-heritage-bronze-light/20 hover:border-heritage-marble/25 rounded-full px-6 py-3 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-heritage-bronze-light"
            >
              Explore the Architecture
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
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
