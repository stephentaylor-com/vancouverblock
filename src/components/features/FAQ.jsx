import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

/**
 * FAQItem — single accordion item.
 */
function FAQItem({ question, answer, isOpen, onToggle, id, prefersReducedMotion }) {
  const headingId = `faq-heading-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-heritage-cream-dark/40">
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-heritage-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heritage-bronze focus-visible:ring-offset-2"
        >
          <span className="font-display text-base font-semibold leading-snug tracking-tight sm:text-lg">
            {question}
          </span>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-heritage-bronze/20 text-heritage-bronze transition-colors group-hover:border-heritage-bronze/40 group-hover:bg-heritage-bronze/5"
            aria-hidden="true"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="minus"
                  initial={prefersReducedMotion ? false : { opacity: 1, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Minus size={14} />
                </motion.span>
              ) : (
                <motion.span
                  key="plus"
                  initial={prefersReducedMotion ? false : { opacity: 1, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Plus size={14} />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={prefersReducedMotion ? { height: 'auto' } : { height: 0, opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? { height: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-12 text-sm leading-relaxed text-heritage-charcoal/60">
              {typeof answer === 'string' ? <p>{answer}</p> : answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * FAQ — accordion component. Only one item open at a time.
 *
 * @param {Object} props
 * @param {{ question: string, answer: string|React.ReactNode }[]} props.items
 * @param {string} props.title - Optional section title
 * @param {string} props.intro - Optional introductory text
 */
export default function FAQ({ items = [], title, intro }) {
  const [openIndex, setOpenIndex] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const handleToggle = useCallback(
    (index) => {
      setOpenIndex((prev) => (prev === index ? null : index));
    },
    [],
  );

  if (!items.length) return null;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Optional heading */}
      {title && (
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
      )}
      {intro && (
        <p className="mt-3 text-base leading-relaxed text-heritage-charcoal/60">
          {intro}
        </p>
      )}

      {/* Accordion list */}
      <div
        className={title || intro ? 'mt-10' : ''}
        role="list"
      >
        {items.map((item, index) => (
          <FAQItem
            key={index}
            id={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </div>
  );
}
