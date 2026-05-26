import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Eye, Scan, DoorOpen, Gem, Clock, GitCompare,
  MapPin, Footprints, ArrowRight, Landmark,
} from 'lucide-react';
import { walkingTourStops as defaultStops, nearbyLandmarks } from '../../data/walkingTour.js';

const iconMap = {
  eye: Eye,
  scan: Scan,
  'door-open': DoorOpen,
  gem: Gem,
  clock: Clock,
  'git-compare': GitCompare,
};

function TourStop({ stop, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[stop.icon] || MapPin;

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
      className="relative flex gap-5 md:gap-8"
    >
      {/* Left column: number + line */}
      <div className="flex flex-col items-center shrink-0">
        {/* Stop number circle */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-heritage-charcoal text-heritage-marble flex items-center justify-center font-display text-sm md:text-base font-bold shadow-md z-10">
          {stop.stop}
        </div>

        {/* Dashed connecting line */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-2 border-l-2 border-dashed border-heritage-bronze/25"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right column: content card */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-8 md:pb-12'}`}>
        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-heritage-cream flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-heritage-bronze" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-base md:text-lg font-semibold text-heritage-charcoal leading-snug">
                {stop.title}
              </h3>
              <p className="font-body text-xs text-heritage-charcoal/50 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                {stop.location}
              </p>
            </div>
          </div>

          {/* What to look for */}
          <div className="mb-4">
            <h4 className="font-body text-[10px] font-medium text-heritage-bronze uppercase tracking-wider mb-1.5">
              What to Look For
            </h4>
            <p className="font-body text-sm text-heritage-charcoal/75 leading-relaxed">
              {stop.whatToLookFor}
            </p>
          </div>

          {/* Historical insight */}
          <div className="rounded-lg bg-heritage-archive/40 border border-heritage-cream-dark/20 p-3">
            <h4 className="font-body text-[10px] font-medium text-heritage-bronze uppercase tracking-wider mb-1.5">
              Historical Insight
            </h4>
            <p className="font-body text-xs text-heritage-charcoal/65 leading-relaxed">
              {stop.historicalInsight}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NearbyLandmarkCard({ landmark, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/50 backdrop-blur p-4 hover:bg-white/70 transition-colors duration-300"
    >
      <div className="w-8 h-8 rounded-lg bg-heritage-cream flex items-center justify-center shrink-0">
        <Landmark className="w-4 h-4 text-heritage-bronze" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="font-display text-sm font-semibold text-heritage-charcoal">
            {landmark.name}
          </h4>
          <span className="font-body text-[10px] text-heritage-charcoal/40 bg-heritage-cream/60 rounded-full px-2 py-0.5 border border-heritage-cream-dark/20 shrink-0">
            {landmark.distance}
          </span>
        </div>
        <p className="font-body text-xs text-heritage-charcoal/60 leading-relaxed">
          {landmark.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WalkingTour({ stops, variant = 'full' }) {
  const tourStops = stops || defaultStops;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="walking-tour-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow">Self-Guided Route</span>
          <h2
            id="walking-tour-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Walking Tour
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Six stops around Vancouver Block. Observe the architecture, read the building,
            and connect what you see to the history of a city in motion.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />

          {/* Tour meta */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <span className="flex items-center gap-1.5 font-body text-xs text-heritage-charcoal/50">
              <Footprints className="w-3.5 h-3.5" aria-hidden="true" />
              {tourStops.length} stops
            </span>
            <span className="flex items-center gap-1.5 font-body text-xs text-heritage-charcoal/50">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              30-45 minutes
            </span>
            <span className="flex items-center gap-1.5 font-body text-xs text-heritage-charcoal/50">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Granville Street area
            </span>
          </div>
        </motion.div>

        {/* Tour stops */}
        <div className="mb-16 md:mb-20">
          {tourStops.map((stop, i) => (
            <TourStop
              key={stop.stop}
              stop={stop}
              index={i}
              isLast={i === tourStops.length - 1}
            />
          ))}
        </div>

        {/* Finish marker */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 rounded-full bg-heritage-charcoal px-6 py-2.5 shadow-md">
            <Footprints className="w-4 h-4 text-heritage-marble" aria-hidden="true" />
            <span className="font-body text-sm font-medium text-heritage-marble">
              Tour Complete
            </span>
          </div>
        </motion.div>

        {/* Nearby landmarks */}
        {variant === 'full' && (
          <div>
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold text-heritage-charcoal mb-2">
                Nearby Landmarks
              </h3>
              <p className="font-body text-sm text-heritage-charcoal/60 max-w-md mx-auto">
                Extend your walk to explore more of downtown Vancouver's heritage architecture.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {nearbyLandmarks.map((landmark, i) => (
                <NearbyLandmarkCard key={landmark.name} landmark={landmark} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
