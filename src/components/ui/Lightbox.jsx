import { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Tag, Scale, Camera } from 'lucide-react';

export default function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  const prefersReducedMotion = useReducedMotion();
  const closeButtonRef = useRef(null);
  const returnFocusRef = useRef(null);
  const [direction, setDirection] = useState(0);

  const item = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  // Capture the element that had focus when lightbox opened
  useEffect(() => {
    returnFocusRef.current = document.activeElement;
    // Small delay to let the portal mount
    const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      clearTimeout(timer);
      returnFocusRef.current?.focus();
    };
  }, []);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const goPrev = useCallback(() => {
    if (hasPrev) {
      setDirection(-1);
      onNavigate(currentIndex - 1);
    }
  }, [hasPrev, currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) {
      setDirection(1);
      onNavigate(currentIndex + 1);
    }
  }, [hasNext, currentIndex, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goPrev, goNext]);

  // Focus trap
  useEffect(() => {
    function trapFocus(e) {
      if (e.key !== 'Tab') return;
      const focusable = document.querySelectorAll('[data-lightbox-focusable]');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    window.addEventListener('keydown', trapFocus);
    return () => window.removeEventListener('keydown', trapFocus);
  }, []);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        hidden: (d) => ({ opacity: 0, scale: 0.95, x: d * 40 }),
        visible: { opacity: 1, scale: 1, x: 0 },
        exit: (d) => ({ opacity: 0, scale: 0.95, x: d * -40 }),
      };

  // Swipe handling via drag
  function handleDragEnd(_e, info) {
    const threshold = 60;
    if (info.offset.x > threshold && hasPrev) goPrev();
    else if (info.offset.x < -threshold && hasNext) goNext();
  }

  return createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        key="lightbox-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Image viewer: ${item.title}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-heritage-charcoal/90 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          ref={closeButtonRef}
          data-lightbox-focusable
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-heritage-bronze focus-visible:outline-offset-2"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5 text-heritage-marble" />
        </button>

        {/* Previous button */}
        {hasPrev && (
          <button
            data-lightbox-focusable
            onClick={goPrev}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-heritage-bronze focus-visible:outline-offset-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-heritage-marble" />
          </button>
        )}

        {/* Next button */}
        {hasNext && (
          <button
            data-lightbox-focusable
            onClick={goNext}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-heritage-bronze focus-visible:outline-offset-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-heritage-marble" />
          </button>
        )}

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 font-body text-xs text-heritage-marble/60 tabular-nums">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Main content area */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.id}
            custom={direction}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.3, ease: 'easeOut' }}
            drag={items.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="relative z-[1] flex flex-col items-center max-w-5xl w-full mx-4 md:mx-8 select-none"
            style={{ touchAction: 'pan-y' }}
          >
            {/* Image */}
            <div className="w-full flex items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                  draggable={false}
                />
              ) : (
                <div className="w-full max-w-lg aspect-[4/3] rounded-lg bg-gradient-to-br from-heritage-cream via-heritage-terracotta/60 to-heritage-bronze/30 flex flex-col items-center justify-center">
                  <Camera className="w-12 h-12 text-heritage-bronze/30 mb-3" aria-hidden="true" />
                  <span className="font-display text-lg font-semibold text-heritage-charcoal/40 text-center">
                    {item.title}
                  </span>
                  <span className="font-body text-xs text-heritage-charcoal/25 mt-1">Image Pending</span>
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="w-full max-w-2xl mt-5 px-2">
              <div className="heritage-rule max-w-xs mx-auto mb-4" />

              {/* Title */}
              <h3
                className="font-display text-lg md:text-xl font-semibold text-heritage-marble text-center leading-snug"
                aria-live="polite"
              >
                {item.title}
              </h3>

              {/* Caption */}
              <p className="font-body text-sm text-heritage-marble/65 text-center leading-relaxed mt-2 max-w-xl mx-auto">
                {item.caption}
              </p>

              {/* Metadata badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {/* Date */}
                <span className="inline-flex items-center gap-1 rounded-full bg-heritage-charcoal/50 backdrop-blur-sm px-2.5 py-1 text-[11px] font-body font-medium text-heritage-marble/80">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  {item.date}
                </span>

                {/* Category */}
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[11px] font-body font-medium text-heritage-marble/80">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  {item.category}
                </span>

                {/* License */}
                {item.license && item.license !== 'Pending' && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[11px] font-body font-medium text-heritage-marble/80">
                    <Scale className="w-3 h-3" aria-hidden="true" />
                    {item.license}
                  </span>
                )}
              </div>

              {/* Source */}
              <p className="font-body text-[11px] text-heritage-marble/40 text-center mt-3">
                {item.source}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
