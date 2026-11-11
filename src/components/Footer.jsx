import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { profile } from '../data/profile';

/**
 * Minimal footer with social links and copyright notice.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-100/75 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 sm:text-left dark:text-slate-400">
          &copy; {currentYear} {profile.name}. Dibangun dengan React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-2">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="Email"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
