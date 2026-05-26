import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Columns3, Gem, Building, Sun, Zap, TreePine,
  AlertTriangle, MapPin,
} from 'lucide-react';
import { materials } from '../../data/materials.js';

const iconMap = {
  columns: Columns3,
  gem: Gem,
  building: Building,
  sun: Sun,
  zap: Zap,
  'tree-pine': TreePine,
};

// Distinctive tactile gradients for each material
const materialGradients = {
  Terracotta: 'from-amber-100/60 via-heritage-cream to-orange-50/40',
  Marble: 'from-gray-50/80 via-white to-heritage-marble',
  Steel: 'from-slate-100/60 via-gray-50 to-zinc-100/40',
  Glass: 'from-heritage-clock-glass/40 via-sky-50/30 to-cyan-50/20',
  Neon: 'from-red-50/40 via-heritage-cream to-pink-50/30',
  Oak: 'from-amber-50/50 via-heritage-archive/40 to-yellow-50/30',
};

function MaterialCard({ material, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[material.icon] || Gem;
  const gradient = materialGradients[material.name] || 'from-heritage-cream to-heritage-marble';

  return (
    <motion.article
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
    >
      {/* Material header with photo or gradient swatch */}
      <div className={`relative ${material.image ? '' : `bg-gradient-to-br ${gradient}`} p-6 border-b border-black/5`}>
        {/* Photo background */}
        {material.image && (
          <div className="absolute inset-0">
            <img
              src={material.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-white/30" />
          </div>
        )}
        {/* Texture overlay */}
        {!material.image && (
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }} />
        )}

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-white/80 transition-colors duration-300">
              <Icon className="w-6 h-6 text-heritage-bronze" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-heritage-charcoal">
                {material.name}
              </h3>
              <p className="font-body text-xs text-heritage-charcoal/50 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                {material.location}
              </p>
            </div>
          </div>

          {/* Era badge */}
          <span className="rounded-full bg-white/60 backdrop-blur-sm border border-white/40 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/55 shadow-sm shrink-0">
            {material.era}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Description */}
        <p className="font-body text-sm text-heritage-charcoal/75 leading-relaxed mb-4">
          {material.description}
        </p>

        {/* Why it matters */}
        <div className="rounded-lg bg-heritage-archive/40 border border-heritage-cream-dark/20 p-3.5 mb-4">
          <h4 className="font-body text-[10px] font-medium text-heritage-bronze uppercase tracking-wider mb-1.5">
            Why It Matters
          </h4>
          <p className="font-body text-xs text-heritage-charcoal/65 leading-relaxed">
            {material.whyItMatters}
          </p>
        </div>

        {/* Conservation note */}
        <div className="flex items-start gap-2.5 rounded-lg bg-heritage-charcoal/[0.03] border border-heritage-charcoal/8 p-3">
          <AlertTriangle className="w-3.5 h-3.5 text-heritage-bronze/60 mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <h4 className="font-body text-[10px] font-medium text-heritage-bronze/70 uppercase tracking-wider mb-1">
              Conservation
            </h4>
            <p className="font-body text-[11px] text-heritage-charcoal/55 leading-relaxed">
              {material.conservationNote}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function MaterialStories() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="materials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow">Built to Last</span>
          <h2
            id="materials-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Material Stories
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Every material in Vancouver Block was chosen for a reason. Together, they tell a
            story about craft, commerce, and the ambition of a young city reaching upward.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Material cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {materials.map((material, i) => (
            <MaterialCard key={material.name} material={material} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
