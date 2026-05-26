import Layout from '../layouts/Layout';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import Timeline from '../components/features/Timeline.jsx';
import HeritageBadgePanel from '../components/features/HeritageBadgePanel.jsx';
import SourceNote from '../components/features/SourceNote.jsx';

import { timeline } from '../data/timeline.js';

export default function HistoryPage() {
  const title = 'History of Vancouver Block | From 1912 to Today';
  const description = "Discover the history of Vancouver Block, from Dominic Burns's vision in 1910 to its Class A heritage status today.";

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">

        {/* ════════════════════════════════════════════ */}
        {/* 1. HERO                                      */}
        {/* ════════════════════════════════════════════ */}
        <PageHero
          variant="page"
          eyebrow="History"
          title="A Building That Tells the Story of a City"
          subtitle="For more than a century, Vancouver Block has stood at the intersection of commerce, ambition, and civic identity in downtown Vancouver. Its history is inseparable from the history of the city itself."
          image="/images/hero/history-hero.jpg"
        />

        {/* ════════════════════════════════════════════ */}
        {/* 2. BEFORE THE BLOCK                          */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="before-the-block"
          eyebrow="Prologue"
          title="Before the Block"
          subtitle="How a frontier sawmill town became a city of stone, steel, and commercial ambition."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                In 1886, the year of its incorporation, Vancouver was a small settlement at the
                western terminus of the Canadian Pacific Railway. The Great Fire of that same year
                destroyed most of the young town in less than an hour. What rose from the ashes was
                something different: a city determined to build in permanent materials, with ambitions
                that far exceeded its modest population.
              </p>
              <p>
                The arrival of the transcontinental railway transformed Vancouver's prospects
                overnight. Timber, fish, and minerals flowed out through the port; capital, migrants,
                and manufactured goods flowed in. By the turn of the century, the muddy streets of
                Gastown and the surrounding blocks had given way to stone and brick commercial
                buildings, and the intersection of Granville and Georgia Streets was emerging as the
                gravitational centre of the city's business life.
              </p>
              <p>
                The first decade of the twentieth century saw a construction boom unlike anything
                western Canada had experienced. Fuelled by immigration, resource wealth, and access
                to Pacific and trans-Pacific trade routes, Vancouver began to build upward. The
                Dominion Building, begun in 1907, signalled the start of a race for the skyline.
                It was in this atmosphere of intense commercial optimism that Dominic Burns looked
                at the corner of Granville and Georgia and saw the site for his landmark.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card
                title="What Was Edwardian Vancouver?"
                variant="heritage"
                icon="Calendar"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  The Edwardian period in Vancouver (roughly 1900 to 1914) was an era of extraordinary
                  growth. The city's population increased more than tenfold between 1891 and 1911. New
                  commercial buildings, civic institutions, and residential neighbourhoods were
                  constructed at a pace that reshaped the landscape within a single generation.
                  Architectural styles imported from Britain and the eastern United States were adapted
                  to local conditions, creating a distinctive urban character that still defines
                  Vancouver's oldest commercial streets.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 3. DOMINIC BURNS                             */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="dominic-burns"
          variant="cream"
          eyebrow="The Patron"
          title="Dominic Burns"
          subtitle="The entrepreneur who wagered on Vancouver's future."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Dominic Burns was one of the most prominent business figures in western Canada during
                the early twentieth century. Together with his brother Patrick, he built P. Burns & Co.
                into the largest meatpacking and ranching operation in the Canadian West, with stockyards,
                slaughterhouses, cold-storage facilities, and retail outlets stretching from Alberta to
                the Pacific coast.
              </p>
              <p>
                Burns's decision to commission a major commercial building in Vancouver was not merely an
                investment in real estate. It was a statement about the city's position in the emerging
                economy of western Canada. At a time when most major capital still flowed through eastern
                financial centres, Burns was among a generation of western entrepreneurs who believed that
                the Pacific coast would become the next great centre of Canadian commerce. Vancouver Block
                was designed to express that confidence in steel, terracotta, and glass.
              </p>
              <p>
                The choice of Granville and Georgia Streets was deliberate. By 1910 this intersection
                was well established as the commercial crossroads of the city, with streetcar lines,
                department stores, banks, and professional offices clustering along both axes. Burns
                selected the architectural firm of Parr & Fee -- one of Vancouver's most accomplished
                practices -- to design a building that would stand among the finest in the city.
              </p>
            </div>

            <div className="space-y-6">
              {/* Pull Quote */}
              <blockquote className="border-l-4 border-heritage-bronze pl-6 py-4 bg-white/50 rounded-r-xl">
                <p className="font-display text-xl italic text-heritage-charcoal/90 leading-relaxed">
                  "A building of this character is not erected for the needs of today alone, but
                  in anticipation of the city that is to come."
                </p>
                <footer className="mt-3 text-sm text-heritage-charcoal/50">
                  -- Attributed to the commercial press, c. 1912
                </footer>
              </blockquote>

              <Card
                title="Who Were Parr & Fee?"
                variant="heritage"
                icon="PenTool"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  Thomas Arthur Fee and George William Parr established their architectural partnership
                  in Vancouver in 1905. Over the following decade they designed some of the city's most
                  significant Edwardian commercial buildings, combining the Chicago School's structural
                  rationalism with the ornamental sensibility of the British Arts and Crafts tradition.
                  Their work helped define Vancouver's early commercial skyline.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 4. CONSTRUCTION                              */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="construction"
          eyebrow="Building"
          title="Construction"
          subtitle="Steel, terracotta, and modern engineering on the Granville Street frontier."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Construction of Vancouver Block began after the city issued the building permit
                in 1911. The project was ambitious by any standard: fifteen storeys supported by a
                riveted steel frame, with deep foundations driven into the challenging soil conditions
                of the downtown peninsula. The steel-frame technique, still relatively new in
                Vancouver at the time, allowed the building to reach heights that traditional masonry
                construction could not achieve.
              </p>
              <p>
                The exterior was clad in pale terracotta -- a material that offered both ornamental
                flexibility and fire resistance. Terracotta panels could be moulded into classical
                cornices, pilasters, and decorative friezes, giving the building the visual richness
                of carved stone at a fraction of the weight. The material was also self-cleaning to
                a degree, an important practical consideration in a rainy coastal city.
              </p>
              <p>
                The interior featured a marble lobby with terrazzo floors, oak-panelled elevator
                surrounds, and brass fixtures. Upper floors were fitted out as leasable commercial
                office space, designed to attract the professional tenants -- lawyers, accountants,
                insurance agents, real estate brokers -- who constituted the backbone of a modern
                business district. The penthouse level, directly beneath the clock tower, offered
                panoramic views of Burrard Inlet and the North Shore mountains.
              </p>
            </div>

            <div className="space-y-6">
              <Card
                title="What Did Fifteen Storeys Mean in 1912?"
                variant="heritage"
                icon="Building2"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  At the time Vancouver Block opened, fifteen storeys was a significant height for a
                  building anywhere in Canada, and extraordinary for a city as young as Vancouver.
                  The building was part of a small cohort -- alongside the Dominion Building and
                  the Sun Tower -- that established Vancouver's first real skyline and announced the
                  city's arrival as a metropolitan centre to be taken seriously.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 5. OPENING IN 1912                           */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="opening"
          variant="archive"
          eyebrow="1912"
          title="Opening"
          subtitle="A new landmark joins the skyline of a young, ambitious city."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Vancouver Block opened in 1912, joining the Dominion Building and the Sun Tower as
                part of an extraordinary trio of tall buildings that defined Vancouver's nascent
                skyline. The Sun Tower, completed the same year, briefly claimed the title of the
                tallest commercial building in the British Empire. Vancouver, barely a quarter-century
                old, was suddenly a city with a vertical horizon.
              </p>
              <p>
                The clock tower, mounted above the fifteenth floor and visible from the surrounding
                streets, immediately became one of the city's most recognizable features. Its four
                illuminated faces marked the hours for the workers, shoppers, and transit riders who
                moved through the Granville and Georgia intersection daily. The tower was both a
                functional timepiece and a piece of civic architecture -- a public clock in the
                tradition of European town squares and North American municipal buildings, transplanted
                to the commercial heart of a young Pacific port.
              </p>
              <p>
                The building's upper floors became home to the Commercial Club, a business association
                that served as an informal headquarters for the city's professional class. Lawyers,
                investors, and company directors took offices on the upper storeys, establishing
                Vancouver Block as one of the most prestigious commercial addresses in the city.
              </p>
            </div>

            <div className="space-y-6">
              <Card
                title="Vancouver's Skyline Trio of 1912"
                variant="heritage"
                icon="Building2"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  Three buildings defined early Vancouver: the Dominion Building (1910), the Sun Tower
                  (1912), and Vancouver Block (1912). Together they established the city's first true
                  skyline and signalled Vancouver's ambition to stand alongside the major cities of
                  eastern Canada and the Pacific Northwest.
                </p>
              </Card>

              <blockquote className="border-l-4 border-heritage-bronze pl-6 py-4 bg-white/50 rounded-r-xl">
                <p className="font-display text-lg italic text-heritage-charcoal/90 leading-relaxed">
                  The clock faces could be read from blocks away -- a public service embedded in
                  private enterprise.
                </p>
              </blockquote>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 6. THROUGH THE CENTURY                       */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="through-the-century"
          eyebrow="Evolution"
          title="The Building Through the Century"
          subtitle="From neon illumination to heritage recognition, Vancouver Block adapted and endured."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <h3 className="font-display text-2xl font-semibold text-heritage-charcoal mt-0">The Neon Era</h3>
              <p>
                In the late 1920s, neon illumination was added to the clock tower -- one of the earliest
                neon installations on a major Vancouver building. This addition connected Vancouver Block
                to the broader neon culture that would come to define Granville Street for decades. By
                mid-century, the corridor from Robson to Hastings was dense with illuminated signs,
                theatre marquees, and glowing storefronts, and the neon-lit clock tower stood above it
                all as a visible anchor.
              </p>

              <h3 className="font-display text-2xl font-semibold text-heritage-charcoal">Mid-Century Changes</h3>
              <p>
                Like many downtown commercial buildings of its era, Vancouver Block weathered the
                economic disruptions of the Depression and the Second World War, continuing to serve
                as office space through shifting markets. The postwar period brought new construction
                to downtown Vancouver, including modernist towers that gradually reshaped the skyline
                around the older Edwardian buildings. Granville Street itself evolved -- from its
                heyday as the city's premier shopping and entertainment district through the
                pedestrian-mall experiments and transit conversions of the late twentieth century.
              </p>

              <h3 className="font-display text-2xl font-semibold text-heritage-charcoal">Preservation and Renewal</h3>
              <p>
                Through all these changes, Vancouver Block survived. While many of its contemporaries
                were demolished to make way for modern development, the building's architectural
                quality, prominent location, and the enduring appeal of its clock tower helped it
                persist. The growing heritage conservation movement in Vancouver, which gained
                institutional force in the 1970s, eventually brought formal recognition and
                protection.
              </p>
            </div>

            <div className="space-y-6">
              <Card
                title="Granville Street's Neon Legacy"
                variant="heritage"
                icon="Zap"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  From the 1920s through the 1960s, Granville Street was one of the most
                  brilliantly illuminated commercial corridors in western Canada. Neon signs
                  for theatres, hotels, and department stores lined the street, and the clock
                  tower's own neon glow made Vancouver Block a beacon visible across the downtown core.
                </p>
              </Card>

              <Card
                title="Survival Against the Odds"
                variant="heritage"
                icon="Shield"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  Many Edwardian commercial buildings in downtown Vancouver were demolished during
                  the postwar development boom. Vancouver Block's survival owes much to its iconic
                  clock tower, its continued commercial viability, and the emergence of
                  heritage protection policies in the 1970s.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 7. HERITAGE RECOGNITION                      */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="heritage-recognition"
          variant="cream"
          eyebrow="Recognition"
          title="Heritage Designation"
          subtitle="A century of history, formally recognized."
        >
          <div className="grid gap-10 lg:grid-cols-3 mb-10">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Vancouver Block's formal journey through the heritage system reflects the broader
                maturation of heritage conservation in British Columbia. In 1974, the building was
                designated as a historic structure under the Vancouver Charter. In 2006, the City of
                Vancouver granted it Class A status on the Heritage Register -- the highest
                classification, reserved for buildings of exceptional architectural and historical
                value. In 2009, Vancouver Block was listed on the Canadian Register of Historic
                Places, placing it among the country's formally recognized heritage structures.
              </p>
              <p>
                These designations acknowledge not only the building's architectural distinction but
                also its role as a witness to Vancouver's evolution from a young frontier city into
                one of Canada's major metropolitan centres.
              </p>
            </div>

            <div>
              <Card
                title="What Is Class A Heritage?"
                variant="heritage"
                icon="Award"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  Class A is the highest heritage classification on the Vancouver Heritage Register.
                  It is reserved for buildings judged to have exceptional significance based on
                  their architectural merit, historical associations, and contribution to the
                  city's built heritage. Class A buildings receive the strongest protections
                  under municipal heritage policy.
                </p>
              </Card>
            </div>
          </div>

          <HeritageBadgePanel compact={true} />

          <div className="mt-10">
            <Button href="/heritage-status" variant="secondary" size="md">
              Explore Heritage Status in Detail
            </Button>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 8. FULL TIMELINE                             */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="full-timeline"
          variant="cream"
          eyebrow="Timeline"
          title="The Complete Timeline"
          subtitle="Every significant moment in the history of Vancouver Block, set against the broader development of the city."
        >
          <Timeline items={timeline} showCategories={true} />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 9. SOURCE NOTE                               */}
        {/* ════════════════════════════════════════════ */}
        <Section id="sources">
          <SourceNote variant="history" />
        </Section>

      </main>

      <Footer />
    </Layout>
  );
}
