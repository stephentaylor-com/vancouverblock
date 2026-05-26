import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import Button from '../components/ui/Button.jsx';
import WalkingTour from '../components/features/WalkingTour.jsx';
import HeritageMap from '../components/features/HeritageMap.jsx';
import { tourThemes } from '../data/tours.js';
import { nearbyLandmarks } from '../data/walkingTour.js';
import Layout from '../layouts/Layout';

export default function ToursPage() {
  const title = 'Visit Vancouver Block | Tours & Walking Guides';
  const description = 'Plan your visit to Vancouver Block. Explore self-guided tours, the public lobby, and nearby heritage landmarks on Granville Street.';

  const tourIconMap = {
    'building-2': 'Building2',
    'trending-up': 'TrendingUp',
    'zap': 'Zap',
    'shield': 'Shield',
    'graduation-cap': 'GraduationCap',
  };

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">
        {/* Hero */}
        <PageHero
          image="/images/hero/tours-hero.jpg"
          variant="page"
          eyebrow="Visit"
          title="Experience the Building"
          subtitle="Visit Vancouver Block at 736 Granville Street. Look up at the terracotta facade, step into the historic lobby, and explore the heritage landmarks of downtown Vancouver on foot."
        />

        {/* Visiting Notes */}
        <Section
          id="visiting"
          eyebrow="Plan Your Visit"
          title="How to Visit Vancouver Block"
          subtitle="What to expect when you arrive at 736 Granville Street."
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <div className="prose prose-lg text-heritage-charcoal/70">
                <p>
                  Vancouver Block is a working commercial building, not a museum. However, the building's most
                  remarkable features — its terracotta facade, ornamental crown, and four-faced clock tower — are
                  best appreciated from the sidewalk on Granville Street. Much of what makes this landmark
                  extraordinary is visible from the street.
                </p>
                <p>
                  The ground-floor public lobby may be accessible during normal building hours (typically weekday
                  business hours). Inside, you can see the restored marble walls, terrazzo flooring, and oak
                  finishes that have survived more than a century of use. Please be respectful of tenants and
                  building staff — this is an active workplace.
                </p>
                <p>
                  Office floors above the lobby are private and not open to visitors. The clock tower and upper
                  levels are not generally accessible to the public. Occasionally, heritage organizations arrange
                  special tours or events that may include access to areas not normally available — check with the
                  Vancouver Heritage Foundation or Heritage Vancouver Society for upcoming events.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5 text-center">
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Location</p>
                  <p className="mt-1 text-sm font-medium text-heritage-charcoal">736 Granville Street</p>
                </div>
                <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5 text-center">
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Lobby Access</p>
                  <p className="mt-1 text-sm font-medium text-heritage-charcoal">Weekday business hours</p>
                </div>
                <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5 text-center">
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Admission</p>
                  <p className="mt-1 text-sm font-medium text-heritage-charcoal">Free (exterior & lobby)</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/coffered-ceiling-lobby.jpg"
                alt="The restored lobby of Vancouver Block with coffered ceiling, columns, and period light fixtures"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Self-Guided Walking Tour */}
        <Section
          id="walking-tour"
          eyebrow="Self-Guided"
          title="Walking Tour of Vancouver Block"
          subtitle="Six stops around and inside the building. Allow 30 to 45 minutes for a careful exploration. Begin on the west side of Granville Street, opposite 736."
          variant="cream"
        >
          <WalkingTour variant="full" />
        </Section>

        {/* Tour Themes */}
        <Section
          id="tour-themes"
          eyebrow="Themed Tours"
          title="Explore by Theme"
          subtitle="Expand your visit with themed walking tours that connect Vancouver Block to the broader heritage landscape of downtown Vancouver."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tourThemes.map((theme) => (
              <Card
                key={theme.title}
                title={theme.title}
                icon={tourIconMap[theme.icon] || 'MapPin'}
                variant="heritage"
              >
                <p className="mb-4">{theme.description}</p>
                <div className="mt-auto space-y-2 border-t border-heritage-bronze/10 pt-4">
                  <div className="flex items-center justify-between text-xs text-heritage-charcoal/50">
                    <span>Duration</span>
                    <span className="font-medium text-heritage-charcoal/70">{theme.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-heritage-charcoal/50">
                    <span>Stops</span>
                    <span className="font-medium text-heritage-charcoal/70">{theme.stops} stops</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-heritage-charcoal/50">
                    <span>Distance</span>
                    <span className="font-medium text-heritage-charcoal/70">{theme.distance}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-heritage-charcoal/50">
                    <span>Audience</span>
                    <span className="font-medium text-heritage-charcoal/70">{theme.audience}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Nearby Heritage Walk */}
        <Section
          id="nearby"
          eyebrow="Nearby Landmarks"
          title="Heritage Walk: Granville Street and Beyond"
          subtitle="Vancouver Block sits among some of the city's most significant heritage buildings. Extend your visit with a walk through the surrounding blocks."
          variant="archive"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyLandmarks.map((landmark) => (
              <div key={landmark.name} className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="heritage">{landmark.distance}</Badge>
                </div>
                <h3 className="font-display text-base font-semibold tracking-tight text-heritage-charcoal lg:text-lg">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/55">
                  {landmark.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Clock Tower Access */}
        <Section
          id="clock-tower"
          eyebrow="Clock Tower"
          title="Clock Tower Access"
          subtitle="The clock tower is one of Vancouver Block's most iconic features, but access is limited."
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-heritage-bronze/15 bg-heritage-cream/40 p-8 lg:p-10">
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">
                    Limited Access
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-heritage-charcoal/70">
                    The clock tower crowns the building at approximately fifteen storeys and is not generally
                    open to the public. Access to the clock mechanism and the viewing areas near the top of the
                    building is restricted for safety and operational reasons.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-heritage-charcoal/70">
                    Heritage organizations, including the Vancouver Heritage Foundation and Heritage Vancouver
                    Society, occasionally arrange special events or tours that may include access to areas of
                    heritage buildings not normally available. These events are announced through their
                    respective websites and mailing lists.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-heritage-charcoal/70">
                    The four illuminated clock faces are best viewed from Granville Street and from several
                    vantage points in the surrounding blocks. At night, the clock tower's illumination
                    continues a tradition of electric and neon lighting that dates to the 1920s.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/features/clock-neon-hands.jpg"
                alt="Vancouver Block clock face with neon-outlined hands and city skyline"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Accessibility Note */}
        <Section
          id="accessibility"
          eyebrow="Accessibility"
          title="Accessibility Information"
          variant="cream"
        >
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-heritage-bronze/15 bg-white/60 p-8 lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal mb-3">Heritage Building</h3>
              <p className="text-base leading-relaxed text-heritage-charcoal/70">
                Accessibility information for Vancouver Block is being confirmed with building management.
                The building was constructed in 1912 and may present accessibility challenges common to
                heritage structures of this era.
              </p>
            </div>
            <div className="rounded-2xl border border-heritage-bronze/15 bg-white/60 p-8 lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal mb-3">Street-Level Viewing</h3>
              <p className="text-base leading-relaxed text-heritage-charcoal/70">
                The exterior of the building and its most significant architectural features — the
                terracotta facade, ornamental details, and clock tower — are fully visible from
                Granville Street and the surrounding sidewalks.
              </p>
            </div>
            <div className="rounded-2xl border border-heritage-bronze/15 bg-white/60 p-8 lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal mb-3">Questions?</h3>
              <p className="text-base leading-relaxed text-heritage-charcoal/70">
                If you have specific accessibility questions about visiting Vancouver Block, please
                <Link to="/contact" className="text-heritage-bronze underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze transition-colors"> contact building management</Link> in advance of your visit.
              </p>
            </div>
          </div>
        </Section>

        {/* Map */}
        <Section
          id="map"
          eyebrow="Location"
          title="Find Vancouver Block"
          subtitle="736 Granville Street, Vancouver, BC — at the heart of the downtown commercial core."
        >
          <div>
            <div className="overflow-hidden rounded-2xl border border-heritage-bronze/10 shadow-sm">
              <HeritageMap height={400} />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Transit</p>
                <p className="mt-1 text-sm font-medium text-heritage-charcoal">SkyTrain — Granville Station</p>
              </div>
              <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Cross Streets</p>
                <p className="mt-1 text-sm font-medium text-heritage-charcoal">Georgia St & Robson St</p>
              </div>
              <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Parking</p>
                <p className="mt-1 text-sm font-medium text-heritage-charcoal">Multiple parkades nearby</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact CTA */}
        <Section
          id="contact-cta"
          variant="dark"
          eyebrow="Get in Touch"
          title="Plan Your Visit"
          subtitle="We welcome inquiries about heritage tours, educational visits, and community events."
        >
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-bronze-light mb-2">Address</p>
              <p className="text-sm leading-relaxed text-heritage-marble/70">
                736 Granville Street<br />
                Vancouver, BC V6Z 1A1
              </p>
            </div>
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-bronze-light mb-2">Phone</p>
              <p className="text-sm leading-relaxed text-heritage-marble/70">
                <a href="tel:+16046837571" className="transition-colors hover:text-heritage-marble">604.683.7571</a>
              </p>
            </div>
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-bronze-light mb-2">Email</p>
              <p className="text-sm leading-relaxed text-heritage-marble/70">
                <a href="mailto:info@ere.bc.ca" className="transition-colors hover:text-heritage-marble">info@ere.bc.ca</a>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/stories" variant="secondary" className="border-heritage-marble/20 text-heritage-marble hover:bg-heritage-marble hover:text-heritage-charcoal">
              Share Your Story
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </Layout>
  );
}
