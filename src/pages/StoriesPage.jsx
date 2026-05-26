import Layout from '../layouts/Layout';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import Button from '../components/ui/Button.jsx';
import StorySubmit from '../components/features/StorySubmit.jsx';

export default function StoriesPage() {
  const title = 'Stories | Vancouver Block Community Memories';
  const description = 'Share your memories of Vancouver Block. Tenant stories, Granville Street memories, and community heritage contributions.';

  const sampleStories = [
    {
      title: 'Working on the 12th Floor, 1987-1995',
      type: 'Former Tenant',
      excerpt: 'Every morning the elevator doors opened onto a view of the North Shore mountains through the office windows. The building had a character that newer towers never quite matched — the marble lobby, the brass fixtures, the way the light came through those tall windows in the afternoon.',
      category: 'Tenant Stories',
    },
    {
      title: 'The Clock I Watched Every Morning',
      type: 'Granville Street Regular',
      excerpt: 'For fifteen years I caught the bus at Granville and Georgia. The Vancouver Block clock was how I knew whether I was late. It became part of my internal map of the city — a fixed point in a landscape that kept changing around it.',
      category: 'Granville Street Memories',
    },
    {
      title: 'Photographing the Facade',
      type: 'Architecture Photographer',
      excerpt: 'The terracotta catches the light differently depending on the time of day and the weather. On overcast winter afternoons the building seems to glow against grey sky. In summer the shadows thrown by the ornament create a whole secondary pattern you only see from across the street.',
      category: 'Architecture & Photography',
    },
    {
      title: "My Grandfather's Office",
      type: 'Family Memory',
      excerpt: 'My grandfather had an accounting practice in Vancouver Block in the 1960s. I only visited once as a child, but I remember the terrazzo floor in the lobby and how serious everything felt. He kept a photograph of the building on his desk for the rest of his career.',
      category: 'Family Connections',
    },
    {
      title: 'Heritage Day Tour, 2019',
      type: 'Heritage Walker',
      excerpt: 'During a Vancouver Heritage Foundation walking tour, our guide explained how the building was designed to be read from the street — the base, the shaft, the crown. Once you learn to see that structure, you start seeing it in buildings all over downtown. It changed how I look at the city.',
      category: 'Heritage Events',
    },
  ];

  const storyCategories = [
    {
      name: 'Tenant Stories',
      description: 'Memories from people who worked in or occupied offices in Vancouver Block.',
      icon: 'Building2',
    },
    {
      name: 'Granville Street Memories',
      description: 'The building as part of daily life on one of Vancouver\'s most important streets.',
      icon: 'MapPin',
    },
    {
      name: 'Architecture & Photography',
      description: 'Observations, photographs, and reflections on the building\'s design and materials.',
      icon: 'Camera',
    },
    {
      name: 'Family Connections',
      description: 'Stories passed down through families connected to the building or the street.',
      icon: 'Users',
    },
    {
      name: 'Heritage Events',
      description: 'Experiences from heritage tours, open-door events, and conservation activities.',
      icon: 'Award',
    },
    {
      name: 'Film & Media Appearances',
      description: 'Sightings of Vancouver Block in film, television, photography, and media.',
      icon: 'Film',
    },
  ];

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">
        {/* Hero */}
        <PageHero
          image="/images/hero/stories-hero.jpg"
          variant="page"
          eyebrow="Stories"
          title="Your Connection to Vancouver Block"
          subtitle="A building's history is not only found in archives and registers. It lives in the memories of the people who passed through its doors, looked up at its clock, or watched it change through the years."
        />

        {/* Invitation */}
        <Section
          id="invitation"
          eyebrow="Community Memory"
          title="Every Building Has Many Stories"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/70">
              <p>
                Vancouver Block has stood at 736 Granville Street for more than a century. In that time,
                thousands of people have worked inside its offices, visited its lobby, walked past its
                terracotta facade, and checked the time on its clock tower. Each of those encounters is a
                thread in the building's larger story — a story that belongs not only to the architects and
                developers who built it, but to the community that has lived alongside it.
              </p>
              <p>
                We are collecting stories from anyone with a connection to Vancouver Block. Whether you
                were a tenant, a visitor, a Granville Street regular, or someone who photographed the
                building on a heritage walk — your memory adds something that archival records alone
                cannot capture. The texture of daily experience, the small details that made the building
                part of someone's life, the way a place feels to the people who know it.
              </p>
              <p>
                If Vancouver Block has been part of your life in any way, we would like to hear about it.
                Share your story using the form below, or <a href="/contact" className="text-heritage-bronze underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze transition-colors">contact us</a> to
                discuss contributing photographs, documents, or longer oral history interviews.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/exterior-granville-street.jpg"
                alt="Vancouver Block's terracotta facade on Granville Street"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Example Story Cards */}
        <Section
          id="sample-stories"
          eyebrow="Community Voices"
          title="Stories from the Building"
          subtitle="These sample stories represent the kinds of memories we hope to collect. They are illustrative examples, not real submissions."
          variant="cream"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleStories.map((story) => (
              <div key={story.title} className="group rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge variant="heritage">{story.type}</Badge>
                  <Badge variant="category">Sample Story</Badge>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-heritage-charcoal">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-heritage-charcoal/55 italic">
                  "{story.excerpt}"
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-heritage-charcoal/35">
                  {story.category}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Categories */}
        <Section
          id="categories"
          eyebrow="What We Collect"
          title="Story Categories"
          subtitle="We welcome stories across a range of connections and experiences."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {storyCategories.map((cat) => (
              <Card
                key={cat.name}
                title={cat.name}
                icon={cat.icon}
                variant="heritage"
              >
                <p>{cat.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Story Submission */}
        <Section
          id="submit"
          eyebrow="Share Your Story"
          title="Tell Us About Your Connection"
          subtitle="Use the form below to share a memory, a photograph, or a reflection about Vancouver Block. All submissions are reviewed before publication."
          variant="archive"
        >
          <StorySubmit />
        </Section>

        {/* Future Features */}
        <Section
          id="future"
          eyebrow="Coming Soon"
          title="Growing the Archive"
          subtitle="We are building a living archive of community memory around Vancouver Block."
          variant="cream"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">
                Oral History Collection
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-heritage-charcoal/60">
                We plan to conduct recorded oral history interviews with long-term tenants, building
                staff, heritage professionals, and community members who have significant connections
                to Vancouver Block. These recordings will form part of a publicly accessible archive.
              </p>
            </div>

            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">
                Photo Archive
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-heritage-charcoal/60">
                A curated collection of historical and contemporary photographs contributed by the
                community. If you have photographs of Vancouver Block from any era — exterior views,
                interior details, street scenes, or archival prints — we would be grateful to hear from you.
              </p>
            </div>

            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">
                Community Events
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-heritage-charcoal/60">
                Future programming may include storytelling evenings, heritage walks led by community
                members, and collaborative exhibitions that bring together the stories collected
                through this site. Watch this space for announcements.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-heritage-bronze/15 bg-white/50 p-6">
            <p className="text-sm leading-relaxed text-heritage-charcoal/60">
              <strong className="font-medium text-heritage-charcoal">Want to contribute?</strong> If you have
              photographs, documents, or memories related to Vancouver Block that you would like to share,
              please <a href="/contact" className="text-heritage-bronze underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze transition-colors">get in touch</a>.
              We are especially interested in hearing from former tenants, long-time Granville Street
              residents, and anyone with archival photographs of the building.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </Layout>
  );
}
