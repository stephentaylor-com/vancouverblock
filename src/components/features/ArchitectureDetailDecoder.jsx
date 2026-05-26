import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import {
  Columns3, User, Clock, Crown, DoorOpen, Gem,
  Building, ArrowUp, MapPin, AlertTriangle, Sparkles,
} from 'lucide-react';
import { architectureDetails } from '../../data/architectureDetails.js';

const iconMap = {
  columns: Columns3,
  user: User,
  clock: Clock,
  crown: Crown,
  'door-open': DoorOpen,
  gem: Gem,
  building: Building,
  'arrow-up': ArrowUp,
};

function DetailTab({ detail, isActive, onClick }) {
  const Icon = iconMap[detail.icon] || Sparkles;

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-heritage-bronze ${
        isActive
          ? 'bg-heritage-charcoal text-heritage-marble shadow-md'
          : 'bg-white/50 text-heritage-charcoal/70 border border-black/5 hover:bg-heritage-cream/50 hover:border-heritage-bronze/15'
      }`}
      aria-pressed={isActive}
      aria-label={`View details for ${detail.name}`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
        isActive ? 'bg-white/10' : 'bg-heritage-cream'
      }`}>
        <Icon className={`w-4 h-4 ${isActive ? 'text-heritage-marble' : 'text-heritage-bronze'}`} aria-hidden="true" />
      </div>
      <span className={`font-body text-sm font-medium truncate ${
        isActive ? 'text-heritage-marble' : 'text-heritage-charcoal'
      }`}>
        {detail.name}
      </span>
    </button>
  );
}

function DetailPanel({ detail, isInitial }) {
  const Icon = iconMap[detail.icon] || Sparkles;

  return (
    <motion.div
      key={detail.id}
      initial={isInitial ? false : { opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-heritage-cream flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-heritage-bronze" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-heritage-charcoal">
            {detail.name}
          </h3>
          <p className="font-body text-sm text-heritage-charcoal/50 mt-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            {detail.location}
          </p>
        </div>
      </div>

      {/* Photo */}
      {detail.image && (
        <div className="mb-6 -mx-2 md:-mx-3">
          <div className="rounded-xl overflow-hidden aspect-[16/9]">
            <img
              src={detail.image}
              alt={detail.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          {detail.imageCredit && (
            <p className="font-body text-[10px] text-heritage-charcoal/40 mt-1.5 px-2 md:px-3">
              Photo: {detail.imageCredit}
            </p>
          )}
        </div>
      )}

      {/* Description */}
      <div className="mb-6">
        <h4 className="font-body text-[10px] font-medium text-heritage-bronze uppercase tracking-wider mb-2">
          Description
        </h4>
        <p className="font-body text-sm text-heritage-charcoal/75 leading-relaxed">
          {detail.description}
        </p>
      </div>

      {/* Significance */}
      <div className="rounded-lg bg-heritage-archive/40 border border-heritage-cream-dark/20 p-4 mb-5">
        <h4 className="font-body text-[10px] font-medium text-heritage-bronze uppercase tracking-wider mb-2">
          Significance
        </h4>
        <p className="font-body text-sm text-heritage-charcoal/70 leading-relaxed">
          {detail.significance}
        </p>
      </div>

      {/* Conservation note */}
      <div className="rounded-lg bg-heritage-charcoal/[0.03] border border-heritage-charcoal/8 p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-3.5 h-3.5 text-heritage-bronze/70" aria-hidden="true" />
          <h4 className="font-body text-[10px] font-medium text-heritage-bronze uppercase tracking-wider">
            Conservation Note
          </h4>
        </div>
        <p className="font-body text-xs text-heritage-charcoal/60 leading-relaxed">
          {detail.conservationNote}
        </p>
      </div>
    </motion.div>
  );
}

export default function ArchitectureDetailDecoder() {
  const [selectedId, setSelectedId] = useState(architectureDetails[0]?.id || '');
  const [hasInteracted, setHasInteracted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  const selectedDetail = architectureDetails.find((d) => d.id === selectedId) || architectureDetails[0];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="architecture-decoder-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow">Read the Building</span>
          <h2
            id="architecture-decoder-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Architecture Detail Decoder
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Select a feature of Vancouver Block to learn what it is, why it matters,
            and how it is cared for.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6 md:gap-8"
        >
          {/* Left: detail selector */}
          <div>
            <h3 className="sr-only">Select an architectural detail</h3>
            <nav aria-label="Architectural details" className="space-y-2">
              {architectureDetails.map((detail) => (
                <DetailTab
                  key={detail.id}
                  detail={detail}
                  isActive={selectedId === detail.id}
                  onClick={() => {
                    setHasInteracted(true);
                    setSelectedId(detail.id);
                  }}
                />
              ))}
            </nav>
          </div>

          {/* Right: detail panel */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <DetailPanel key={selectedDetail.id} detail={selectedDetail} isInitial={!hasInteracted} />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
