import Layout from '../layouts/Layout';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import ClockTowerFeature from '../components/features/ClockTowerFeature.jsx';
import Timeline from '../components/features/Timeline.jsx';
import HeritageBadgePanel from '../components/features/HeritageBadgePanel.jsx';

import { timeline } from '../data/timeline.js';

export default function HomePage() {
  const title = 'Vancouver Block | Historic Landmark at 736 Granville Street';
  const description = 'Explore Vancouver Block, the 1912 Edwardian Commercial landmark crowned by its iconic clock tower in downtown Vancouver.';

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">

        {/* ════════════════════════════════════════════ */}
        {/* 1. HERO                                      */}
        {/* ════════════════════════════════════════════ */}
        <PageHero
          variant="home"
          eyebrow="736 Granville Street, Vancouver"
          title="Vancouver Block"
          subtitle="A clock above Granville. A landmark of enterprise, architecture, and civic memory since 1912."
          image="/images/hero/home-hero.jpg"
          facts={["Est. 1912", "Parr & Fee", "Class A Heritage", "Canadian Register Listed", "15 Storeys"]}
        />

        {/* ════════════════════════════════════════════ */}
        {/* 2. LANDMARK STORY                            */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="landmark-story"
          eyebrow="The Landmark"
          title="A Building That Shaped a Skyline"
          subtitle="Fifteen storeys of ambition, terracotta, and civic memory."
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 items-start">
            <div className="prose prose-lg text-heritage-charcoal/80">
              <p>
                Vancouver Block stands at the corner of Granville and Georgia Streets, one of the most
                significant intersections in the commercial history of western Canada. Completed in 1912
                and rising fifteen storeys above the sidewalk, the building was among the tallest in the
                city at the time of its opening. Its four-faced clock tower, visible from blocks away,
                quickly became one of Vancouver's most recognizable public markers -- a meeting point,
                a wayfinding landmark, and a symbol of the young city's rapid growth.
              </p>
              <p>
                Commissioned by entrepreneur Dominic Burns and designed by the prominent Vancouver
                architectural firm Parr & Fee, Vancouver Block is a defining example of the Edwardian
                Commercial style that shaped the city's downtown core during the pre-war construction
                boom. Its steel-framed structure, clad in pale terracotta and capped by an ornamental
                cornice and clock mechanism, expressed the confidence of a city that had grown from a
                frontier mill town to a major Pacific port in scarcely two decades.
              </p>
              <p>
                Today, Vancouver Block holds Class A heritage status on the Vancouver Heritage Register
                and is listed on the Canadian Register of Historic Places. Its marble lobby, terrazzo
                floors, and original oak panelling survive as evidence of the quality of materials and
                craftsmanship that characterized commercial construction in early twentieth-century Vancouver.
              </p>

              <div className="not-prose mt-10 flex flex-wrap gap-4">
                <Button href="/history" variant="primary" size="lg">
                  Explore the History
                </Button>
                <Button href="/architecture" variant="secondary" size="lg">
                  View Architecture
                </Button>
              </div>
            </div>

            {/* Key facts sidebar */}
            <aside className="hidden lg:block w-64 shrink-0 space-y-5 rounded-2xl border border-heritage-bronze/10 bg-heritage-cream/40 p-6">
              <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Quick Facts</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-heritage-charcoal">Completed</dt>
                  <dd className="text-heritage-charcoal/60">1912</dd>
                </div>
                <div>
                  <dt className="font-medium text-heritage-charcoal">Architect</dt>
                  <dd className="text-heritage-charcoal/60">Parr & Fee</dd>
                </div>
                <div>
                  <dt className="font-medium text-heritage-charcoal">Commissioner</dt>
                  <dd className="text-heritage-charcoal/60">Dominic Burns</dd>
                </div>
                <div>
                  <dt className="font-medium text-heritage-charcoal">Height</dt>
                  <dd className="text-heritage-charcoal/60">15 storeys</dd>
                </div>
                <div>
                  <dt className="font-medium text-heritage-charcoal">Style</dt>
                  <dd className="text-heritage-charcoal/60">Edwardian Commercial</dd>
                </div>
                <div>
                  <dt className="font-medium text-heritage-charcoal">Heritage Status</dt>
                  <dd className="text-heritage-charcoal/60">Class A (Municipal)<br/>Canadian Register Listed</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 3. ONE BUILDING. MANY STORIES.              */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="stories"
          variant="cream"
          eyebrow="Explore"
          title="One Building. Many Stories."
          subtitle="Vancouver Block is a place where architecture, enterprise, heritage, and daily city life converge. Each perspective reveals something new."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="The Architect's Story"
              eyebrow="Architecture"
              icon="Ruler"
              href="/architecture"
              variant="heritage"
            >
              Parr & Fee designed a building that married Edwardian ornament with modern steel-frame
              engineering. The details of their work can still be read on every floor.
            </Card>

            <Card
              title="The Entrepreneur's Story"
              eyebrow="Enterprise"
              icon="TrendingUp"
              href="/entrepreneurial-vancouver"
              variant="heritage"
            >
              Dominic Burns wagered on Vancouver's future -- and built a landmark to prove it.
              His story connects meatpacking, railways, and the ambitions of a booming port city.
            </Card>

            <Card
              title="The Street's Story"
              eyebrow="History"
              icon="MapPin"
              href="/history"
              variant="heritage"
            >
              Granville Street transformed from a rough frontier road to one of Canada's most
              prominent commercial corridors. Vancouver Block witnessed every chapter.
            </Card>

            <Card
              title="The Clock's Story"
              eyebrow="Clock Tower"
              icon="Clock"
              href="/architecture"
              variant="heritage"
            >
              Four illuminated faces mark the hours above Granville Street. The clock tower
              is both a mechanical marvel and an enduring piece of the city's public landscape.
            </Card>

            <Card
              title="The Heritage Story"
              eyebrow="Conservation"
              icon="Shield"
              href="/heritage-status"
              variant="heritage"
            >
              Class A heritage designation and Canadian Register listing ensure that
              this building remains protected for future generations. What does that mean in practice?
            </Card>

            <Card
              title="The Visitor's Story"
              eyebrow="Experience"
              icon="Compass"
              href="/tours"
              variant="heritage"
            >
              Whether you pass by daily or have never looked up, there is always something new
              to notice about Vancouver Block. Walking tours begin at the sidewalk.
            </Card>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 4. CLOCK TOWER FEATURE                       */}
        {/* ════════════════════════════════════════════ */}
        <ClockTowerFeature />

        {/* ════════════════════════════════════════════ */}
        {/* 5. TIMELINE PREVIEW                          */}
        {/* ════════════════════════════════════════════ */}
        <Section id="timeline-preview">
          <Timeline items={timeline} maxItems={6} showCategories={true} />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 6. HERITAGE STATUS PANEL                     */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="heritage-overview"
          variant="archive"
          eyebrow="Heritage Status"
          title="Protected Heritage"
          subtitle="Vancouver Block is recognized at both the municipal and national level as a place of lasting historical and architectural significance."
        >
          <HeritageBadgePanel compact={true} />

          <div className="mt-10 text-center">
            <Button href="/heritage-status" variant="secondary" size="md">
              Learn About Heritage Status
            </Button>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 7. ENTREPRENEURIAL PREVIEW                   */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="entrepreneurial-preview"
          variant="cream"
          eyebrow="Entrepreneurial Vancouver"
          title="Architecture as Enterprise"
          subtitle="Vancouver Block was more than a building -- it was a visible bet on the future of a city."
        >
          <div className="prose prose-lg max-w-3xl mx-auto text-center text-heritage-charcoal/80 mb-12">
            <p>
              In the early twentieth century, Vancouver was one of the fastest-growing cities in
              North America. The arrival of the Canadian Pacific Railway, the expansion of Pacific
              trade, and waves of immigration from across the world fuelled a construction boom
              that reshaped the city's skyline and streetscape within a single generation. Vancouver
              Block was born from that energy -- financed by industrial capital, designed to impress,
              and positioned at the commercial heart of a city that believed its best years were ahead.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="The Burns Empire"
              eyebrow="Enterprise"
              icon="Factory"
              variant="heritage"
            >
              From cattle yards to commercial towers: how industrial wealth shaped Vancouver's built environment.
            </Card>

            <Card
              title="Granville Street Commerce"
              eyebrow="Commerce"
              icon="Store"
              variant="heritage"
            >
              Retail, transit, signage, and spectacle -- the street as a stage for urban enterprise.
            </Card>

            <Card
              title="Pacific Trade & Investment"
              eyebrow="Capital"
              icon="Globe"
              variant="heritage"
            >
              International trade and immigration fuelled the boom that made buildings like Vancouver Block possible.
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button href="/entrepreneurial-vancouver" variant="primary" size="lg">
              Explore Entrepreneurial Vancouver
            </Button>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 8. EDUCATION GATEWAY                         */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="education"
          eyebrow="Learn"
          title="A Heritage Resource for Every Audience"
          subtitle="Vancouver Block offers learning pathways for students, educators, heritage walkers, architecture enthusiasts, and history explorers."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Students"
              eyebrow="Learning"
              icon="GraduationCap"
              href="/education"
              variant="default"
            >
              Curriculum-connected resources exploring heritage, architecture, local history, and
              civic identity through the lens of a single landmark building.
            </Card>

            <Card
              title="Teachers"
              eyebrow="Classroom"
              icon="BookOpen"
              href="/education"
              variant="default"
            >
              Lesson plans, discussion questions, and primary-source activities designed for
              secondary and post-secondary classrooms.
            </Card>

            <Card
              title="Heritage Walkers"
              eyebrow="Walking Tours"
              icon="Footprints"
              href="/education"
              variant="default"
            >
              Self-guided walking tour notes and observation prompts for anyone exploring
              Vancouver's historic downtown on foot.
            </Card>

            <Card
              title="Architecture Enthusiasts"
              eyebrow="Design"
              icon="PenTool"
              href="/education"
              variant="default"
            >
              Detailed notes on Edwardian Commercial style, structural engineering, terracotta
              cladding, and the evolution of tall-building design in Vancouver.
            </Card>

            <Card
              title="History Explorers"
              eyebrow="Discovery"
              icon="Search"
              href="/education"
              variant="default"
            >
              Research pathways, archival references, and contextual essays for anyone interested
              in the deeper history of Vancouver's commercial development.
            </Card>

            <Card
              title="Community Members"
              eyebrow="Stories"
              icon="Users"
              href="/stories"
              variant="default"
            >
              Share your connection to Vancouver Block. Memories, photographs, and oral histories
              from the people who know the building best.
            </Card>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 9. VISIT CTA                                 */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="visit"
          variant="dark"
          eyebrow="Visit"
          title="See Vancouver Block"
          subtitle="The best way to experience a heritage building is to stand in front of it."
        >
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-heritage-marble mb-2">Address</h3>
                <p className="text-heritage-marble/70 text-lg">
                  736 Granville Street<br />
                  Vancouver, BC V6Z 1A1
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-heritage-marble mb-2">Lobby Access</h3>
                <p className="text-heritage-marble/70">
                  The public lobby may be accessible during regular building hours on weekdays.
                  Office floors and the clock tower are not generally open to the public.
                  Special tours and heritage events are organized periodically.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-heritage-marble mb-2">Getting There</h3>
                <p className="text-heritage-marble/70">
                  Located at the intersection of Granville and West Georgia Streets, steps from
                  the Granville SkyTrain Station and multiple bus routes. The building is in the
                  heart of Vancouver's downtown commercial district.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end md:justify-center md:h-full">
              <Button href="/tours" variant="primary" size="lg">
                Plan a Visit
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                Get in Touch
              </Button>
            </div>
          </div>
        </Section>

      </main>

      <Footer />
    </Layout>
  );
}
