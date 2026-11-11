import { useEffect, useRef } from 'react';
import { CheckCircle2, ExternalLink, X } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

/**
 * Accessible modal displaying full project breakdown: problem, solution, features, stack, and links.
 */
export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="animate-modal-in relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3.5 backdrop-blur-sm sm:px-6 sm:py-4 dark:border-slate-800 dark:bg-slate-900/95">
          <div className="pr-4">
            {(project.number || project.category) && (
              <p className="font-mono text-[11px] font-medium tracking-wider text-sky-600 uppercase dark:text-sky-400">
                {[project.number, project.category].filter(Boolean).join(' · ')}
              </p>
            )}
            <h3
              id="project-modal-title"
              className="font-display mt-0.5 text-lg font-bold text-slate-900 sm:text-xl dark:text-white"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
            <img
              src={project.image}
              alt={project.imageAlt}
              width="1280"
              height="800"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <h4 className="text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-sky-400">
                Masalah
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-sky-400">
                Solusi
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.solution}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-sky-400">
                Fitur Utama
              </h4>
              <ul className="mt-2 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-sky-400">
                Tech Stack
              </h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row dark:border-slate-800">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span>Kunjungi Website</span>
            </a>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>Repository GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
