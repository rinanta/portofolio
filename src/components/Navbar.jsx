import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/profile';

export const NAV_ITEMS = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'projects', label: 'Proyek' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'achievements', label: 'Pencapaian' },
  { id: 'contact', label: 'Kontak' }
];

/**
 * Sticky top navigation bar with active section indicator, mobile drawer, and dark mode toggle.
 */
export default function Navbar({ activeSection, onSelectSection, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    onSelectSection?.(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/90 shadow-[0_1px_2px_rgba(15,23,42,0.03)] backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-slate-950/85 dark:shadow-none">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={() => handleNavClick('home')}
          aria-label={`${profile.name} — Kembali ke Beranda`}
          className="font-display flex items-center gap-2.5 rounded-lg px-1 py-1 text-base font-bold tracking-tight text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white"
        >
          <img
            src="/images/logo-rid.png"
            alt="Logo RID Rinanta Indra Dewi"
            width="40"
            height="40"
            className="h-9 w-9 shrink-0 rounded-xl border border-slate-200/80 bg-white object-contain p-0.5 sm:h-10 sm:w-10 dark:border-slate-700"
          />
          <span className="truncate text-sm sm:hidden">{profile.shortName}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-nav-menu"
          className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[44px] items-center rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
