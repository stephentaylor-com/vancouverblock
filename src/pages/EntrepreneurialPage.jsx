import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import EntrepreneurialVancouverExplorer from '../components/features/EntrepreneurialVancouverExplorer.jsx';
import ThenNowPanel from '../components/features/ThenNowPanel.jsx';
import SourceNote from '../components/features/SourceNote.jsx';
import Layout from '../layouts/Layout';

export default function EntrepreneurialPage() {
  const title = 'Entrepreneurial Vancouver | Dominic Burns, Granville Street & Vancouver Block';
  const description = 'Discover how Vancouver Block reflects the ambition, commerce, and city-building energy of early twentieth-century Vancouver.';

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">

        {/* ════════════════════════════════════════════ */}
        {/* 1. HERO                                      */}
        {/* ════════════════════════════════════════════ */}
        <PageHero
          variant="page"
          eyebrow="Entrepreneurial Vancouver"
          title="Architecture as Enterprise"
          subtitle="Vancouver Block was not only designed; it was wagered into existence. Behind every cornice and column stands a story of capital, risk, and belief in a city's future."
          image="/images/hero/entrepreneurial-hero.jpg"
        />

        {/* ════════════════════════════════════════════ */}
        {/* 2. VANCOUVER IN 1912                         */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="vancouver-1912"
          eyebrow="Context"
          title="Vancouver in 1912"
          subtitle="A city on the rise: railways, immigration, trade, and the confidence of a generation."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                To understand why Vancouver Block was built, you have to understand what Vancouver
                was in 1912. It was, by any measure, one of the most rapidly growing cities in the
                world. In 1891, its population was roughly thirteen thousand. By 1911, it had surpassed
                one hundred thousand. In two decades, a small coastal settlement had become the largest
                city in western Canada, with a port that linked the prairies to Pacific trade routes
                and a commercial district that was being rebuilt in stone, steel, and terracotta as
                fast as architects could draw and contractors could pour.
              </p>
              <p>
                The forces driving this transformation were enormous. The Canadian Pacific Railway,
                completed in 1886, gave Vancouver its reason for existing as a major city -- it was
                the western terminus of the transcontinental line, the point where the products of
                the Canadian interior met the ships of the Pacific. Timber, fish, grain, and minerals
                moved through the port in growing volumes. Capital flowed in from eastern Canada,
                Britain, and the United States. Immigrants arrived from across Europe, from China and
                Japan, from the American west, bringing labour, skills, and entrepreneurial ambition.
              </p>
              <p>
                The mood was one of extraordinary confidence. Real estate prices were rising. New
                businesses were opening. The streetcar system was expanding. Banks, insurance companies,
                and law firms competed for the best addresses in the downtown core. The city's leaders
                believed they were building a metropolis that would rival San Francisco, Seattle, and
                even the great commercial cities of the east. It was, in hindsight, the peak of a
                speculative boom -- but at the time, it felt like the natural trajectory of an
                inevitable future.
              </p>
              <p>
                This was the Vancouver that Dominic Burns saw when he decided to build. Not the city
                as it was, but the city as he believed it would become.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/construction-1912.jpg"
                alt="Vancouver Block under construction, circa 1912"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 3. DOMINIC BURNS AND THE BURNS NETWORK       */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="burns-network"
          variant="cream"
          eyebrow="The Patron"
          title="Dominic Burns and the Burns Network"
          subtitle="From cattle yards to clock towers: how industrial capital built a commercial landmark."
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Dominic Burns came to western Canada as part of the generation that built the
                infrastructure of the modern west. Together with his brother Patrick, he helped
                establish P. Burns & Co., a meatpacking and ranching enterprise that grew into
                one of the largest and most vertically integrated food businesses in the country.
                From stockyards in Alberta to cold-storage depots on the coast, the Burns network
                was a supply chain that connected ranch land to urban markets, and its scale
                generated the capital that made buildings like Vancouver Block possible.
              </p>
              <p>
                The transition from industrial enterprise to urban real estate was a common pattern
                among the business leaders of the Edwardian west. Men who had made their fortunes in
                cattle, timber, mining, and the railway invested their profits in the built environment
                of the cities they were helping to create. A building like Vancouver Block was
                simultaneously a financial investment, a commercial headquarters, and a personal
                monument -- a visible expression of the patron's wealth, taste, and civic ambition.
              </p>
              <p>
                Burns did not simply hire an architect and wait for the building to go up. His
                decision to commission a fifteen-storey tower with a clock, terracotta cladding,
                and a marble lobby at one of the most prominent intersections in the city was a
                calculated statement. It said: I believe in this city enough to risk my capital
                on its future. The building was, in the truest sense, an entrepreneurial act.
              </p>
            </div>

            <aside className="space-y-6">
              {/* Pull Quote */}
              <blockquote className="border-l-4 border-heritage-bronze pl-6 py-4 bg-white/50 rounded-r-xl">
                <p className="font-display text-xl italic text-heritage-charcoal/90 leading-relaxed">
                  "The building was not designed for the Vancouver that existed. It was designed for
                  the Vancouver that its patron expected to emerge."
                </p>
              </blockquote>

              <Card
                title="The Burns Empire"
                variant="heritage"
                icon="Factory"
              >
                <p className="text-sm text-heritage-charcoal/70">
                  P. Burns & Co. operated ranches, stockyards, slaughterhouses, cold-storage
                  facilities, and retail outlets across western Canada. At its peak, the company
                  was one of the largest employers in Alberta and British Columbia. The capital
                  generated by this industrial network funded not only Vancouver Block but a range
                  of real estate, philanthropic, and civic projects across the region.
                </p>
              </Card>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 4. A BUILDING AS A BUSINESS BET              */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="business-bet"
          variant="archive"
          eyebrow="Enterprise"
          title="A Building as a Business Bet"
          subtitle="Height, ornament, location, and a clock tower: every choice expressed confidence in the city's future."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                Constructing a fifteen-storey building in Vancouver in 1910 was not a cautious
                investment. It was an act of speculation -- a wager on the continued growth of the
                city's commercial district, on the demand for high-quality office space, on the value
                of a prominent corner location at Granville and Georgia. Every element of the building's
                design reinforced this bet.
              </p>
              <p>
                The height itself was a statement. At fifteen storeys, Vancouver Block was among the
                tallest buildings in the city. Height conveyed prestige, commanded higher rents on upper
                floors, and -- critically -- ensured that the building would be visible from a distance,
                advertising itself as a commercial address of the first rank. The clock tower, visible
                from blocks away, amplified this effect, transforming the building from a private
                investment into a public landmark.
              </p>
              <p>
                The terracotta cladding, the marble lobby, the brass fixtures -- these were not
                extravagances. They were signals. A building dressed in expensive materials attracted
                the kind of tenants -- law firms, financial houses, corporate offices -- who would pay
                premium rents and lend their own prestige to the address. Every dollar spent on ornament
                was, in a sense, an investment in the building's commercial reputation.
              </p>
              <p>
                The location was equally deliberate. Granville and Georgia was the heart of the
                commercial district, served by streetcar lines and surrounded by the institutions --
                banks, department stores, hotels -- that constituted the ecosystem of a modern business
                centre. Burns positioned his building at the centre of the action, betting that the
                intersection would remain the gravitational core of Vancouver's commercial life for
                decades to come. That bet, it turned out, was well placed.
              </p>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-black/10 aspect-[3/4]">
                <img
                  src="/images/gallery/tower-blue-sky.jpg"
                  alt="Vancouver Block clock tower rising against the sky"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 5. ENTREPRENEURIAL EXPLORER                  */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="explorer"
          eyebrow="Explore"
          title="Entrepreneurial Vancouver Explorer"
          subtitle="Discover the people, industries, and commercial networks that shaped the city through the lens of Vancouver Block."
        >
          <EntrepreneurialVancouverExplorer />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 6. GRANVILLE STREET AS COMMERCIAL THEATRE    */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="granville-street"
          variant="cream"
          eyebrow="The Street"
          title="Granville Street as Commercial Theatre"
          subtitle="The street was not just a route. It was a stage."
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="prose prose-lg text-heritage-charcoal/80">
              <p>
                To walk along Granville Street in the early twentieth century was to experience
                commerce as spectacle. Department stores like Woodward's and the Hudson's Bay
                Company filled their windows with elaborate displays. Banks presented granite
                facades and brass-doored entrances that projected solidity and trust. Hotels,
                theatres, and restaurants competed for the attention of pedestrians, transit riders,
                and the steadily growing population of downtown office workers.
              </p>
              <p>
                Vancouver Block sat at the epicentre of this commercial theatre. Its Granville Street
                facade presented a continuous wall of terracotta ornament and glass, engaging the
                pedestrian eye from sidewalk level to clock tower. The building's ground-floor
                retail spaces connected it to the daily commercial life of the street, while its
                upper-floor offices linked it to the professional and financial networks that
                operated above the retail bustle.
              </p>
            </div>

            <div className="prose prose-lg text-heritage-charcoal/80">
              <p>
                By mid-century, Granville Street had become one of Canada's most famous neon
                corridors. Theatre marquees, department store signs, and illuminated advertisements
                created a nocturnal streetscape that rivalled the commercial districts of much
                larger cities. The neon-lit clock tower of Vancouver Block presided over this
                landscape, its illuminated faces marking the hours above a street that seemed to
                glow with commercial energy.
              </p>
              <p>
                The street has changed dramatically since then -- pedestrian malls, transit
                conversions, shifts in retail culture, and the displacement of entertainment
                districts have all reshaped its character. But Vancouver Block remains, an anchor
                of visual continuity that connects the Granville Street of today to the commercial
                theatre of a century ago.
              </p>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 7. OFFICE TOWERS AND BUSINESS INFRASTRUCTURE */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="business-infrastructure"
          variant="cream"
          eyebrow="Infrastructure"
          title="Office Towers and Business Infrastructure"
          subtitle="How tall buildings created the physical framework for a modern commercial city."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                A tall commercial building is more than a stack of floors. It is a piece of urban
                infrastructure -- a machine for concentrating people, transactions, and information
                in a small footprint. The office tower, as a building type, emerged in the late
                nineteenth century in response to a specific economic need: the need to house the
                growing army of clerks, managers, accountants, lawyers, and brokers who constituted
                the white-collar workforce of the modern corporation.
              </p>
              <p>
                Vancouver Block was designed to serve this need. Its floor plates were organized as
                leasable commercial space, with private offices arranged around a central corridor
                and elevator core. Natural light reached every office through the building's generous
                windows. Elevators -- still a relative novelty in Vancouver -- provided vertical
                circulation. The lobby served as a shared public space, a threshold between the street
                and the private world of business above.
              </p>
              <p>
                Buildings like Vancouver Block did not just reflect the growth of Vancouver's
                commercial economy; they enabled it. By concentrating professional services in
                a single location, they created the density of interaction that a modern business
                district requires. A lawyer on the seventh floor could walk down the hall to consult
                an accountant, take the elevator to meet an insurance agent, and return to the lobby
                to greet a client arriving from the street -- all without leaving the building. This
                density of professional exchange was the real product of the office tower, and it was
                the foundation on which Vancouver's commercial life was built.
              </p>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-black/10 aspect-[3/4]">
                <img
                  src="/images/gallery/coffered-ceiling-lobby.jpg"
                  alt="The coffered ceiling and lobby interior of Vancouver Block"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </aside>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 8. THEN AND NOW                              */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="then-now"
          eyebrow="Then & Now"
          title="Then and Now"
          subtitle="Vancouver's entrepreneurial identity has changed, but the impulse to build, invest, and believe in the future remains."
        >
          <div className="grid gap-8 lg:grid-cols-3 mb-10">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                The Vancouver that Dominic Burns knew was a city of resource extraction, railway
                commerce, and Pacific trade. Today's Vancouver is shaped by technology, real estate
                development, film production, and global capital flows. The industries have changed,
                but the underlying dynamic -- the willingness to invest in the built environment as
                an expression of confidence in the city's future -- remains recognizable.
              </p>
              <p>
                Vancouver Block itself stands as a bridge between these eras. It was built as an
                expression of one kind of entrepreneurial energy; it survives as an artefact that
                helps the present understand the roots of the city's commercial identity. Looking
                at the building today, surrounded by glass towers that dwarf it in height but not
                in ornamental ambition, we see the continuity of a city that has always believed
                in building its way forward.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/tower-drone-skyline.jpg"
                alt="Aerial view of Vancouver Block amidst the modern downtown skyline"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <ThenNowPanel />
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 9. CORE THESIS BLOCK                         */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="thesis"
          variant="dark"
        >
          <div className="text-center max-w-4xl mx-auto py-8">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-heritage-marble/90 italic">
              Vancouver Block was architecture as entrepreneurship: a visible, expensive,
              confidence-filled bet on the future of the city.
            </p>
            <div className="heritage-rule mx-auto mt-8 max-w-12 opacity-40" aria-hidden="true"></div>
          </div>
        </Section>

        {/* ════════════════════════════════════════════ */}
        {/* 10. SEO BLOCK                                */}
        {/* ════════════════════════════════════════════ */}
        <Section
          id="entrepreneurial-history"
          eyebrow="Context"
          title="Vancouver's Entrepreneurial History in Brick, Steel, and Terracotta"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/80">
              <p>
                The commercial buildings of early twentieth-century Vancouver are monuments to
                entrepreneurial ambition. Constructed during a period of extraordinary growth, they
                represent the investments of individuals and companies who believed that the city's
                future justified significant capital expenditure. Vancouver Block, commissioned by
                meatpacking entrepreneur Dominic Burns and designed by the firm of Parr & Fee, is
                one of the most prominent surviving examples of this phenomenon.
              </p>
              <p>
                The building's height, its terracotta and marble materials, its clock tower, and its
                location at the corner of Granville and Georgia Streets were all expressions of
                entrepreneurial confidence. They were designed not only to house commercial tenants
                but to signal the patron's belief in Vancouver's trajectory as a major Pacific coast
                city. Understanding this entrepreneurial context is essential to understanding why
                the building looks the way it does, why it was built where it was, and why it endures
                as a landmark more than a century later.
              </p>
              <p>
                The story of Vancouver Block is, at its core, a story about the relationship between
                commerce and the built environment -- about how the ambitions of individual
                entrepreneurs become, over time, part of the shared physical fabric of a city.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/exterior-granville-street.jpg"
                alt="Vancouver Block's full elevation on Granville Street"
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
          <SourceNote variant="general" />
        </Section>

      </main>

      <Footer />
    </Layout>
  );
}
