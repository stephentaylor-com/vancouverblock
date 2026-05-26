import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Send, Upload, Info, MessageSquare } from 'lucide-react';

const connectionOptions = [
  'Tenant or former tenant',
  'Visitor or tourist',
  'Architectural interest',
  'Heritage advocate',
  'Student or researcher',
  'Neighbour or local resident',
  'Family connection',
  'Other',
];

export default function StorySubmit() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-labelledby="story-submit-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="eyebrow">Community Voices</span>
          <h2
            id="story-submit-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-charcoal mt-3 mb-4"
          >
            Share Your Story
          </h2>
          <p className="font-body text-base text-heritage-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Vancouver Block has been part of Granville Street for over a century.
            If you have a memory, photograph, or connection to share, we would like to hear from you.
          </p>
          <div className="heritage-rule max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Status notice */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-xl bg-heritage-archive/50 border border-heritage-cream-dark/30 p-4 mb-8 flex items-start gap-3"
        >
          <Info className="w-4 h-4 text-heritage-bronze mt-0.5 shrink-0" aria-hidden="true" />
          <p className="font-body text-sm text-heritage-charcoal/65 leading-relaxed">
            Story submissions will be available soon. This form is a preview of the
            community collection feature under development. No data is sent or stored at this time.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-6 md:p-8"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            aria-label="Story submission form (preview only, not functional)"
            noValidate
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="story-name"
                  className="block font-body text-sm font-medium text-heritage-charcoal mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="story-name"
                  name="name"
                  placeholder="Your name"
                  disabled
                  className="w-full rounded-xl border border-black/10 bg-heritage-marble/50 px-4 py-3 font-body text-sm text-heritage-charcoal placeholder:text-heritage-charcoal/30 focus:outline-none focus:ring-2 focus:ring-heritage-bronze/30 focus:border-heritage-bronze/30 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="story-email"
                  className="block font-body text-sm font-medium text-heritage-charcoal mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="story-email"
                  name="email"
                  placeholder="your@email.com"
                  disabled
                  className="w-full rounded-xl border border-black/10 bg-heritage-marble/50 px-4 py-3 font-body text-sm text-heritage-charcoal placeholder:text-heritage-charcoal/30 focus:outline-none focus:ring-2 focus:ring-heritage-bronze/30 focus:border-heritage-bronze/30 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                />
              </div>

              {/* Connection to Vancouver Block */}
              <div>
                <label
                  htmlFor="story-connection"
                  className="block font-body text-sm font-medium text-heritage-charcoal mb-1.5"
                >
                  Connection to Vancouver Block
                </label>
                <select
                  id="story-connection"
                  name="connection"
                  disabled
                  className="w-full rounded-xl border border-black/10 bg-heritage-marble/50 px-4 py-3 font-body text-sm text-heritage-charcoal/40 focus:outline-none focus:ring-2 focus:ring-heritage-bronze/30 focus:border-heritage-bronze/30 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 appearance-none"
                >
                  <option value="">Select your connection...</option>
                  {connectionOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Story textarea */}
              <div>
                <label
                  htmlFor="story-text"
                  className="block font-body text-sm font-medium text-heritage-charcoal mb-1.5"
                >
                  Your Story
                </label>
                <textarea
                  id="story-text"
                  name="story"
                  rows={5}
                  placeholder="Tell us about your experience, memory, or connection to Vancouver Block..."
                  disabled
                  className="w-full rounded-xl border border-black/10 bg-heritage-marble/50 px-4 py-3 font-body text-sm text-heritage-charcoal placeholder:text-heritage-charcoal/30 focus:outline-none focus:ring-2 focus:ring-heritage-bronze/30 focus:border-heritage-bronze/30 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 resize-vertical"
                />
              </div>

              {/* Photo upload placeholder */}
              <div>
                <label className="block font-body text-sm font-medium text-heritage-charcoal mb-1.5">
                  Photo Upload
                </label>
                <div className="rounded-xl border-2 border-dashed border-black/10 bg-heritage-marble/30 p-8 text-center opacity-60 cursor-not-allowed">
                  <Upload className="w-8 h-8 text-heritage-charcoal/25 mx-auto mb-2" aria-hidden="true" />
                  <p className="font-body text-sm text-heritage-charcoal/35">
                    Photo upload coming soon
                  </p>
                  <p className="font-body text-xs text-heritage-charcoal/25 mt-1">
                    JPEG, PNG up to 10 MB
                  </p>
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="story-consent"
                  name="consent"
                  disabled
                  className="mt-1 rounded border-heritage-charcoal/20 text-heritage-bronze focus:ring-heritage-bronze disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <label
                  htmlFor="story-consent"
                  className="font-body text-xs text-heritage-charcoal/55 leading-relaxed"
                >
                  I consent to having my story and any submitted photographs considered
                  for inclusion in the Vancouver Block heritage project. I confirm that
                  I have the right to share this content.
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-heritage-charcoal text-heritage-marble px-6 py-3.5 font-body text-sm font-medium shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-200"
                aria-label="Submit story (coming soon)"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                Submit Story
                <span className="ml-2 text-[10px] bg-white/10 rounded-full px-2 py-0.5">
                  Coming Soon
                </span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-6 font-body text-xs text-heritage-charcoal/35 flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3 h-3 shrink-0" aria-hidden="true" />
          All stories are reviewed before publication. Privacy is respected.
        </motion.p>
      </div>
    </section>
  );
}
