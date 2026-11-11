import { Briefcase } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data/experience';

/**
 * Experience section rendered as a vertical timeline.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Pengalaman Kerja"
      className="border-t border-slate-200/90 bg-white py-16 sm:py-24 dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Pengalaman"
            title="Perjalanan Profesional"
            description="Riwayat pengalaman dalam pengembangan aplikasi web, mobile, dan kolaborasi proyek teknologi."
          />
        </Reveal>

        <ol className="relative ml-3 space-y-6 border-l-2 border-slate-200 pl-5 sm:ml-0 sm:space-y-8 sm:pl-8 dark:border-slate-800">
          {experiences.map((item, idx) => (
            <li key={item.id} className="relative">
              <Reveal delay={idx * 90}>
                <span
                  className="absolute -left-[33px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-sky-600 bg-white text-sky-600 sm:-left-[43px] dark:border-sky-500 dark:bg-slate-950 dark:text-sky-400"
                  aria-hidden="true"
                >
                  <Briefcase className="h-3 w-3" />
                </span>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-sky-300/80 hover:bg-white sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-500/50">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      {item.company && (
                        <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                          {item.company}
                        </p>
                      )}
                    </div>
                    {(item.period || item.type) && (
                      <div className="text-left sm:text-right">
                        {item.period && (
                          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            {item.period}
                          </span>
                        )}
                        {item.type && (
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            {item.type}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.summary}
                  </p>

                  {item.highlights?.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
