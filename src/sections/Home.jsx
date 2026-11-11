import Hero from '../components/Hero';
import Reveal from '../components/Reveal';

/**
 * Home section wrapping the Hero presentation.
 */
export default function Home() {
  return (
    <section
      id="home"
      aria-label="Beranda"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-sky-100/60 via-sky-50/30 to-transparent dark:from-sky-950/25 dark:via-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Hero />
        </Reveal>
      </div>
    </section>
  );
}
