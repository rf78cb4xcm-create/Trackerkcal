type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverted?: boolean;
};

export function SectionTitle({ eyebrow, title, description, centered = false, inverted = false }: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-emerald-500">{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-5xl ${inverted ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-8 sm:text-lg ${inverted ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>}
    </div>
  );
}
