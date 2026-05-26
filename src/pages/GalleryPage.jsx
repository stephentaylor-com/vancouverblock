import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import GalleryGrid from '../components/features/GalleryGrid.jsx';
import SourceNote from '../components/features/SourceNote.jsx';
import Layout from '../layouts/Layout';

export default function GalleryPage() {
  const title = 'Gallery | Vancouver Block Photography & Archives';
  const description = 'Browse photographs of Vancouver Block — exterior, clock tower, lobby, architectural details, street views, and archival images.';

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">
        {/* Hero */}
        <PageHero
          image="/images/hero/gallery-hero.jpg"
          variant="page"
          eyebrow="Gallery"
          title="Seeing the Building"
          subtitle="Photographs reveal what the eye sometimes misses. A wide shot shows the building's place in the skyline. A detail captures the craft in a single terracotta moulding. An archival image recovers a moment in the street's history that no longer exists."
        />

        {/* Gallery Grid */}
        <Section
          id="gallery"
          eyebrow="Browse"
          title="Photography & Archives"
          subtitle="Exterior views, clock tower details, lobby interiors, architectural ornament, street scenes, and archival images spanning over a century."
        >
          <GalleryGrid />
        </Section>

        {/* What to Look For */}
        <Section
          id="what-to-look-for"
          eyebrow="Visual Guide"
          title="What to Look For"
          subtitle="The gallery is organized by category. Here is what each reveals about the building."
          variant="cream"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-heritage-charcoal">Exterior Views</h3>
              <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/55">
                Full-height views reveal the tripartite composition — base, shaft, and crown — that defines
                the building's place in the Edwardian Commercial tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-heritage-charcoal">Clock Tower</h3>
              <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/55">
                The four-faced clock tower is the building's most recognizable feature. Daytime and nighttime
                photographs show how illumination transforms its presence on the skyline.
              </p>
            </div>
            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-heritage-charcoal">Architectural Details</h3>
              <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/55">
                Close-up photographs of terracotta ornament, caryatid figures, cornices, and mouldings
                reveal the craft embedded in the facade.
              </p>
            </div>
            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-heritage-charcoal">Street & Context</h3>
              <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/55">
                Historical and contemporary street views show how the building relates to its surroundings
                and how Granville Street has changed around it over the decades.
              </p>
            </div>
          </div>
        </Section>

        {/* Image Rights Note */}
        <Section
          id="image-rights"
          variant="archive"
          eyebrow="Image Credits"
          title="Image Rights & Licensing"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-heritage-bronze/15 bg-white/60 p-8 lg:p-10">
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-heritage-charcoal/70">
                    Archival and contemporary images should only be published when the owner, license, and
                    permitted use are confirmed. Placeholder images are used during development where original
                    photography or licensed archival images have not yet been secured.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-heritage-charcoal/70">
                    Some images shown in this gallery are sourced from Wikimedia Commons and are used under
                    applicable Creative Commons licenses. Individual image credits and license details are
                    provided with each image where available.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-heritage-charcoal/70">
                    If you are the rights holder for any image displayed on this site and wish to request
                    attribution changes, corrections, or removal, please
                    <a href="/contact" className="text-heritage-bronze underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze transition-colors">contact us</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-black/10 aspect-[4/3]">
                <img
                  src="/images/gallery/postcard-1923.jpg"
                  alt="Historical postcard of Vancouver Block, circa 1923"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <SourceNote variant="general" />
            </div>
          </div>
        </Section>

        {/* Submit Photos */}
        <Section
          id="submit-photos"
          eyebrow="Contribute"
          title="Share Your Photographs"
          subtitle="Help us build a richer visual record of Vancouver Block."
          variant="cream"
        >
          <div>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/70">
                <p>
                  We welcome contributions of both historical and contemporary photographs of Vancouver Block.
                  If you have images of the building — whether professional architectural photography, personal
                  snapshots from a Granville Street stroll, or archival prints from decades past — we would be
                  grateful to include them in this growing collection.
                </p>
                <p>
                  Contributed photographs help tell the building's story across time. Historical images document
                  the streetscape as it once was. Contemporary photographs capture the building's present
                  condition and its relationship to the changing city around it. Detail shots reveal the quality
                  of materials and craftsmanship that define the building's character.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-black/10">
                <img
                  src="/images/gallery/facade-lettering.jpg"
                  alt="Detail of facade lettering on Vancouver Block"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">
                  Historical Images
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-heritage-charcoal/55">
                  Archival photographs, postcards, newspaper clippings, or personal prints showing Vancouver
                  Block in earlier decades. We are especially interested in images of the building before
                  1960, street-level views of Granville Street, and photographs showing the clock tower or
                  neon signage at night.
                </p>
              </div>
              <div className="rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">
                  Contemporary Photography
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-heritage-charcoal/55">
                  Recent photographs of the building's exterior, lobby, architectural details, street context,
                  or clock tower. High-resolution images are preferred. Please include your name, the date of
                  the photograph, and any notes about what the image shows.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/stories" variant="primary">
                Submit via Story Form
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us Directly
              </Button>
            </div>

            <p className="mt-6 text-xs text-heritage-charcoal/40 italic">
              By submitting photographs, you confirm that you hold the rights to the images or that they are
              in the public domain. All contributions will be credited and used only with your permission.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </Layout>
  );
}
