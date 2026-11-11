import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { profile } from '../data/profile';

/**
 * About Me section summarizing background and engineering focus.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-200/90 bg-slate-100/70 py-16 sm:py-24 dark:border-slate-800/80 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div id="about-heading">
            <SectionTitle
              eyebrow="Tentang Saya"
              title={profile.about.headline}
            />
          </div>

          <div className="grid gap-6 text-base leading-relaxed text-slate-600 md:grid-cols-2 dark:text-slate-300">
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
