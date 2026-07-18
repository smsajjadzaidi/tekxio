export interface Service {
  id: string;
  title: string;
  bullets: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI Systems',
    bullets: [
      'Multi-agent orchestration & conversational AI',
      'LLMOps strategy & real-time data pipelines',
      'RAG pipelines built for production, not demos',
    ],
    price: '$25,000',
  },
  {
    id: 'ai-security',
    title: 'AI Security',
    bullets: [
      'Architecture-level security review, not an afterthought',
      'Evals & observability built into every agent',
      'Informed by Stanford XACS134 practice',
    ],
    price: '$18,000',
  },
  {
    id: 'web-apps',
    title: 'Web App Development',
    bullets: [
      'Full-stack, production-grade builds',
      'Deploy-ready from day one',
      'Built to carry the AI systems above',
    ],
    price: '$15,000',
  },
];
