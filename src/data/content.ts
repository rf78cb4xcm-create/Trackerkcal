export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Planos', href: '#planos' },
];

export const proofStats = [
  { value: '12+', label: 'indicadores conectados' },
  { value: '7 dias', label: 'leitura de tendência semanal' },
  { value: '360°', label: 'nutrição, sono, treino e água' },
];

export const problemCards = [
  {
    title: 'Calorias sem contexto',
    description: 'Você até registra refeições, mas não entende se o dia fechou em déficit, manutenção ou superávit.',
  },
  {
    title: 'Macros difíceis de manter',
    description: 'Proteína, carboidratos, gorduras e fibras ficam espalhados em anotações ou aplicativos pouco claros.',
  },
  {
    title: 'Rotina ignorada pela dieta',
    description: 'Sono ruim, pouca água e treinos intensos mudam sua necessidade energética — e quase nunca entram na conta.',
  },
  {
    title: 'Evolução analisada no impulso',
    description: 'Peso e composição corporal variam diariamente. Sem tendência, fica fácil tomar decisões precipitadas.',
  },
];

export const steps = [
  {
    title: 'Registre o essencial',
    description: 'Adicione refeições em gramas, água consumida e observações rápidas da sua rotina.',
  },
  {
    title: 'Conecte treino, sono e peso',
    description: 'Informe calorias ativas, qualidade do sono, peso corporal e objetivo físico atual.',
  },
  {
    title: 'A IA organiza suas metas',
    description: 'A plataforma estima TMB, gasto total, macros, hidratação e faixa de déficit ou superávit.',
  },
  {
    title: 'Ajuste com base em tendência',
    description: 'Receba análises semanais, relatórios mensais e recomendações para a próxima etapa.',
  },
];

export const features = [
  { title: 'Cálculo de calorias', description: 'Fechamento diário com meta, consumo e balanço estimado.', icon: 'K' },
  { title: 'Macronutrientes', description: 'Proteína, carboidratos, gorduras e fibras em uma visão simples.', icon: 'M' },
  { title: 'Micronutrientes', description: 'Leitura de vitaminas e minerais para uma dieta mais completa.', icon: 'μ' },
  { title: 'Hidratação', description: 'Meta diária, consumo acumulado e alertas de baixa ingestão.', icon: 'H' },
  { title: 'TMB estimada', description: 'Base metabólica calculada a partir do perfil e objetivo do usuário.', icon: 'B' },
  { title: 'Gasto energético', description: 'Estimativa do gasto total considerando rotina, treino e atividade.', icon: 'G' },
  { title: 'Treino e sono', description: 'Registro de calorias ativas, frequência, duração e horas dormidas.', icon: 'T' },
  { title: 'Dashboard evolutivo', description: 'Comparação semanal e mensal para observar padrões com mais clareza.', icon: 'D' },
  { title: 'Sugestões de refeições', description: 'Ideias alinhadas à meta calórica, macros e preferências cadastradas.', icon: 'R' },
  { title: 'Alertas inteligentes', description: 'Sinais de déficit excessivo, superávit fora da meta ou baixa hidratação.', icon: '!' },
  { title: 'Relatórios completos', description: 'Resumo semanal e mensal com consistência, médias e pontos de atenção.', icon: 'S' },
  { title: 'Assistente IA', description: 'Respostas objetivas para dúvidas nutricionais e ajustes da rotina.', icon: 'IA' },
];

export const benefits = [
  'Clareza para entender a dieta além da balança',
  'Controle integrado de calorias, macros e micros',
  'Hidratação acompanhada junto da alimentação',
  'Menos decisões baseadas em achismo',
  'Ajustes orientados por dados e contexto',
  'Análises semanais e relatórios mensais',
  'Rotina alimentar mais organizada e sustentável',
  'Conexão entre alimentação, treino, sono e recuperação',
];

export const plans = [
  {
    name: 'Gratuito',
    price: 'R$ 0',
    period: 'para começar',
    description: 'Ideal para testar o registro alimentar e criar o hábito de acompanhar o básico.',
    features: [
      'Registro básico de refeições',
      'Cálculo simples de calorias',
      'Meta diária de consumo',
      'Registro básico de água',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 24',
    period: 'por mês',
    description: 'Para quem treina, quer acompanhar a rotina completa e revisar a evolução por tendência.',
    featured: true,
    features: [
      'Macros completos',
      'Dashboard avançado',
      'Hidratação, sono e treino',
      'Relatório semanal',
      'Evolução por tendência',
    ],
  },
  {
    name: 'Premium',
    price: 'R$ 49',
    period: 'por mês',
    description: 'Para evoluir com IA, micronutrientes e recomendações personalizadas por período.',
    features: [
      'Assistente IA completo',
      'Micronutrientes',
      'Recomendações personalizadas',
      'Relatórios semanais e mensais',
      'Análise de evolução corporal por períodos',
      'Ajustes de dieta, treino, sono e hidratação',
    ],
  },
];

export const palette = [
  { name: 'Verde saúde', hex: '#10B981', usage: 'equilíbrio e saúde' },
  { name: 'Azul tecnologia', hex: '#2563EB', usage: 'dados e precisão' },
  { name: 'Roxo IA', hex: '#7C3AED', usage: 'inteligência artificial' },
  { name: 'Laranja energia', hex: '#F97316', usage: 'kcal e performance' },
  { name: 'Azul escuro', hex: '#0F172A', usage: 'contraste premium' },
  { name: 'Fundo claro', hex: '#F8FAFC', usage: 'interface limpa' },
];
