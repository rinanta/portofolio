import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { profile } from '../data/profile';

/**
 * Formal, editorial Hero section pairing clear introduction copy with a structured profile card.
 */
export default function Hero() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-7">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-[11px] font-medium text-emerald-700 sm:px-3.5 sm:text-xs dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="leading-snug">{profile.availability}</span>
        </div>

        <h1 className="font-display mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.85rem] dark:text-white">
          <span className="block text-lg font-semibold text-slate-600 sm:text-2xl dark:text-slate-400">
            Halo, saya
          </span>
          <span className="mt-1 block">{profile.name}</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg dark:text-slate-400">
          {profile.tagline}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#projects"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-600/20 transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:w-auto dark:bg-sky-500 dark:text-slate-950 dark:shadow-none dark:hover:bg-sky-400"
          >
            <span>Lihat Karya &amp; Proyek</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            <span>Hubungi Saya</span>
          </a>
        </div>
      </div>

      <div className="min-w-0 lg:col-span-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_-10px_rgba(15,23,42,0.08)] sm:p-6 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none">
          <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 sm:gap-4 sm:pb-5 dark:border-slate-800">
            <img
              src={profile.avatar}
              alt={`Foto profil ${profile.name}`}
              width="96"
              height="96"
              className="h-16 w-16 shrink-0 rounded-full border border-slate-200 object-cover object-top sm:h-24 sm:w-24 dark:border-slate-700"
            />
            <div className="min-w-0">
              <h2 className="font-display truncate text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                {profile.name}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {profile.role}
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                <span>{profile.location}</span>
              </p>
            </div>
          </div>

          <dl className="mt-4 divide-y divide-slate-100 text-sm dark:divide-slate-800/80">
            <div className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <dt className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">Fokus</dt>
              <dd className="font-medium text-slate-800 sm:text-right dark:text-slate-200">
                Web &amp; Mobile Development
              </dd>
            </div>
            <div className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <dt className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                Teknologi Utama
              </dt>
              <dd className="font-medium text-slate-800 sm:text-right dark:text-slate-200">
                React, Next.js, Flutter
              </dd>
            </div>
            <div className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <dt className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">Email</dt>
              <dd className="min-w-0 truncate font-medium text-slate-800 sm:text-right dark:text-slate-200">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="hover:text-sky-600 hover:underline dark:hover:text-sky-400"
                >
                  {profile.contact.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Tautan Profesional
            </span>
            <div className="flex items-center gap-2">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub"
                className="rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn"
                className="rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                aria-label="Kirim Email"
                className="rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
