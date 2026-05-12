import { navItems } from '../data/content';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <a href="#inicio" aria-label="TrackerKcal início" className="rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
          <Logo compact />
        </a>
        <div className="hidden items-center rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-950 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#planos" className="rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-500 sm:px-5">
          Começar agora
        </a>
      </nav>
    </header>
  );
}
