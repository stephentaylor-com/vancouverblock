import Layout from '../layouts/Layout';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import HeritageBadgePanel from '../components/features/HeritageBadgePanel.jsx';
import Timeline from '../components/features/Timeline.jsx';
import FAQ from '../components/features/FAQ.jsx';
import SourceNote from '../components/features/SourceNote.jsx';

import { timeline } from '../data/timeline.js';
import { heritageFaq } from '../data/heritageStatus.js';

export default function HeritageStatusPage() {
  const title = 'Vancouver Block Heritage Status | Class A Historic Landmark';
  const description = "Understand Vancouver Block's heritage designation, Canadian Register listing, and conservation significance.";

  const heritageTimelineItems = timeline.filter(item =>
    item.category === 'Heritage' || item.title.toLowerCase().includes('heritage') || item.title.toLowerCase().includes('designation') || item.title.toLowerCase().includes('register')
  );

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">

        {/* ════════════════════════════════════════════ */}
        {/* 1. HERO                                      */}
        {/* ════════════════════════════════════════════ */}
        <PageHero
          variant="page"
          eyebrow="Heritage Status"
          title="Why This Building Is Protected"
          subtitle="Heritage designation is an act of civic stewardship -- a decision by a community that certain places matter enough to safeguard for the future. Vancouver Block holds some of the most significant heritage recognitions available in Canada."
          image="/images/hero/heritage-hero.jpg"
        />

        {/* ════════════════════════════════════════════ */}
        {/* 2. WHAT HERITAGE DESIGNATION MEANS           */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="what-it-means"
          eyebrow="Understanding"
          title="What Heritage Designation Means"
          subtitle="A plain-language guide to why buildings are protected and what that protection involves."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Heritage designation is a formal recognition by a government authority that a building,
                structure, or place has significant historical, architectural, or cultural value. It is
                not a museum label -- it is a living framework for managing change. Designated buildings
                continue to be used, maintained, and adapted, but changes to their character-defining
                elements are subject to review to ensure that the qualities that make them significant
                are preserved.
              </p>
              <p>
                In British Columbia, heritage designation can occur at the municipal level (through
                local government heritage registers and bylaws), at the provincial level, and at the
                federal level (through the Canadian Register of Historic Places). Vancouver Block holds
                recognition at both the municipal and national levels, reflecting the breadth of its
                significance.
              </p>
              <p>
                For the public, heritage designation means that a building like Vancouver Block will
                not simply vanish one day, replaced by something that erases the memory and
                craftsmanship it embodies. It means that the terracotta cornice, the marble lobby,
                the clock tower's illuminated faces, and the building's place on the Granville
                Street skyline are matters of shared civic interest -- not just private property
                decisions.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/features/corinthian-capital.jpg"
                alt="Corinthian capital detail on Vancouver Block's facade"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 3. HERITAGE BADGE PANEL                      */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="heritage-badges"
          variant="archive"
          eyebrow="Designations"
          title="Heritage Recognitions"
          subtitle="Vancouver Block's formal heritage designations, from municipal protection to national recognition."
        >
          <HeritageBadgePanel compact={false} />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 4. HERITAGE MILESTONES TIMELINE              */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="heritage-milestones"
          eyebrow="Milestones"
          title="Heritage Timeline"
          subtitle="Key moments in the formal recognition of Vancouver Block's heritage value."
        >
          <Timeline items={heritageTimelineItems} showCategories={true} />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 5. WHY INTERIORS MATTER                      */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="interiors"
          variant="cream"
          eyebrow="Interior Heritage"
          title="Why Interiors Matter"
          subtitle="Heritage is not just about facades. The spaces inside a building carry their own history."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                When people think of heritage buildings, they often picture the exterior -- the
                facade, the roofline, the ornamental details visible from the street. But the
                interiors of heritage buildings are equally significant. The lobby of Vancouver Block,
                with its marble wall panels, terrazzo floors, and oak-panelled elevator surrounds,
                is a surviving example of the kind of craftsmanship and material quality that
                characterized the best commercial interiors of the Edwardian period.
              </p>
              <p>
                Interior features like these are character-defining elements -- they contribute to
                the heritage value of the building as a whole. Terrazzo flooring, for example, is not
                simply decorative: it represents a specific construction technique, a tradition of
                skilled labour, and a material choice that reflects the values and economics of its
                era. Marble, oak, and brass fixtures carry similar layers of meaning. Together, they
                create a public room that connects present-day visitors to the ambitions and standards
                of early twentieth-century Vancouver.
              </p>
              <p>
                Conserving these interior features requires specialized knowledge and careful planning.
                Cleaning methods, repair techniques, and replacement materials must be chosen to
                preserve the integrity of the original design. The goal is not to freeze the interior
                in time, but to maintain its legibility -- to ensure that future visitors can still
                read the building's history in its materials and spaces.
              </p>
            </div>

            <aside className="space-y-6">
              <Card
                title="Character-Defining Elements"
                variant="heritage"
                icon="Eye"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  Character-defining elements are the materials, forms, locations, spatial
                  configurations, uses, and cultural associations that contribute to the heritage
                  value of a place. For Vancouver Block, these include the terracotta facade, the
                  clock tower, the lobby finishes, and the building's relationship to the Granville
                  Street streetscape.
                </p>
              </Card>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 6. ADAPTIVE REUSE                            */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="adaptive-reuse"
          eyebrow="Adaptive Reuse"
          title="Keeping Buildings Alive"
          subtitle="The most effective conservation strategy is productive use."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Heritage conservation does not require that a building remain frozen in its original
                use. Adaptive reuse -- the process of repurposing an existing building for new
                functions while retaining its heritage features -- is widely recognized as one of the
                most effective strategies for ensuring the long-term survival of historic structures.
                A building that is occupied, maintained, and economically viable is far more likely to
                endure than one that sits empty.
              </p>
              <p>
                Vancouver Block has remained in continuous commercial use since its opening in 1912. Its
                office floors continue to house professional tenants, and its ground-level spaces engage
                the street. This continuity of use has been a key factor in the building's survival.
                Unlike many of its contemporaries, which were demolished during periods of rapid
                redevelopment, Vancouver Block has remained a productive part of the city's commercial
                fabric -- generating the revenue needed to fund ongoing maintenance and conservation.
              </p>
              <p>
                The principle at work is straightforward: buildings that earn their keep tend to
                survive. Heritage designation provides the regulatory framework; adaptive reuse
                provides the economic engine. Together, they make conservation sustainable.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/elevator-lobby.jpg"
                alt="Restored elevator lobby showing period finishes still in commercial use"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 7. SUSTAINABLE CITIES                        */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="sustainability"
          variant="cream"
          eyebrow="Sustainability"
          title="Heritage and Sustainable Cities"
          subtitle="Preserving old buildings is one of the most sustainable things a city can do."
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="prose prose-lg text-heritage-charcoal/80">
              <p>
                Every existing building represents an enormous investment of energy and materials --
                what engineers call embodied energy. The steel, terracotta, marble, concrete, and
                timber in Vancouver Block were extracted, manufactured, transported, and assembled
                more than a century ago. Demolishing the building would waste all of that embodied
                energy and generate significant construction waste. Replacing it with a new structure
                would require an equivalent or greater expenditure of energy and resources.
              </p>
              <p>
                Heritage conservation, in this light, is a form of environmental stewardship. By
                maintaining and adapting existing buildings rather than demolishing and replacing
                them, cities can reduce their carbon footprint, conserve natural resources, and
                avoid the environmental costs of new construction. The greenest building, as the
                saying goes, is often the one that already exists.
              </p>
            </div>

            <div className="prose prose-lg text-heritage-charcoal/80">
              <p>
                Heritage buildings also contribute to the social sustainability of cities. They
                provide visual diversity, historical continuity, and human-scaled streetscapes that
                encourage walking, community interaction, and a sense of place. A city composed
                entirely of new construction risks becoming generic -- a place without memory or
                character. Heritage buildings anchor the urban environment in the specificity of
                particular times, places, and communities.
              </p>
              <p>
                Vancouver Block, standing among the glass towers of the modern downtown, is a
                reminder that sustainability is not only about new technologies and future-facing
                design. It is also about valuing what already exists -- the materials already in
                place, the energy already expended, the craftsmanship already achieved -- and
                finding ways to carry it forward.
              </p>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 8. HERITAGE FAQ                              */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="faq"
          eyebrow="Questions"
          title="Heritage FAQ"
          subtitle="Common questions about heritage designation, conservation, and Vancouver Block."
        >
          <FAQ
            items={heritageFaq}
            title="Frequently Asked Questions"
            intro="Answers to common questions about heritage buildings, conservation, and Vancouver Block's protected status."
          />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 9. HERITAGE EDUCATION QUOTE                  */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-heritage-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <blockquote>
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium italic leading-snug text-heritage-charcoal/90">
                "Heritage is not just about preserving old buildings. It is about preserving civic
                memory, skilled materials, urban continuity, and public identity."
              </p>
            </blockquote>
            <div className="heritage-rule mx-auto mt-8 max-w-12" aria-hidden="true"></div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* 10. SEO BLOCK                                */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="why-heritage-matters"
          eyebrow="Context"
          title="Why Vancouver Block's Heritage Status Matters"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Vancouver Block's heritage status -- Class A on the Vancouver Heritage Register and
                listed on the Canadian Register of Historic Places -- places it among the most formally
                recognized heritage structures in British Columbia. This recognition reflects the
                building's exceptional architectural quality, its historical significance as a product
                of Vancouver's pre-war construction boom, and its enduring role as a public landmark
                in the downtown core.
              </p>
              <p>
                Heritage designation ensures that changes to the building's character-defining elements
                are reviewed within a framework that balances the needs of conservation with the
                realities of ongoing commercial use. It provides a mechanism for protecting the
                terracotta facade, the marble lobby, the clock tower, and the building's contribution
                to the Granville Street streetscape -- features that belong not only to the building's
                owner but, in a civic sense, to the broader community.
              </p>
              <p>
                Understanding heritage status is part of understanding what kind of city Vancouver
                wants to be. The decision to protect buildings like Vancouver Block is a statement
                about values: that history, craftsmanship, and public memory matter, and that the
                best cities are those that find ways to carry their past forward into the future.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/features/clock-face-city.jpg"
                alt="Vancouver Block clock face with city buildings visible beyond"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 11. SOURCE NOTE                              */}
        {/* ════════════════════════════════════════════ */}
        <Section id="sources">
          <SourceNote variant="history" />
        </Section>

      </main>

      <Footer />
    </Layout>
  );
}
