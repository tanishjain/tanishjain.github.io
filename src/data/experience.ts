export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  bullets?: string[];
  metrics?: { label: string; value: string }[];
};

export const experience: Role[] = [
  {
    company: 'Wiley',
    title: 'Senior AI/ML Engineer',
    period: 'July 2022 — Present',
    summary:
      'I build and evaluate AI-powered applications that deliver knowledge from Wiley\u2019s scholarly and educational content. My work spans retrieval systems, evaluation frameworks used across our RAG products, content generation, and applied ML for publishing, with a through-line of grounding AI in trusted domain sources.',
    bullets: [
      'Contributed to the design and launch of a corporate RAG product on Weaviate and AWS Bedrock. Helped migrate the Domains API off AWS Knowledge Base with a zero-downtime cutover, and added federated patent and PubMed search with per-customer entitlement controls.',
      'Built the retrieval evaluation framework used across Wiley\u2019s RAG systems. Designed 1,000+ question Q&A benchmarks per collection, an LLM-as-judge layer that catches 13\u201327pp of lenient recall over strict matching, and 12-configuration retrieval sweeps that gate production releases.',
      'Worked on the collection-aware retrieval layer: hybrid search with RRF, metadata pre-filtering, and strict tenant isolation with zero cross-collection contamination. Root-caused a reranker regression (\u22128 to \u221214pp Recall@10) that led the team to pull reranking from the default pipeline.',
      'Evaluated scientific (SciBERT, PubMedBERT, BioLinkBERT) and commercial (Gemini, Cohere, Titan v2, Voyage) embeddings on domain benchmarks. Helped ship a hierarchical chunking strategy adapted to journal articles, systematic reviews, and long-form content.',
      'Earlier: productionized graph-neural-network enrichment pipelines that lifted customer-record coverage by 68%, and contributed to LLM-powered review and fraud-detection systems with privacy safeguards and bias testing.',
    ],
    metrics: [
      { label: 'Retrieval MRR', value: '0.85' },
      { label: 'Recall@10', value: '0.94' },
      { label: 'p95 latency', value: '2.9s' },
      { label: 'LLM-judge recall lift', value: '+13\u201327pp' },
      { label: 'Customer-record coverage', value: '+68%' },
    ],
  },
  {
    company: 'Gurtner Lab, Stanford Medicine',
    title: 'Research Assistant',
    period: 'June 2021 — July 2022',
    summary:
      'Trained ML models to predict wound-healing trajectories from real-time sensor data on prototype smart bandages, 12pp better than clinician observation-based predictions. The work fed into the Nature Biotechnology paper on wireless closed-loop smart bandages.',
  },
  {
    company: 'Changing Cities Research Lab, Stanford Sociology',
    title: 'Research Assistant',
    period: 'March 2021 — July 2022',
    summary:
      'Built a computer vision model that scores neighborhood conditions from Google Street View imagery across three cities. Reached 94% recall, 9pp above the prior single-city benchmark. Used to study links between urban environment and well-being.',
  },
  {
    company: 'Stanford Vision and Learning Lab',
    title: 'Research',
    period: 'January 2021 — 2022',
    summary:
      'Contributed to iGibson 2.0, an object-centric simulator for robot learning of household tasks. Accepted at CoRL 2021.',
  },
];
