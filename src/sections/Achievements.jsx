import { useState } from 'react';
import { ArrowUpRight, FolderOpen } from 'lucide-react';
import Reveal from '../components/Reveal';
import { achievements, CERTIFICATES_FOLDER_URL } from '../data/achievements';

const CATEGORIES = [
  'Semua',
  'Sertifikasi & Pelatihan',
  'Hak Cipta & Prestasi',
  'Seminar & Internasional'
];

/**
 * Achievements and verified certificates section with category filters and direct Google Drive links.
 */
export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const visibleItems =
    activeCategory === 'Semua'
      ? achievements
      : achievements.filter((item) => item.category === activeCategory);

  return (
    <section
      id="achievements"
      aria-label="Sertifikasi"
      className="border-t border-slate-200/90 bg-slate-100/75 py-16 sm:py-24 dark:border-slate-800/80 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
                Pencapaian
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Sertifikasi 
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Dokumentasi resmi sertifikasi pelatihan, pencatatan hak cipta, serta keikutsertaan
                seminar dan kompetisi.
              </p>
            </div>

            <a
              href={CERTIFICATES_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-sky-300 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:self-auto dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:shadow-none dark:hover:border-sky-500/40 dark:hover:text-sky-300"
            >
              <FolderOpen className="h-4 w-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>Arsip Google Drive</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div
            className="mb-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter kategori sertifikat"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/20 dark:bg-sky-500 dark:text-slate-950 dark:shadow-none'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_10px_-3px_rgba(15,23,42,0.06)] transition-colors duration-200 hover:border-sky-300/80 dark:border-slate-800/90 dark:bg-slate-900/70 dark:shadow-none dark:hover:border-slate-700"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-medium text-sky-600 dark:text-sky-400">
                      {item.category}
                    </span>
                    <span className="shrink-0 font-mono text-slate-500 dark:text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-display mt-3 text-base font-bold leading-snug text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.issuer}
                  </p>

                  {item.credentialId && (
                    <p className="mt-2 inline-block rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
                      {item.credentialId}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>

                {item.url && (
                  <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 transition-colors hover:text-sky-600 focus:outline-none focus-visible:underline dark:text-slate-200 dark:hover:text-sky-400"
                    >
                      <span>Lihat Sertifikat</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
