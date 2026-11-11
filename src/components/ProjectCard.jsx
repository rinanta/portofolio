import { ArrowUpRight } from 'lucide-react';

function ProjectHeader({ project, featured, onViewDetails }) {
  return (
    <>
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="font-mono font-medium tracking-wider text-slate-400 dark:text-slate-500">
          {featured ? `${project.number} — UNGGULAN` : project.number}
        </span>
        <span className="font-medium text-sky-600 dark:text-sky-400">
          {project.category}
        </span>
      </div>

      <h3
        className={`font-display font-bold tracking-tight text-slate-900 dark:text-white ${
          featured ? 'mt-3 text-xl sm:text-2xl' : 'mt-2.5 text-lg'
        }`}
      >
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="text-left transition-colors hover:text-sky-600 focus:outline-none focus-visible:underline dark:hover:text-sky-400"
        >
          {project.title}
        </button>
      </h3>

      <p className="mt-1 truncate font-mono text-[11px] text-slate-400 dark:text-slate-500">
        {project.domain}
      </p>
    </>
  );
}

function ProjectFooter({ project, onViewDetails, featured }) {
  return (
    <>
      <ul
        className={`${featured ? 'mt-5' : 'mt-4'} flex flex-wrap gap-1.5`}
        aria-label="Teknologi yang digunakan"
      >
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div
        className={`flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80 ${
          featured ? 'mt-7 pt-5' : 'mt-5 pt-4'
        }`}
      >
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline-offset-4 transition-colors hover:text-sky-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white dark:hover:text-sky-400"
        >
          <span>Lihat Detail</span>
          <span aria-hidden="true">→</span>
        </button>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kunjungi website ${project.title}`}
            className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700 ${
              featured ? 'px-3.5 py-2' : 'px-3 py-1.5'
            }`}
          >
            <span>Kunjungi Website</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </>
  );
}

/**
 * Editorial portfolio project item supporting both a featured horizontal layout and standard grid cards.
 */
export default function ProjectCard({ project, onViewDetails, featured = false }) {
  const imageButton = (
    <button
      type="button"
      onClick={() => onViewDetails(project)}
      aria-label={`Lihat detail proyek ${project.title}`}
      className="block h-full w-full cursor-pointer overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500"
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        loading={featured ? undefined : 'lazy'}
        width="1280"
        height="800"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    </button>
  );

  if (featured) {
    return (
      <article className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_10px_-3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-sky-300/80 hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.1)] lg:grid-cols-12 dark:border-slate-800/90 dark:bg-slate-900/70 dark:shadow-none dark:hover:border-slate-700">
        <div className="relative overflow-hidden border-b border-slate-100 bg-slate-100 lg:col-span-7 lg:border-b-0 lg:border-r dark:border-slate-800 dark:bg-slate-950">
          <div className="aspect-[16/10] w-full overflow-hidden">{imageButton}</div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
          <div>
            <ProjectHeader project={project} featured onViewDetails={onViewDetails} />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.shortDescription}
            </p>
          </div>

          <div>
            <ProjectFooter project={project} onViewDetails={onViewDetails} featured />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_10px_-3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-sky-300/80 hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.1)] dark:border-slate-800/90 dark:bg-slate-900/70 dark:shadow-none dark:hover:border-slate-700">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
        {imageButton}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ProjectHeader project={project} onViewDetails={onViewDetails} />

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.shortDescription}
        </p>

        <ProjectFooter project={project} onViewDetails={onViewDetails} />
      </div>
    </article>
  );
}
