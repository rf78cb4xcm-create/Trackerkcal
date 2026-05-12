const stats = [
  ['Calorias consumidas', '1.842 kcal', 'Meta: 2.150 kcal', '86%'],
  ['Proteína', '126 g', 'Meta: 145 g', '87%'],
  ['Carboidratos', '188 g', 'Faixa planejada', '74%'],
  ['Gorduras', '54 g', 'Meta: 62 g', '82%'],
  ['Fibras', '31 g', 'Meta: 35 g', '89%'],
  ['Água consumida', '2,4 L', 'Meta: 3,0 L', '80%'],
  ['Sono', '7h40', 'média semanal', '92%'],
  ['Calorias ativas', '520 kcal', 'treino registrado', '76%'],
];

export function DashboardMockup() {
  return (
    <div className="glass-card overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-slate-950/10 sm:p-5">
      <div className="rounded-[1.7rem] bg-white p-4 sm:p-6">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500">Dashboard TrackerKcal</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Visão semanal da evolução</h3>
          </div>
          <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-600">Comparação por períodos</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value, sub, progress]) => (
            <div key={label} className="rounded-3xl border border-slate-100 bg-slate-50/80 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/8">
              <p className="text-sm font-bold text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-black tracking-tight text-slate-950">{value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{sub}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" style={{ width: progress }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.45fr_0.95fr]">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white sm:p-6">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-400">Evolução de peso semanal</p>
                <p className="mt-1 text-xl font-black tracking-tight">Média de calorias: 2.083 kcal</p>
                <p className="mt-1 text-sm text-slate-400">Balanço estimado: déficit moderado de 320 kcal</p>
              </div>
              <p className="w-fit rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-black text-emerald-300">tendência estável</p>
            </div>
            <div className="relative mt-8 flex h-44 items-end gap-2 sm:gap-3">
              {[76, 73, 74, 70, 68, 65, 63].map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-2xl bg-gradient-to-t from-violet-500 via-blue-500 to-emerald-400" style={{ height: `${height}%` }} />
                  <span className="text-xs text-slate-500">S{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="font-black text-emerald-700">Pontos fortes</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950">
                <li>• Proteína média próxima da meta</li>
                <li>• Treino registrado em 5 dias da semana</li>
                <li>• Hidratação média semanal em 2,6 L</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
              <p className="font-black text-orange-700">Pontos a melhorar</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-orange-950">
                <li>• Aumentar fibras em dias de menor ingestão</li>
                <li>• Ajustar horário de sono em dias de treino</li>
                <li>• Manter o déficit dentro da faixa planejada</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-950 p-5 text-white">
              <p className="font-black">Próximo ajuste sugerido</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Adicionar 500 ml de água no período da tarde e reforçar uma fonte de fibra no jantar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
