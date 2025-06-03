import bentoProg from '../../assets/WhyChooseUs/bgbentoProg.png'
import bentoUX from '../../assets/WhyChooseUs/bgbentoUX.png'
import bentoEstra from '../../assets/WhyChooseUs/bgbentoEstra.png'
import bentoUI from '../../assets/WhyChooseUs/bgbentoUI.png'

export const cards = [
    {
      category: 'PROGRAMAÇÃO',
      title: 'Tecnologia de Ponta',
      description: [
        'Next.js, React, TailwindCSS, Firebase e arquiteturas',
        'otimizadas para garantir um desenvolvimento ágil,',
        'seguro e inovador.',
      ],
      image: bentoProg,
      gridSpan: 'md:col-span-2 lg:col-span-3',
      height: 'h-[400px]',
    },
    {
      category: 'UX DESIGN',
      title: 'Inovação Aplicada',
      description: [
        'Vamos além do básico.',
        'Aplicamos tecnologia de',
        'ponta e metodologias',
        'ágeis para transformar',
        'ideias em produtos',
        'digitais impactantes.',
        'Seu negócio não apenas',
        'acompanha o mercado,',
        'mas se destaca e lidera.'
      ],
      image: bentoUI,
      gridSpan: 'md:col-span-3 lg:col-span-5',
      height: 'h-[400px]',
    },
    {
      category: 'UI DESIGN',
      title: 'Experiência do Usuário',
      description: [
        'Não basta apenas funcionar, o usuário',
        'precisa amar a experiência. Criamos',
        'interfaces intuitivas e fluidas que',
        'aumentam a retenção e melhoram a',
        'conversão do seu produto digital.',
      ],
      image: bentoUX,
      gridSpan: 'md:col-span-3 lg:col-span-5',
      height: 'h-[400px]',
    },
    {
      category: 'ESTRATÉGIA',
      title: 'Desenvolvimento Estratégico',
      description: [
        'Nossa abordagem personalizada garante que cada',
        'funcionalidade desenvolvida tenha um propósito',
        'estratégico, maximizando resultados e escalabilidade.',
      ],
      image: bentoEstra,
      gridSpan: 'md:col-span-2 lg:col-span-3',
      height: 'h-[400px]',
    },
  ]