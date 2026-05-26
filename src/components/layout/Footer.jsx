import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Mail, Building2, ExternalLink } from 'lucide-react';

const QUICK_LINKS = [
  {
    heading: 'Explore',
    links: [
      { label: 'History', href: '/history' },
      { label: 'Architecture', href: '/architecture' },
      { label: 'Heritage Status', href: '/heritage-status' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Entrepreneurial Vancouver', href: '/entrepreneurial-vancouver' },
      { label: 'Education', href: '/education' },
      { label: 'Tours', href: '/tours' },
      { label: 'Stories', href: '/stories' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Visit Us', href: '/tours' },
      { label: 'Heritage Status', href: '/heritage-status' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-heritage-charcoal text-heritage-marble"
      role="contentinfo"
    >
      {/* Decorative bronze rule */}
      <div
        className="h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, #B8956A 20%, #8A6A3F 50%, #B8956A 80%, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Top section: Wordmark + Heritage line */}
        <div className="mb-12 lg:mb-16">
          <Link to="/" className="group inline-block" aria-label="Vancouver Block — Home">
            <span className="font-display text-2xl font-bold tracking-tight text-heritage-marble lg:text-3xl">
              Vancouver Block
            </span>
          </Link>
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-heritage-bronze-light">
            <span>Class A Heritage</span>
            <span aria-hidden="true" className="text-heritage-bronze/40">&middot;</span>
            <span>Canadian Register of Historic Places</span>
            <span aria-hidden="true" className="text-heritage-bronze/40">&middot;</span>
            <span>Est. 1912</span>
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Contact column */}
          <div className="lg:col-span-2">
            <h2 className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-heritage-bronze-light">
              Contact
            </h2>
            <address className="not-italic">
              <ul className="space-y-3 text-sm leading-relaxed text-heritage-marble/70">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-heritage-bronze-light" aria-hidden="true" />
                  <span>
                    736 Granville Street
                    <br />
                    Vancouver, BC
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 size={15} className="mt-0.5 shrink-0 text-heritage-bronze-light" aria-hidden="true" />
                  <span>Equitable Real Estate Investment Corp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={15} className="mt-0.5 shrink-0 text-heritage-bronze-light" aria-hidden="true" />
                  <a
                    href="tel:+16046837571"
                    className="transition-colors hover:text-heritage-marble"
                  >
                    604.683.7571
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={15} className="mt-0.5 shrink-0 text-heritage-bronze-light" aria-hidden="true" />
                  <a
                    href="mailto:info@ere.bc.ca"
                    className="transition-colors hover:text-heritage-marble"
                  >
                    info@ere.bc.ca
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Quick link columns */}
          {QUICK_LINKS.map(({ heading, links }) => (
            <div key={heading}>
              <h2 className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-heritage-bronze-light">
                {heading}
              </h2>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={`${heading}-${href}`}>
                    <Link
                      to={href}
                      className="text-sm text-heritage-marble/70 transition-colors duration-200 hover:text-heritage-marble"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="my-12 h-px lg:my-16"
          style={{
            background:
              'linear-gradient(to right, rgba(184,149,106,0.2), rgba(184,149,106,0.08))',
          }}
          aria-hidden="true"
        />

        {/* Bottom */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-sm italic leading-relaxed text-heritage-marble/50">
              Celebrating Vancouver's heritage through architecture.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-heritage-marble/30">
              Historical notes on this website are based on publicly available heritage
              resources including the Vancouver Heritage Foundation, the Canadian Register
              of Historic Places, City of Vancouver archives, and published architectural
              histories. This website is an educational resource, not an official heritage
              authority.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs text-heritage-marble/30">
              &copy; {currentYear} Vancouver Block. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
