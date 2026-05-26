import Layout from '../layouts/Layout';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import ArchitectureDetailDecoder from '../components/features/ArchitectureDetailDecoder.jsx';
import MaterialStories from '../components/features/MaterialStories.jsx';
import SourceNote from '../components/features/SourceNote.jsx';


export default function ArchitecturePage() {
  const title = 'Architecture of Vancouver Block | Terracotta, Clock Tower & Edwardian Design';
  const description = 'Learn about the Edwardian Commercial architecture, terracotta facade, marble lobby, and clock tower of Vancouver Block.';

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">

        {/* ════════════════════════════════════════════ */}
        {/* 1. HERO                                      */}
        {/* ════════════════════════════════════════════ */}
        <PageHero
          variant="page"
          eyebrow="Architecture"
          title="Reading a Building"
          subtitle="Every cornice, column, and panel of terracotta on Vancouver Block expresses something about the ambitions of its era. Architecture is a language. This page is a guide to reading it."
          image="/images/hero/architecture-hero.jpg"
        />

        {/* ════════════════════════════════════════════ */}
        {/* 2. EDWARDIAN COMMERCIAL STYLE                */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="edwardian-style"
          eyebrow="Style"
          title="Edwardian Commercial Architecture"
          subtitle="A style forged from confidence, classical precedent, and modern engineering."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                The Edwardian Commercial style emerged in the early twentieth century as cities across
                North America and the British Empire grew rapidly and needed buildings that could
                project permanence, authority, and commercial sophistication. It drew on classical
                precedent -- the pilasters, cornices, and ordered proportions of Renaissance and
                Baroque architecture -- while embracing the structural possibilities of steel-frame
                construction and the new material technologies of the industrial age.
              </p>
              <p>
                In Vancouver, the Edwardian Commercial style defined the city's first generation of
                tall buildings. Architects like Parr & Fee worked within its conventions to produce
                structures that were both visually impressive and functionally modern: open floor
                plates suitable for leasable office space, large windows admitting natural light,
                fireproof construction, and elevator service. The style announced that Vancouver
                was no longer a frontier outpost, but a city that could stand alongside the
                established commercial centres of the continent.
              </p>
              <p>
                Vancouver Block is among the finest surviving examples of this style in the city. Its
                terracotta cladding, classical tripartite organization, and rich ornamental program
                place it squarely in the tradition of Edwardian commercial architecture, while its
                clock tower and prominent corner location give it a civic presence that transcends
                the purely commercial.
              </p>
            </div>

            <aside className="space-y-6">
              <Card
                title="Key Characteristics"
                variant="heritage"
                icon="List"
              >
                <ul className="text-sm text-heritage-charcoal/70 space-y-2 mt-2">
                  <li>Steel-frame structural system</li>
                  <li>Terracotta or stone cladding</li>
                  <li>Classical tripartite composition (base, shaft, capital)</li>
                  <li>Decorative cornices and string courses</li>
                  <li>Large commercial windows</li>
                  <li>Ornamental entrance lobbies</li>
                  <li>Flat or slightly pitched roofs with parapets</li>
                </ul>
              </Card>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 3. TRIPARTITE COMPOSITION                    */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="tripartite"
          variant="cream"
          eyebrow="Form"
          title="Tripartite Composition"
          subtitle="Base, shaft, and capital: the classical grammar of a tall building."
        >
          <div className="prose prose-lg text-heritage-charcoal/80">
            <p>
              One of the defining principles of Edwardian Commercial architecture is the tripartite
              composition -- the organization of a tall building into three visually distinct zones,
              by analogy with a classical column. This formula, articulated most influentially by the
              Chicago architect Louis Sullivan, became the standard approach to giving tall buildings
              visual coherence and a sense of monumental order.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <Card
              title="The Base"
              eyebrow="Ground & Lower Floors"
              icon="Layers"
              variant="heritage"
            >
              <p className="text-sm text-heritage-charcoal/70">
                The lowest storeys of Vancouver Block form the building's base. Here, the
                architecture is designed to engage the street: the main entrance, retail frontage,
                and the richest decorative detail are concentrated at the pedestrian level. Heavier
                materials and bolder proportions give the base a sense of grounding and solidity.
              </p>
            </Card>

            <Card
              title="The Shaft"
              eyebrow="Middle Floors"
              icon="AlignVerticalSpaceAround"
              variant="heritage"
            >
              <p className="text-sm text-heritage-charcoal/70">
                The middle storeys form the shaft -- the building's repetitive, functional core.
                Here, office floors are stacked in a regular rhythm of windows and spandrel panels.
                Ornament is restrained, emphasizing the building's vertical proportions and the
                clean geometry of its structural grid.
              </p>
            </Card>

            <Card
              title="The Capital"
              eyebrow="Upper Floors & Crown"
              icon="Crown"
              variant="heritage"
            >
              <p className="text-sm text-heritage-charcoal/70">
                The uppermost storeys and the roofline form the capital -- the building's crown.
                At Vancouver Block, this zone culminates in an ornamental cornice and the iconic
                four-faced clock tower, which terminates the composition with visual drama and
                gives the building its unmistakable silhouette against the sky.
              </p>
            </Card>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 4. ARCHITECTURE DETAIL DECODER               */}
        {/* ════════════════════════════════════════════ */}
        <Section id="detail-decoder">
          <ArchitectureDetailDecoder />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 5. MATERIAL STORIES                          */}
        {/* ════════════════════════════════════════════ */}
        <Section id="materials" variant="archive">
          <MaterialStories />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 6. THE LOBBY                                 */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="lobby"
          eyebrow="Interior"
          title="The Lobby"
          subtitle="A public room in marble, terrazzo, and oak."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                The lobby of Vancouver Block is one of the most intact Edwardian commercial interiors
                in Vancouver. Entering from Granville Street, visitors step into a space defined by
                marble wall panels, terrazzo flooring laid in geometric patterns, and oak-panelled
                elevator surrounds. The proportions are generous -- high ceilings, wide corridors,
                and a sense of considered formality that reflects the building's original role as a
                prestige commercial address.
              </p>
              <p>
                These materials were not chosen only for their beauty. Marble was valued for its
                durability in high-traffic public areas; terrazzo -- a composite of marble chips set
                in cement and polished to a smooth finish -- offered both visual richness and
                exceptional longevity. Oak panelling, a hallmark of fine commercial interiors of the
                period, provided warmth, acoustic softness, and a sense of permanence. Together, these
                materials created a public room that expressed both the prosperity of the building's
                tenants and the civic ambitions of its patron.
              </p>
              <p>
                The lobby has been the subject of careful conservation over the years, with efforts
                focused on preserving the original finishes while maintaining the building's function
                as a working commercial property. It remains a rare surviving example of the kind of
                interior craftsmanship that characterized Vancouver's best Edwardian buildings.
              </p>
            </div>

            <aside className="space-y-6">
              <Card
                title="Materials Present in the Lobby"
                variant="heritage"
                icon="Gem"
              >
                <ul className="text-sm text-heritage-charcoal/70 space-y-2 mt-2">
                  <li>Marble wall cladding</li>
                  <li>Terrazzo flooring with geometric patterns</li>
                  <li>Oak-panelled elevator surrounds</li>
                  <li>Brass fixtures and hardware</li>
                  <li>Original moulding profiles</li>
                </ul>
              </Card>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 7. THE CLOCK TOWER                             */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="clock-tower"
          variant="cream"
          eyebrow="Crown"
          title="The Clock Tower"
          subtitle="Engineering, symbolism, and urban identity in a single architectural element."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                The clock tower is the defining architectural element of Vancouver Block and one of
                the most recognizable features of the downtown Vancouver skyline. Mounted above the
                fifteenth floor, the tower houses a four-faced clock mechanism with illuminated dials
                visible from surrounding streets. Its position at the corner of Granville and Georgia
                gives it unobstructed sightlines along two of the city's primary commercial axes.
              </p>
              <p>
                Architecturally, the clock tower serves several functions simultaneously. It is the
                building's visual terminus — the final element in the tripartite composition that
                draws the eye upward from the base through the shaft to the crown. It is a piece of
                public infrastructure, providing a shared timepiece to the surrounding commercial
                district at a time when personal watches were still a relative luxury. And it is a
                symbol of civic aspiration, placing Vancouver Block in the tradition of clock towers
                on town halls, railway stations, and public markets throughout the Western world.
              </p>
              <p>
                The addition of neon illumination in the late 1920s introduced a new layer of visual
                identity, connecting the tower to the emerging neon culture of Granville Street.
                The neon-lit clock became an icon — a visible marker of the intersection of heritage
                and modernity that continues to define the building's public identity.
              </p>
              <p>
                The clock mechanism has been maintained and serviced over the decades, with
                conservation efforts ensuring that the tower remains both structurally sound and
                operationally functional. The illuminated faces continue to mark the hours above
                Granville Street, as they have for more than a century.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/features/clock-neon-hands.jpg"
                  alt="Vancouver Block clock face with neon-outlined hands"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/features/clock-mechanism.jpg"
                  alt="Original 1912 clock mechanism inside the tower"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              </div>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 8. LOOK UP FROM THE SIDEWALK                 */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="look-up"
          eyebrow="Observation"
          title="Look Up From the Sidewalk"
          subtitle="A guide to seeing what you might otherwise walk past."
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="prose prose-lg text-heritage-charcoal/80">
              <p>
                Most people experience Vancouver Block from the sidewalk, glancing up briefly before
                continuing along Granville Street. But there is more to see than a first glance
                reveals. Stand on the west side of Granville, south of Georgia, and look up. You will
                see the full elevation of the building, from the street-level storefronts to the clock
                tower and its four illuminated faces.
              </p>
              <p>
                Notice the rhythm of the windows -- how they are organized in regular bays that
                reflect the steel grid behind the terracotta surface. Look at the cornice line,
                the decorative string courses that mark the transition between the base, shaft, and
                capital zones. See how the ornamental detail is richest at the base and the crown,
                where it engages the human eye, and most restrained in the middle storeys, where
                the office floors stack quietly toward the sky.
              </p>
            </div>

            <div className="prose prose-lg text-heritage-charcoal/80">
              <p>
                Step closer and examine the terracotta at street level. You may be able to see the
                individual panel joints, the moulded profiles of classical motifs -- dentils,
                egg-and-dart patterns, fluted pilasters -- rendered in fired clay rather than
                carved stone. These details repay close attention. They were designed by architects
                who understood that a building is experienced not only as a silhouette against the
                sky but as a surface encountered at arm's length.
              </p>
              <p>
                If the lobby is accessible, step inside. The transition from the busy sidewalk to
                the marble-and-terrazzo interior is itself a kind of architectural experience -- a
                passage from the public world of the street into a more formal, measured space
                that reflects the commercial culture of early twentieth-century Vancouver.
              </p>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 9. RESTORATION AND CONSERVATION              */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="conservation"
          variant="archive"
          eyebrow="Conservation"
          title="Restoration and Conservation"
          subtitle="Keeping a century-old building alive requires knowledge, patience, and skilled hands."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Preserving a building like Vancouver Block is an ongoing process, not a single event.
                Terracotta, while durable, is subject to weathering, freeze-thaw cycles, and
                the effects of urban pollution. Over time, individual panels may crack, glaze may
                deteriorate, and mortar joints may need repointing. The conservation of a terracotta
                facade requires specialist knowledge -- an understanding of the material's properties,
                its manufacturing history, and the techniques appropriate for repair and replacement.
              </p>
              <p>
                Interior conservation presents its own challenges. The marble wall panels, terrazzo
                floors, and oak woodwork of the lobby are heritage features that require careful
                maintenance. Cleaning must use appropriate methods to avoid damaging original finishes.
                Repairs must match original materials as closely as possible. The goal is not to make
                the building look new, but to maintain the integrity and legibility of the original
                design while keeping the building in functional, productive use.
              </p>
              <p>
                The clock mechanism itself -- a mechanical system designed for reliability over decades
                -- requires periodic servicing to ensure accurate timekeeping and the continued
                operation of the illuminated dials. The conservation of the clock tower involves both
                the mechanical works and the architectural structure that houses them, including the
                glazing, metalwork, and neon elements that make the tower visible from the street.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/restoration-aerial.jpg"
                alt="Aerial view of Vancouver Block showing conservation work on the roof and tower"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 10. SEO BLOCK                                */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="edwardian-architecture-vancouver"
          variant="cream"
          eyebrow="Context"
          title="Edwardian Commercial Architecture in Vancouver"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Vancouver's downtown core retains several significant examples of Edwardian Commercial
                architecture, a style that dominated the city's commercial construction between roughly
                1900 and 1914. These buildings -- including Vancouver Block, the Dominion Building, the
                Sun Tower, and others -- were designed during a period of extraordinary growth when
                Vancouver transformed from a small coastal settlement into one of Canada's major cities.
              </p>
              <p>
                Edwardian Commercial buildings are characterized by steel-frame construction, terracotta
                or stone cladding, classical ornamental programs, and tripartite compositions derived
                from the principles of the Chicago School. They were designed to project commercial
                confidence and civic sophistication, and they remain among the most architecturally
                distinguished buildings in the city. The preservation of these structures -- through
                heritage designation, adaptive reuse, and ongoing conservation -- is an important part
                of maintaining the visual and historical character of downtown Vancouver.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/features/terracotta-capital.jpg"
                alt="Glazed terracotta capital detail on Vancouver Block"
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
