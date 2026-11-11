/**
 * Consistent heading block for each portfolio section.
 */
export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
