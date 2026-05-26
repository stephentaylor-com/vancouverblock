import { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'History', href: '/history' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Heritage', href: '/heritage-status' },
  { label: 'Enterprise', href: '/entrepreneurial-vancouver' },
  { label: 'Education', href: '/education' },
  { label: 'Tours', href: '/tours' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Stories', href: '/stories' },
  { label: 'Contact', href: '/contact' },
];

const SCROLL_THRESHOLD = 40;

export default function Header({ dark = false }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // When dark=true and not scrolled, use light text over dark hero
  const isTransparentDark = dark && !scrolled;

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-heritage-marble/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(138,106,63,0.12)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo / Wordmark */}
          <Link
            to="/"
            className="group relative z-10 flex items-baseline gap-2"
            aria-label="Vancouver Block — Home"
          >
            <span className={`font-display text-lg font-bold tracking-tight lg:text-xl transition-colors duration-500 ${
              isTransparentDark ? 'text-heritage-marble' : 'text-heritage-charcoal'
            }`}>
              Vancouver Block
            </span>
            <span className={`hidden text-[0.625rem] font-medium uppercase tracking-[0.2em] sm:inline transition-colors duration-500 ${
              isTransparentDark ? 'text-heritage-bronze-light' : 'text-heritage-bronze'
            }`}>
              Since 1912
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:block"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className={`relative px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
                      isActive(href)
                        ? 'text-heritage-bronze-light'
                        : isTransparentDark
                          ? 'text-heritage-marble/70 hover:text-heritage-marble'
                          : 'text-heritage-charcoal/70 hover:text-heritage-charcoal'
                    }`}
                    aria-current={isActive(href) ? 'page' : undefined}
                  >
                    {label}
                    {isActive(href) && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-px bg-heritage-bronze"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
              isTransparentDark ? 'text-heritage-marble hover:bg-heritage-marble/10' : 'text-heritage-charcoal hover:bg-heritage-cream/50'
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 1, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 1, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-heritage-charcoal/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 1, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-heritage-bronze/10 bg-heritage-marble/98 backdrop-blur-xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="mx-auto max-w-7xl divide-y divide-heritage-cream-dark/40 px-6 py-4">
                {NAV_LINKS.map(({ label, href }, index) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 1, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                  >
                    <Link
                      to={href}
                      className={`flex items-center py-3.5 text-[0.9375rem] font-medium transition-colors ${
                        isActive(href)
                          ? 'text-heritage-bronze'
                          : 'text-heritage-charcoal/80 hover:text-heritage-charcoal'
                      }`}
                      aria-current={isActive(href) ? 'page' : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {isActive(href) && (
                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-heritage-bronze" aria-hidden="true" />
                      )}
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile footer info */}
              <div className="border-t border-heritage-cream-dark/40 px-6 py-5">
                <p className="text-xs leading-relaxed text-heritage-charcoal/50">
                  736 Granville Street, Vancouver, BC
                  <br />
                  Class A Heritage &middot; Est. 1912
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
