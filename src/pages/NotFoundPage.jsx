import Layout from '../layouts/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  const title = 'Page Not Found | Vancouver Block';

  return (
    <Layout title={title} description="The page you are looking for could not be found.">
      <Header />

      <main id="main-content">
        <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
          <div className="text-center max-w-lg">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-heritage-charcoal/40">
              404
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-heritage-charcoal sm:text-5xl">
              Page Not Found
            </h1>
            <p className="mt-6 text-base leading-relaxed text-heritage-charcoal/60">
              The page you are looking for does not exist or may have been moved.
              Return to the home page to continue exploring Vancouver Block.
            </p>
            <div className="mt-10">
              <Button href="/" variant="primary">
                Return Home
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
