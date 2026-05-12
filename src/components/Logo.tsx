type LogoProps = {
  variant?: 'full' | 'icon' | 'mono';
  className?: string;
  compact?: boolean;
};

export function Logo({ variant = 'full', className = '', compact = false }: LogoProps) {
  const isMono = variant === 'mono';
  const gradientId = isMono ? 'tk-mono-gradient' : 'tk-brand-gradient';
  const icon = (
    <svg viewBox="0 0 72 72" role="img" aria-label="Ícone TrackerKcal" className={`${compact ? 'h-10 w-10' : 'h-12 w-12'} shrink-0`}>
      <defs>
        <linearGradient id={gradientId} x1="10" x2="62" y1="8" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor={isMono ? '#0F172A' : '#10B981'} />
          <stop offset="0.48" stopColor={isMono ? '#0F172A' : '#2563EB'} />
          <stop offset="1" stopColor={isMono ? '#0F172A' : '#7C3AED'} />
        </linearGradient>
        <filter id="tk-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>
      <rect x="7" y="7" width="58" height="58" rx="20" fill={isMono ? '#F8FAFC' : '#ffffff'} filter="url(#tk-soft-shadow)" />
      <path d="M15 44c7.5-.4 13.1-3.3 17.6-8.7l4.1-5 5.2 5.8c3.4 3.7 7.2 5.6 14.2 5.6" fill="none" stroke={isMono ? '#0F172A' : `url(#${gradientId})`} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.7 23.5h10.2v10.2" fill="none" stroke={isMono ? '#0F172A' : '#2563EB'} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.4 47.8c-5.9-3.3-8.2-9-6.4-15.5 1.6 2.2 3.7 3.8 6.7 4.5 1.8-6.7 8-9.9 8.4-19.3 6.3 4.8 10.5 10.5 10.5 17.9 0 8.5-5.4 14.5-12.3 14.5-2.7 0-4.9-.7-6.9-2.1Z" fill={isMono ? '#0F172A' : '#F97316'} />
      <path d="M25.5 50.4c5.4 2.2 13.9 2.4 19.4-3.7-1.4 7.2-6.5 11.1-12.3 11.1-3.3 0-5.8-1.4-7.1-7.4Z" fill={isMono ? '#0F172A' : '#10B981'} />
      <path d="M45.4 50.8c4.8-3 7.8-7 8.8-12.7 4 4 5.6 7.8 5.1 11.3-.6 4.2-3.8 7-8.1 7-3 0-5.1-1.8-5.8-5.6Z" fill={isMono ? '#0F172A' : '#2563EB'} />
      <circle cx="20" cy="24" r="3" fill={isMono ? '#0F172A' : '#7C3AED'} />
      <circle cx="56" cy="21" r="3" fill={isMono ? '#0F172A' : '#10B981'} />
      <circle cx="16" cy="54" r="2.4" fill={isMono ? '#0F172A' : '#2563EB'} opacity="0.65" />
    </svg>
  );

  if (variant === 'icon') return <div className={className}>{icon}</div>;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icon}
      <span className={`${compact ? 'text-xl' : 'text-2xl'} font-black tracking-[-0.04em] text-slate-950`}>
        Tracker<span className={isMono ? 'text-slate-950' : 'text-emerald-500'}>Kcal</span>
      </span>
    </div>
  );
}
