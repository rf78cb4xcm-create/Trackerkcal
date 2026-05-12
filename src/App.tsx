import { benefits, features, palette, plans, problemCards, proofStats, steps } from './data/content';
import { DashboardMockup } from './components/DashboardMockup';
import { Header } from './components/Header';
import { HeroMockup } from './components/HeroMockup';
import { Logo } from './components/Logo';
import { SectionTitle } from './components/SectionTitle';

const IconBadge = ({ children, soft = false }: { children: string; soft?: boolean }) => (
  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black shadow-lg ${soft ? 'bg-white text-slate-950 shadow-slate-950/10 ring-1 ring-slate-200' : 'bg-gradient-to-br from-emerald-400 via-blue-500 to-violet-500 text-white shadow-blue-500/20'}`}>
    {children}
  </div>
);

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFC] text-slate-950">
      <Header />
      <main>
        <section id="inicio" className="relative px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="hero-grid absolute inset-0 -z-20" />
          <div className="absolute left-1/2 top-8 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-sm font-black text-emerald-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.14)]" /> Healthtech brasileira de nutrição com IA
              </div>
              <h1 className="max-w-5xl text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
                Controle sua nutrição com inteligência artificial
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A TrackerKcal transforma registros de alimentação, hidratação, treino, sono e peso em metas claras, análises por tendência e recomendações personalizadas para sua rotina.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#planos" className="rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 px-7 py-4 text-center font-black text-white shadow-xl shadow-emerald-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25">Começar gratuitamente</a>
                <a href="#como-funciona" className="rounded-full border border-slate-200 bg-white px-7 py-4 text-center font-black text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl">Ver como funciona</a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white bg-white/75 p-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-black tracking-tight text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <HeroMockup />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="O problema" title="Fazer dieta no escuro atrasa decisões importantes" description="Treinar e comer melhor já é um avanço. O desafio é entender, com consistência, se sua rotina está alinhada ao objetivo — sem depender de palpites ou variações isoladas da balança." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {problemCards.map((card, index) => (
                <div key={card.title} className="card-premium group rounded-3xl p-6">
                  <IconBadge>{String(index + 1).padStart(2, '0')}</IconBadge>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.25rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-14">
            <div className="relative">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
              <SectionTitle inverted eyebrow="A solução" title="Seu assistente nutricional com IA" description="A TrackerKcal reúne alimentação, hidratação, treino, sono e peso corporal em uma experiência simples. Você acompanha médias, compara períodos e faz ajustes com base em dados — não em achismo." />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Análise semanal', 'Relatórios mensais', 'Tendências de progresso', 'Ajustes personalizados'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]">
                  <p className="text-lg font-black">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Visão objetiva para entender o que manter, corrigir ou testar na próxima semana.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle centered eyebrow="Como funciona" title="Do registro diário à recomendação com contexto" description="A plataforma não toma decisões por um único dia. Ela lê consistência, médias e tendências para sugerir ajustes mais seguros e úteis." />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="card-premium relative p-6">
                  <span className="text-6xl font-black tracking-tighter text-slate-100">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Funcionalidades" title="Uma visão completa da sua rotina nutricional" description="Calorias, macros, micros, TMB, gasto energético, hidratação, sono e treino ficam conectados em uma interface clara, rápida e orientada a progresso sustentável." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="card-premium group p-6">
                  <div className="flex items-start gap-4">
                    <IconBadge>{feature.icon}</IconBadge>
                    <div>
                      <h3 className="text-lg font-black tracking-tight text-slate-950">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle centered eyebrow="Dashboard" title="Painel premium para comparar períodos e encontrar padrões" description="Acompanhe o dia sem perder a visão da semana. O dashboard prioriza médias, consistência e pontos de ajuste para decisões mais equilibradas." />
            <div className="mt-12"><DashboardMockup /></div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Benefícios" title="Mais clareza para evoluir com consistência" description="A TrackerKcal ajuda a organizar a rotina para que alimentação, treino, sono e hidratação trabalhem na mesma direção." />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="card-premium flex items-start gap-3 p-5 font-bold text-slate-700">
                  <span className="mt-0.5 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle centered eyebrow="Identidade visual" title="Uma marca de nutrição, dados e performance" description="O símbolo combina chama de energia, gota de hidratação, rota de progresso, pontos de IA e um painel de tracking em linguagem visual própria." />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="card-premium p-8"><p className="mb-6 font-black text-slate-500">Logo principal</p><Logo /></div>
              <div className="card-premium p-8"><p className="mb-6 font-black text-slate-500">Ícone / monograma</p><Logo variant="icon" /></div>
              <div className="card-premium p-8"><p className="mb-6 font-black text-slate-500">Versão monocromática</p><Logo variant="mono" /></div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {palette.map((color) => (
                <div key={color.hex} className="card-premium p-4">
                  <div className="h-20 rounded-2xl shadow-inner" style={{ backgroundColor: color.hex }} />
                  <p className="mt-3 text-sm font-black text-slate-950">{color.name}</p>
                  <p className="text-sm font-semibold text-slate-500">{color.hex}</p>
                  <p className="mt-1 text-xs text-slate-500">{color.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle centered eyebrow="Planos" title="Comece simples e evolua quando precisar" description="Acompanhe o básico gratuitamente ou desbloqueie relatórios, dashboard avançado e IA para uma rotina mais personalizada." />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div key={plan.name} className={`relative rounded-[2rem] p-8 shadow-sm ring-1 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.featured ? 'bg-slate-950 text-white ring-slate-950 shadow-slate-950/15' : 'bg-white text-slate-950 ring-slate-200'}`}>
                  {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">Mais escolhido</span>}
                  <p className="text-lg font-black">Plano {plan.name}</p>
                  <p className="mt-4 text-5xl font-black tracking-tight">{plan.price}</p>
                  <p className={`text-sm font-bold ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</p>
                  <p className={`mt-5 min-h-20 leading-7 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((item) => <li key={item} className="flex gap-3 font-semibold"><span className="text-emerald-400">✓</span>{item}</li>)}
                  </ul>
                  <a href="#inicio" className={`mt-8 block rounded-full px-6 py-4 text-center font-black transition hover:-translate-y-1 ${plan.featured ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'}`}>Começar agora</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-emerald-500 via-blue-600 to-violet-600 p-8 text-center text-white shadow-2xl shadow-blue-500/20 sm:p-10 lg:p-16">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-slate-950/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">Transforme sua rotina em dados inteligentes</h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">Comece hoje a acompanhar nutrição, hidratação, treino e sono com mais clareza, precisão e inteligência.</p>
              <a href="#planos" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-black text-slate-950 shadow-xl shadow-slate-950/15 transition hover:-translate-y-1">Criar minha conta grátis</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <Logo compact />
          <p>© 2026 TrackerKcal. Acompanhamento progressivo, análise por tendência e ajustes baseados em dados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
