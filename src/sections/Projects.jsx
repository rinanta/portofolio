import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

/**
 * Editorial showcase of selected projects: one featured wide card followed by a balanced 2x2 grid.
 */
export default function Projects({ onSelectProject }) {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      aria-label="Karya & Proyek"
      className="border-t border-slate-200/90 bg-slate-100/75 py-16 sm:py-24 dark:border-slate-800/80 dark:bg-slate-950/60"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Portofolio"
            title="Karya & Proyek"
            description="Aplikasi web yang telah dibangun dan dideploy secara langsung—mulai dari portal HRIS internal, profil layanan kesehatan, hingga sistem operasional usaha."
          />
        </Reveal>

        <div className="space-y-6">
          {featuredProject && (
            <Reveal>
              <ProjectCard
                project={featuredProject}
                onViewDetails={onSelectProject}
                featured
              />
            </Reveal>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, idx) => (
              <Reveal key={project.id} delay={(idx + 1) * 70} className="h-full">
                <ProjectCard project={project} onViewDetails={onSelectProject} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
