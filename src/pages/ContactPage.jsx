import Layout from '../layouts/Layout';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import HeritageMap from '../components/features/HeritageMap.jsx';

export default function ContactPage() {
  const title = 'Contact | Vancouver Block';
  const description = 'Contact Vancouver Block at 736 Granville Street, Vancouver. Building inquiries, tour requests, and story submissions.';

  return (
    <Layout title={title} description={description}>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <PageHero
          image="/images/hero/contact-hero.jpg"
          variant="simple"
          title="Get in Touch"
          subtitle="Building inquiries, tour requests, heritage questions, and story submissions."
        />

        {/* Contact Information */}
        <Section
          id="contact-info"
          eyebrow="Contact"
          title="Building Information"
          subtitle="Vancouver Block is managed by Equitable Real Estate Investment Corp."
        >
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Building Management */}
              <div className="sm:col-span-2 rounded-2xl border border-heritage-bronze/15 bg-heritage-cream/40 p-8 lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-heritage-bronze/10 text-heritage-bronze">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Building Management</p>
                    <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-heritage-charcoal">
                      Equitable Real Estate Investment Corp.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/60">
                      Managing Vancouver Block and overseeing its ongoing commercial operations and conservation stewardship.
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Address</p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-heritage-charcoal">
                      736 Granville Street<br />
                      Vancouver, BC V6Z 1A1<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Phone</p>
                    <a href="tel:+16046837571" className="mt-1 block text-sm font-medium text-heritage-charcoal transition-colors hover:text-heritage-bronze">
                      604.683.7571
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Email</p>
                    <a href="mailto:info@ere.bc.ca" className="mt-1 block text-sm font-medium text-heritage-charcoal transition-colors hover:text-heritage-bronze">
                      info@ere.bc.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Website</p>
                    <a href="https://EquitableRealEstate.ca" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-medium text-heritage-charcoal transition-colors hover:text-heritage-bronze">
                      EquitableRealEstate.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Inquiries */}
        <Section
          id="inquiries"
          eyebrow="How Can We Help"
          title="Types of Inquiries"
          subtitle="We welcome inquiries about tours, heritage information, and community contributions."
          variant="cream"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <Card
              title="Tour Inquiries"
              icon="MapPin"
              variant="heritage"
              href="/tours"
            >
              <p>
                Interested in visiting Vancouver Block or organizing a guided heritage tour?
                Contact us for information about tour availability, group visits, and special
                heritage event programming. Self-guided walking tour information is available
                on our Tours page.
              </p>
            </Card>

            <Card
              title="Story Submissions"
              icon="MessageSquare"
              variant="heritage"
              href="/stories"
            >
              <p>
                Share your memories, photographs, or personal connections to Vancouver Block.
                We are collecting stories from tenants, visitors, Granville Street regulars,
                and anyone whose life has intersected with this building. Contributions help
                build a living community archive.
              </p>
            </Card>

            <Card
              title="Heritage Questions"
              icon="Shield"
              variant="heritage"
              href="/heritage-status"
            >
              <p>
                Questions about the building's heritage status, conservation history, or
                architectural significance? Our Heritage Status page provides detailed
                information about designations and character-defining elements. For further
                research inquiries, please get in touch.
              </p>
            </Card>
          </div>
        </Section>

        {/* Visit Notes */}
        <Section
          id="visit-notes"
          eyebrow="Visiting"
          title="Notes for Visitors"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-heritage-bronze/15 bg-heritage-cream/40 p-8 lg:p-10">
              <div className="space-y-4 text-base leading-relaxed text-heritage-charcoal/70">
                <p>
                  Vancouver Block is a working commercial building. The ground-floor lobby may be
                  accessible during normal weekday business hours and offers a chance to see the
                  restored marble, terrazzo, and oak finishes that define the building's interior character.
                </p>
                <p>
                  Office floors, the clock tower, and upper levels are private and not generally
                  accessible to the public. Please be respectful of tenants and building staff during
                  your visit.
                </p>
                <p>
                  For information about special heritage tours and events, including occasional
                  access to areas not normally open to the public, check with the
                  <a href="https://www.vancouverheritagefoundation.org" target="_blank" rel="noopener noreferrer" className="text-heritage-bronze underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze transition-colors">Vancouver Heritage Foundation</a>
                  and the
                  <a href="https://www.heritagevancouver.org" target="_blank" rel="noopener noreferrer" className="text-heritage-bronze underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze transition-colors">Heritage Vancouver Society</a>.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/elevator-lobby.jpg"
                alt="The restored elevator lobby of Vancouver Block with marble finishes and period fixtures"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Map */}
        <Section
          id="map"
          eyebrow="Location"
          title="Find Us"
          variant="archive"
        >
          <div>
            <p className="mb-6 text-sm font-medium text-heritage-charcoal/60">
              736 Granville Street, Vancouver, BC
            </p>
            <div className="overflow-hidden rounded-2xl border border-heritage-bronze/10 shadow-sm">
              <HeritageMap height={400} />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Transit</p>
                <p className="mt-1 text-sm font-medium text-heritage-charcoal">SkyTrain &mdash; Granville Station</p>
              </div>
              <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">On Foot</p>
                <p className="mt-1 text-sm font-medium text-heritage-charcoal">Central downtown, walkable from all directions</p>
              </div>
              <div className="rounded-xl border border-heritage-bronze/10 bg-heritage-cream/40 p-5">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Parking</p>
                <p className="mt-1 text-sm font-medium text-heritage-charcoal">Multiple parkades nearby; transit recommended</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer CTA */}
        <Section
          id="cta"
          variant="dark"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-display text-2xl font-bold tracking-tight text-heritage-marble sm:text-3xl">
              Celebrating Vancouver's heritage through architecture.
            </p>
            <p className="mt-4 text-base leading-relaxed text-heritage-marble/60">
              Vancouver Block has stood at the heart of Granville Street since 1912. Explore its history,
              admire its architecture, and discover why heritage conservation matters to the future of the city.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/history" variant="primary">
                Explore History
              </Button>
              <Button href="/architecture" variant="secondary" className="border-heritage-marble/20 text-heritage-marble hover:bg-heritage-marble hover:text-heritage-charcoal">
                Architecture
              </Button>
              <Button href="/heritage-status" variant="ghost" className="text-heritage-bronze-light hover:text-heritage-marble">
                Heritage Status
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </Layout>
  );
}
