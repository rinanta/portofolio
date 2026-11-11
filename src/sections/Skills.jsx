import { useState } from 'react';
import { Code2, Database, Layers, Wrench } from 'lucide-react';
import Reveal from '../components/Reveal';
import { skillGroups } from '../data/skills';

const CATEGORY_ICONS = {
  'Frontend Development': Code2,
  'Styling & UI': Layers,
  'Backend & Integration': Database,
  'Tools & Workflow': Wrench
};

/**
 * Ergonomic, scannable skills index with category filtering and balanced horizontal rows.
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const visibleGroups =
    activeCategory === 'Semua'
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Keahlian"
      className="border-t border-slate-200/90 bg-white py-16 sm:py-24 dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
                  Keahlian
                </p>
                <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  Teknologi &amp; Tools
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  Teknologi dan tools yang saya gunakan dalam proses pengembangan website dan
                  aplikasi, mulai dari membangun antarmuka pengguna hingga mengelola integrasi dan
                  pengembangan proyek.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <div
                className="mb-6 flex flex-wrap gap-2"
                role="tablist"
                aria-label="Filter kategori keahlian"
              >
                {['Semua', ...skillGroups.map((g) => g.category)].map((tab) => {
                  const isActive = activeCategory === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(tab)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                        isActive
                          ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/20 dark:bg-sky-500 dark:text-slate-950 dark:shadow-none'
                          : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <div className="divide-y divide-slate-200/80 rounded-2xl border border-slate-200 bg-slate-50/70 dark:divide-slate-800/80 dark:border-slate-800/90 dark:bg-slate-900/70">
                {visibleGroups.map((group) => {
                  const Icon = CATEGORY_ICONS[group.category] || Code2;
                  return (
                    <div
                      key={group.category}
                      className="grid gap-4 p-5 sm:grid-cols-12 sm:items-start sm:gap-6 sm:p-6"
                    >
                      <div className="sm:col-span-5">
                        <div className="flex items-center gap-2.5">
                          <Icon
                            className="h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400"
                            aria-hidden="true"
                          />
                          <h3 className="font-display text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                            {group.category}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                          {group.description}
                        </p>
                      </div>

                      <ul
                        className="flex flex-wrap gap-2 sm:col-span-7"
                        aria-label={group.category}
                      >
                        {group.items.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-colors hover:border-sky-300 hover:bg-sky-50/60 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:shadow-none dark:hover:border-sky-500/40 dark:hover:bg-slate-800 dark:hover:text-sky-300"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
