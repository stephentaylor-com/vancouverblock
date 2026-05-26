import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Section from '../components/layout/Section.jsx';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import Button from '../components/ui/Button.jsx';
import EducationHub from '../components/features/EducationHub.jsx';
import SourceNote from '../components/features/SourceNote.jsx';
import { questions } from '../data/questions.js';
import { researchSources } from '../data/researchSources.js';
import Layout from '../layouts/Layout';

export default function EducationPage() {
  const title = 'Education | Teaching Vancouver Through One Building';
  const description = 'Use Vancouver Block as a classroom for architecture, economics, heritage conservation, and urban history.';

  const observationPrompts = [
    {
      prompt: 'Count the storeys from the street-level base to the clock tower. How does the building divide itself into distinct visual sections?',
      focus: 'Tripartite composition',
    },
    {
      prompt: 'Look at the terracotta ornament above the third floor. Can you identify any repeating motifs, mouldings, or sculptural elements?',
      focus: 'Decorative vocabulary',
    },
    {
      prompt: 'Examine the ground-floor entrance. How does the building meet the sidewalk? What materials and design choices engage pedestrians?',
      focus: 'Street-level interface',
    },
    {
      prompt: 'Step back and find the clock tower. How many clock faces can you see from this angle? What might the tower communicate about the building and the street?',
      focus: 'Civic presence',
    },
    {
      prompt: 'Compare Vancouver Block to the buildings on either side. What differences in age, style, materials, and height can you observe?',
      focus: 'Urban context and change',
    },
  ];

  return (
    <Layout title={title} description={description}>
      <Header dark />

      <main id="main-content">
        {/* Hero */}
        <PageHero
          image="/images/hero/education-hero.jpg"
          variant="page"
          eyebrow="Education"
          title="One Building, Many Lessons"
          subtitle="Vancouver Block is more than a heritage landmark. It is a primary source for architecture, economics, urban geography, entrepreneurship, and civic memory — a single building that opens doors to an entire city's story."
        />

        {/* Introduction */}
        <Section
          id="introduction"
          eyebrow="Learning Through Place"
          title="A Case Study in the Built Environment"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="prose prose-lg lg:col-span-2 text-heritage-charcoal/70">
              <p>
                Vancouver Block at 736 Granville Street offers something rare in heritage education: a single
                site that connects multiple disciplines. Completed in 1912 during the city's most ambitious
                building boom, it embodies the economic confidence, material culture, and civic aspirations
                of early Vancouver. Its terracotta facade, four-faced clock tower, marble lobby, and century
                of continuous commercial use make it a rich subject for students, educators, and researchers
                at every level.
              </p>
              <p>
                This page provides pathways into the building's story for different audiences. Teachers can
                find curriculum-connected modules and classroom-ready questions. Students can explore the
                building as evidence — learning to read architecture, economics, and urban change in its
                materials and design. Researchers can access heritage register references, suggested
                archival sources, and a bibliography of related scholarship.
              </p>
              <p>
                Whether you visit in person or explore online, Vancouver Block invites you to ask the kind
                of questions that buildings can answer — about who built them, why, for whom, and what they
                tell us about the city that surrounds them.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/features/terracotta-capital.jpg"
                alt="Close-up of terracotta ornament on Vancouver Block's facade"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* For Teachers / For Students */}
        <Section
          id="audiences"
          eyebrow="Who This Is For"
          title="Pathways for Teachers and Students"
          variant="cream"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <Card
              title="For Teachers"
              icon="GraduationCap"
              variant="heritage"
            >
              <p className="mb-3">
                Vancouver Block connects to Social Studies, Geography, Visual Arts, and Career Education
                curricula across multiple grade levels. Use the education modules below to bring
                architecture, heritage conservation, and entrepreneurial history into your classroom.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-heritage-charcoal/60">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Curriculum-aligned modules with discussion questions and activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Walking tour guides for field trips to Granville Street</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Primary source connections to City of Vancouver Archives and heritage registers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Adaptable for Grades 7 through 12 and introductory post-secondary</span>
                </li>
              </ul>
            </Card>

            <Card
              title="For Students"
              icon="BookOpen"
              variant="heritage"
            >
              <p className="mb-3">
                Use this site as a research tool and starting point for projects about Vancouver's history,
                architecture, or urban development. The building is a window into how cities grow, how
                entrepreneurs shape places, and how heritage conservation protects shared memory.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-heritage-charcoal/60">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Explore architecture as evidence of economic and cultural ambition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Research the entrepreneurs, architects, and workers who shaped downtown</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Compare Vancouver Block to other heritage landmarks using the walking tour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <span>Use the glossary and discussion questions as starting points for essays and presentations</span>
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Education Hub */}
        <Section
          id="education-hub"
          eyebrow="Modules"
          title="Education Hub"
          subtitle="Structured learning modules connecting Vancouver Block to curriculum topics in architecture, economics, geography, heritage conservation, and urban identity."
          variant="light"
        >
          <EducationHub />
        </Section>

        {/* Questions This Building Can Answer */}
        <Section
          id="questions"
          eyebrow="Inquiry"
          title="Questions This Building Can Answer"
          subtitle="Every heritage building holds answers to questions about the city that built it. These questions use Vancouver Block as a starting point for deeper investigation."
          variant="archive"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {questions.map((q) => (
              <div key={q.question} className="group rounded-2xl border border-heritage-bronze/10 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-8">
                <Badge variant="category">{q.theme}</Badge>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-heritage-charcoal lg:text-xl">
                  {q.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-heritage-charcoal/55">
                  {q.connection}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* For Researchers */}
        <Section
          id="researchers"
          eyebrow="Research"
          title="For Researchers"
          subtitle="Reference information, archival sources, and research pathways for scholars, students, and heritage professionals investigating Vancouver Block and its context."
        >
          {/* Building Information Summary */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-semibold tracking-tight text-heritage-charcoal mb-6">
              Building Information
            </h3>
            <div className="rounded-2xl border border-heritage-bronze/10 bg-heritage-cream/40 p-6 lg:p-8">
              <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Names</dt>
                  <dd className="mt-1 text-sm font-medium text-heritage-charcoal">{researchSources.buildingInfo.names.join(', ')}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Address</dt>
                  <dd className="mt-1 text-sm font-medium text-heritage-charcoal">{researchSources.buildingInfo.address}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Architects</dt>
                  <dd className="mt-1 text-sm font-medium text-heritage-charcoal">{researchSources.buildingInfo.architects}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Developer</dt>
                  <dd className="mt-1 text-sm font-medium text-heritage-charcoal">{researchSources.buildingInfo.developer}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Completed</dt>
                  <dd className="mt-1 text-sm font-medium text-heritage-charcoal">{researchSources.buildingInfo.completed}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Style</dt>
                  <dd className="mt-1 text-sm font-medium text-heritage-charcoal">{researchSources.buildingInfo.style}</dd>
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">Height</dt>
                  <dd className="mt-1 text-sm font-medium text-heritage-charcoal">{researchSources.buildingInfo.height}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Heritage Register References */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-semibold tracking-tight text-heritage-charcoal mb-6">
              Heritage Register References
            </h3>
            <ul className="space-y-3">
              {researchSources.heritageReferences.map((ref) => (
                <li key={ref.text} className="flex items-start gap-3 text-sm leading-relaxed text-heritage-charcoal/70">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze hover:text-heritage-charcoal transition-colors duration-200"
                  >
                    {ref.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Search Terms */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-semibold tracking-tight text-heritage-charcoal mb-6">
              Suggested Search Terms
            </h3>
            <div className="flex flex-wrap gap-2">
              {researchSources.suggestedSearchTerms.map((term) => (
                <span key={term} className="inline-flex items-center rounded-full border border-heritage-bronze/15 bg-heritage-cream/60 px-3.5 py-1.5 text-xs font-medium text-heritage-charcoal/70">
                  {term}
                </span>
              ))}
            </div>
          </div>

          {/* Research Institutions */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-semibold tracking-tight text-heritage-charcoal mb-6">
              Research Institutions
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {researchSources.researchInstitutions.map((inst) => (
                <Card
                  key={inst.name}
                  title={inst.name}
                  href={inst.url}
                  variant="heritage"
                  icon="Library"
                >
                  <p>{inst.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Bibliography */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-semibold tracking-tight text-heritage-charcoal mb-6">
              Selected Bibliography
            </h3>
            <div className="rounded-2xl border border-heritage-bronze/10 bg-heritage-cream/40 p-6 lg:p-8">
              <ul className="space-y-3">
                {researchSources.bibliographyPlaceholder.map((entry) => (
                  <li key={entry} className="text-sm leading-relaxed text-heritage-charcoal/70 border-b border-heritage-bronze/8 pb-3 last:border-0 last:pb-0">
                    {entry}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-heritage-charcoal/40 italic">
                This bibliography is a starting point. Researchers are encouraged to consult the institutions listed above for comprehensive archival and published sources.
              </p>
            </div>
          </div>

          <SourceNote variant="general" />
        </Section>

        {/* Walking Activity: "Look Up" */}
        <Section
          id="walking-activity"
          eyebrow="Field Activity"
          title="Look Up: A Sidewalk Observation Exercise"
          subtitle="Stand on Granville Street opposite 736 and spend fifteen minutes looking carefully at the building. Use these prompts to guide your observation."
          variant="cream"
        >
          <div className="space-y-6">
            {observationPrompts.map((item, index) => (
              <div key={item.focus} className="flex gap-5 md:gap-8">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-heritage-bronze/30 bg-heritage-bronze/10 text-sm font-display font-bold text-heritage-bronze">
                    {index + 1}
                  </div>
                  {index < observationPrompts.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-heritage-bronze/15" aria-hidden="true"></div>
                  )}
                </div>
                <div className="pb-8">
                  <Badge variant="category">{item.focus}</Badge>
                  <p className="mt-3 text-base leading-relaxed text-heritage-charcoal/70 lg:text-lg">
                    {item.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-heritage-bronze/15 bg-white/50 p-6">
            <p className="text-sm leading-relaxed text-heritage-charcoal/60">
              <strong className="font-medium text-heritage-charcoal">Tip for teachers:</strong> This activity works best
              in small groups of 3-4 students. Ask each group to sketch one element that stands out to them, then
              share observations as a class. Encourage students to describe what they see before explaining what
              it might mean.
            </p>
          </div>
        </Section>

        {/* Research Challenge */}
        <Section
          id="research-challenge"
          eyebrow="Challenge"
          title="Research Challenge"
          subtitle="A comparative exercise for students and independent researchers."
          variant="archive"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-heritage-bronze/15 bg-white/60 p-8 lg:p-10">
              <h3 className="font-display text-xl font-semibold tracking-tight text-heritage-charcoal">
                Compare Vancouver Block to Another Heritage Building
              </h3>
              <p className="mt-4 text-base leading-relaxed text-heritage-charcoal/70">
                Choose another heritage-listed building in Vancouver — the Sun Tower, the Marine Building,
                the Dominion Building, or another structure that interests you. Research both buildings and
                compare them across at least three of the following dimensions:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  'Date of construction and historical context',
                  'Architectural style and materials',
                  'Developer or patron and their motivations',
                  'Original use versus current use',
                  'Heritage designation status and timeline',
                  'Role in the streetscape and city skyline',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-heritage-charcoal/60">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-bronze" aria-hidden="true"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-heritage-charcoal/55 italic">
                Present your findings as a short essay, a visual poster, or a presentation. Use primary sources
                where possible — the City of Vancouver Archives, heritage register entries, and published
                architectural histories are good starting points.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/gallery/tower-blue-sky.jpg"
                alt="Vancouver Block clock tower against a clear blue sky"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Download Section */}
        <Section
          id="downloads"
          eyebrow="Resources"
          title="Downloadable Resources"
          subtitle="Worksheets, teacher guides, and activity sheets for classroom use. These resources are currently in development."
          variant="cream"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/40 p-6 lg:p-8 opacity-60">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">Student Worksheet</h3>
              <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/50">Observation prompts and guided questions for field visits to Vancouver Block.</p>
              <Badge variant="category" className="mt-4">Coming Soon</Badge>
            </div>

            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/40 p-6 lg:p-8 opacity-60">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">Teacher Guide</h3>
              <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/50">Curriculum connections, lesson plans, and assessment ideas for Grades 7-12.</p>
              <Badge variant="category" className="mt-4">Coming Soon</Badge>
            </div>

            <div className="rounded-2xl border border-heritage-bronze/10 bg-white/40 p-6 lg:p-8 opacity-60">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-heritage-bronze/10 text-heritage-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-heritage-charcoal">Photo Activity Pack</h3>
              <p className="mt-2 text-sm leading-relaxed text-heritage-charcoal/50">A guided photography exercise for students visiting Granville Street.</p>
              <Badge variant="category" className="mt-4">Coming Soon</Badge>
            </div>
          </div>

          <p className="mt-8 text-sm text-heritage-charcoal/50 italic">
            Downloadable resources are in development. If you are an educator interested in using Vancouver Block
            in your classroom, please <a href="/contact" className="text-heritage-bronze underline decoration-heritage-bronze/30 hover:decoration-heritage-bronze transition-colors">contact us</a> to
            discuss your needs.
          </p>
        </Section>
      </main>

      <Footer />
    </Layout>
  );
}
