import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Clock, Train, ArrowRight, Mail } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: MapPin,
    label: 'Address',
    primary: '736 Granville Street',
    secondary: 'Vancouver, BC V6Z 1A1',
    detail: 'Corner of Granville & West Georgia',
  },
  {
    icon: Clock,
    label: 'Lobby Access',
    primary: 'Weekday Building Hours',
    secondary: 'The public lobby may be accessible during regular building hours.',
    detail: 'Special tours and heritage events organized periodically.',
  },
  {
    icon: Train,
    label: 'Getting There',
    primary: 'Granville SkyTrain Station',
    secondary: 'Steps from the station and multiple bus routes.',
    detail: "Heart of Vancouver's downtown commercial district.",
  },
];

export default function VisitFeature() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-40px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  const fade = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="relative overflow-hidden bg-heritage-charcoal"
      aria-labelledby="visit-feature-heading"
    >
      {/* ─── HERO IMAGE ─── */}
      <div ref={heroRef} className="relative h-[70vh] min-h-[480px] lg:h-[80vh] lg:min-h-[580px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={prefersReducedMotion ? {} : { y: heroY }}
        >
          <img
            src="/images/gallery/tower-blue-sky.jpg"
            alt="The Vancouver Block clock tower rising against a clear blue sky, viewed from Granville Street"
            loading="lazy"
            decoding="async"
            className="w-full h-[115%] object-cover object-center"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal via-heritage-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-charcoal/50 via-transparent to-heritage-charcoal/30" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-heritage-charcoal to-transparent" />

        {/* Content lockup — positioned at bottom of hero */}
        <div ref={contentRef} className="absolute inset-x-0 bottom-0 pb-16 md:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.p
              {...fade(0)}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              className="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-heritage-bronze-light/80 mb-4 font-body"
            >
              Visit
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0 }}
              animate={contentInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-12 mb-6 origin-left"
              style={{ background: 'linear-gradient(to right, #B8956A, transparent)' }}
              aria-hidden="true"
            />

            <motion.h2
              {...fade(0.1)}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              id="visit-feature-heading"
              className="font-display text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-heritage-marble leading-[0.88]"
            >
              See Vancouver<br />
              <span className="text-heritage-bronze-light">Block.</span>
            </motion.h2>

            <motion.p
              {...fade(0.2)}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              className="mt-5 max-w-md text-base md:text-lg leading-relaxed text-heritage-marble/55 font-body italic"
            >
              The best way to experience a heritage building is to stand in front of it.
            </motion.p>

            {/* Prominent address */}
            <motion.div
              {...fade(0.3)}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              className="mt-8 flex items-center gap-3"
            >
              <MapPin className="w-5 h-5 text-heritage-bronze-light shrink-0" aria-hidden="true" />
              <span className="font-display text-xl md:text-2xl font-semibold text-heritage-marble tracking-tight">
                736 Granville Street
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── INFO CARDS ─── */}
      <div ref={cardsRef} className="relative z-10 bg-heritage-charcoal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-2">
          <div className="grid gap-3 md:gap-4 md:grid-cols-3">
            {INFO_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.1] transition-colors duration-500 p-5 md:p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-heritage-bronze/10">
                      <Icon className="w-4 h-4 text-heritage-bronze-light" aria-hidden="true" />
                    </div>
                    <span className="text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-heritage-bronze-light/60 font-body">
                      {card.label}
                    </span>
                  </div>

                  <h3 className="font-display text-base md:text-lg font-semibold text-heritage-marble tracking-tight mb-1.5">
                    {card.primary}
                  </h3>
                  <p className="text-[0.8125rem] leading-relaxed text-heritage-marble/45 font-body mb-1.5">
                    {card.secondary}
                  </p>
                  <p className="text-[0.75rem] leading-relaxed text-heritage-marble/30 font-body">
                    {card.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ─── CTAs ─── */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 md:mt-12"
          >
            <Link
              to="/tours"
              className="inline-flex items-center gap-2.5 font-body text-sm font-semibold bg-heritage-bronze-light text-heritage-charcoal hover:bg-heritage-marble rounded-full px-7 py-3.5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-heritage-bronze-light"
            >
              Plan a Visit
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-heritage-marble/60 hover:text-heritage-marble border border-white/[0.1] hover:border-white/[0.2] rounded-full px-6 py-3 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-heritage-bronze-light"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Bottom spacing + seamless transition to footer */}
        <div className="h-20 md:h-24 lg:h-28" />
      </div>
    </section>
  );
}
