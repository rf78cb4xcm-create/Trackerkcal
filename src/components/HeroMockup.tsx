const floatingCards = [
  { label: 'Calorias do dia', value: '1.842 kcal', hint: '86% da meta', color: 'from-orange-400 to-orange-500', x: 'lg:-left-10 lg:top-20' },
  { label: 'Proteína', value: '126 g', hint: '+18 g para meta', color: 'from-emerald-400 to-emerald-500', x: 'lg:-right-8 lg:top-28' },
  { label: 'Hidratação', value: '2,4 L', hint: 'meta 3,0 L', color: 'from-blue-400 to-blue-600', x: 'lg:-left-6 lg:bottom-28' },
  { label: 'Balanço estimado', value: '-320 kcal', hint: 'faixa planejada', color: 'from-violet-400 to-violet-600', x: 'lg:-right-12 lg:bottom-24' },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto mt-12 max-w-xl lg:mt-0">
      <div className="absolute -inset-8 rounded-[4rem] bg-gradient-to-br from-emerald-300/30 via-blue-400/20 to-violet-500/30 blur-3xl" />
      <div className="glass-card relative overflow-hidden rounded-[2.25rem] p-3 shadow-2xl shadow-blue-950/20 sm:p-4">
        <div className="rounded-[1.8rem] bg-slate-950 p-5 text-white sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-300">Painel inteligente</p>
              <h3 className="mt-1 text-2xl font-black tracking-tight">Semana em análise</h3>
            </div>
            <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-black text-emerald-300">Boa consistência</div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              ['Sono', '7h40'],
              ['Treino', '520 kcal'],
              ['Água', '2,4 L'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white/[0.07] p-3 ring-1 ring-white/10">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <p className="mt-1 text-sm font-black text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-white/[0.06] p-4 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-white">Evolução semanal</p>
              <p className="text-xs font-semibold text-slate-400">7 dias</p>
            </div>
            <div className="mt-5 flex h-32 items-end gap-3">
              {[42, 58, 51, 72, 68, 81, 88].map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-full bg-gradient-to-t from-emerald-400 via-blue-500 to-violet-500 shadow-lg shadow-emerald-500/10" style={{ height: `${height}%` }} />
                  <span className="text-[10px] text-slate-500">D{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 rounded-3xl bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500 p-[1px]">
            <div className="rounded-3xl bg-slate-950 p-4">
              <p className="text-sm font-bold text-white">Tendência: adesão consistente</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">Ajustes sugeridos com base em calorias, macros, hidratação, sono e treino.</p>
            </div>
          </div>
        </div>
      </div>
      {floatingCards.map((card) => (
        <div key={card.label} className={`animate-float relative mt-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-slate-950/10 backdrop-blur lg:absolute lg:mt-0 ${card.x}`}>
          <div className={`mb-3 h-2 w-16 rounded-full bg-gradient-to-r ${card.color}`} />
          <p className="text-xs font-black uppercase tracking-wide text-slate-400">{card.label}</p>
          <p className="text-xl font-black tracking-tight text-slate-950">{card.value}</p>
          <p className="text-xs font-semibold text-slate-500">{card.hint}</p>
        </div>
      ))}
    </div>
  );
}
