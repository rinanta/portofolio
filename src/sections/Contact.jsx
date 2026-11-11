import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';

/**
 * Editorial two-column contact section with direct email actions and clean channel rows.
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Kontak"
      className="border-t border-slate-200/90 bg-white py-16 sm:py-24 dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
                Kontak
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Mari Terhubung
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Tertarik berdiskusi mengenai peluang kerja, kolaborasi proyek web, atau pengembangan
                aplikasi? Silakan hubungi saya langsung melalui email maupun tautan di samping.
              </p>

              <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="h-4 w-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                <span>Berdomisili di {profile.location}</span>
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-slate-200/80 rounded-2xl border border-slate-200 bg-slate-50/70 dark:divide-slate-800/80 dark:border-slate-800/90 dark:bg-slate-900/70">
                {/* Email row */}
                <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${profile.contact.email}`}
                        className="block truncate font-medium text-slate-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
                      >
                        {profile.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Salin alamat email"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                          <span>Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* LinkedIn row */}
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500 sm:p-6 dark:hover:bg-slate-800/40"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                      <LinkedInIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        LinkedIn
                      </p>
                      <p className="truncate font-medium text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                        linkedin.com/in/rinanta-indra-dewi
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500 transition-colors group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-400">
                    <span>Profil</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>

                {/* GitHub row */}
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500 sm:p-6 dark:hover:bg-slate-800/40"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                      <GitHubIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        GitHub
                      </p>
                      <p className="truncate font-medium text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                        github.com/rinanta
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500 transition-colors group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-400">
                    <span>Repositori</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
