import { useState, useRef } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Building2, Shield, TrendingUp, Zap, Map, Landmark,
  Clock, Users, BookOpen, HelpCircle, ChevronDown,
  Download, GraduationCap, MessageCircle,
} from 'lucide-react';
import { educationModules, glossaryTerms, discussionQuestions } from '../../data/educationModules.js';

const moduleIconMap = {
  'building-2': Building2,
  'shield': Shield,
  'trending-up': TrendingUp,
  'zap': Zap,
  'map': Map,
  'landmark': Landmark,
};

function ModuleCard({ module, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const Icon = moduleIconMap[module.icon] || BookOpen;

  return (
    <motion.article
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-heritage-cream flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-heritage-bronze" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold text-heritage-charcoal leading-snug">
            {module.title}
          </h3>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-heritage-charcoal/5 border border-heritage-charcoal/10 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/60">
          <Users className="w-3 h-3" aria-hidden="true" />
          {module.audience}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-heritage-charcoal/5 border border-heritage-charcoal/10 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/60">
          <GraduationCap className="w-3 h-3" aria-hidden="true" />
          {module.grades}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-heritage-charcoal/5 border border-heritage-charcoal/10 px-2.5 py-0.5 text-[10px] font-body font-medium text-heritage-charcoal/60">
          <Clock className="w-3 h-3" aria-hidden="true" />
          {module.duration}
        </span>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-heritage-charcoal/70 leading-relaxed mb-4 flex-1">
        {module.description}
      </p>

      {/* Sample questions */}
      <div className="rounded-lg bg-heritage-archive/40 border border-heritage-cream-dark/20 p-3 mb-4">
        <h4 className="font-body text-[10px] font-medium text-heritage-bronze uppercase tracking-wider mb-2">
          Sample Questions
        </h4>
        <ul className="space-y-1.5">
          {module.questions.slice(0, 2).map((q, i) => (
            <li key={i} className="flex items-start gap-2">
              <HelpCircle className="w-3 h-3 text-heritage-bronze/60 mt-0.5 shrink-0" aria-hidden="true" />
              <span className="font-body text-xs text-heritage-charcoal/60 leading-relaxed">{q}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Download placeholder */}
      <button
        disabled
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-heritage-charcoal/5 border border-heritage-charcoal/8 px-4 py-2.5 font-body text-xs font-medium text-heritage-charcoal/40 cursor-not-allowed"
        aria-label={`Download ${module.title} lesson plan (coming soon)`}
      >
        <Download className="w-3.5 h-3.5" aria-hidden="true" />
        Download Lesson Plan
        <span className="ml-1 text-[9px] bg-heritage-bronze/10 text-heritage-bronze rounded-full px-1.5 py-0.5">
          Soon
        </span>
      </button>
    </motion.article>
  );
}

function GlossaryItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-b border-heritage-cream-dark/30 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-left group focus-visible:outline-2 focus-visible:outline-heritage-bronze"
        aria-expanded={isOpen}
      >
        <span className="font-display text-sm font-semibold text-heritage-charcoal group-hover:text-heritage-bronze transition-colors duration-200">
          {item.term}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-heritage-charcoal/40 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-heritage-charcoal/65 leading-relaxed pb-3">
              {item.definition}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function QuestionCard({ question, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-heritage-charcoal flex items-center justify-center shrink-0 mt-0.5">
          <MessageCircle className="w-3.5 h-3.5 text-heritage-marble" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-medium text-heritage-charcoal leading-snug italic">
          {question}
        </p>
      </div>
    </motion.div>
  );
}

export default function EducationHub() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow">For Educators & Learners</span>
          <h2
            id="education-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Education Hub
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Lesson modules, glossary terms, and discussion questions that use Vancouver Block
            as a lens for exploring architecture, heritage, economics, and the urban environment.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Lesson modules */}
        <div className="mb-16 md:mb-20">
          <motion.h3
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 font-display text-xl md:text-2xl font-semibold text-heritage-charcoal mb-6 md:mb-8"
          >
            <BookOpen className="w-5 h-5 text-heritage-bronze" aria-hidden="true" />
            Lesson Modules
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {educationModules.map((module, i) => (
              <ModuleCard key={module.title} module={module} index={i} />
            ))}
          </div>
        </div>

        {/* Two-column: Glossary + Discussion */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Glossary */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="flex items-center gap-2 font-display text-xl md:text-2xl font-semibold text-heritage-charcoal mb-6">
              <BookOpen className="w-5 h-5 text-heritage-bronze" aria-hidden="true" />
              Glossary
            </h3>
            <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-5 md:p-6">
              {glossaryTerms.map((item, i) => (
                <GlossaryItem key={item.term} item={item} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Discussion questions */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="flex items-center gap-2 font-display text-xl md:text-2xl font-semibold text-heritage-charcoal mb-6">
              <MessageCircle className="w-5 h-5 text-heritage-bronze" aria-hidden="true" />
              Discussion Questions
            </h3>
            <div className="space-y-3">
              {discussionQuestions.map((question, i) => (
                <QuestionCard key={i} question={question} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
