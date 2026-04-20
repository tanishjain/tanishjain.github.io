export type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'The Moving Goalpost Tracker',
    year: '2026',
    description:
      'A pipeline that compares ClinicalTrials.gov registered endpoints to published paper outcomes using embedding similarity and an LLM judge, flagging trials where the reported primary endpoint differs from the pre-registered one. Targeting Phase III oncology trials. Paper in progress.',
    tags: ['Clinical Trials', 'LLM-as-judge', 'NLP'],
    links: [{ label: 'Repo (private, opens on publication)', href: 'https://github.com/tanishjain/moving-goalpost' }],
    featured: true,
  },
  {
    title: 'iGibson 2.0: Object-centric simulation for robot learning',
    year: '2021',
    description:
      'Open-source simulation environment for embodied AI research. Features object states, logic functions for task specification, and a VR interface for human demonstrations.',
    tags: ['Robotics', 'Simulation'],
    links: [
      { label: 'Paper', href: 'https://openreview.net/forum?id=2uGN5jNJROR' },
      { label: 'Project page', href: 'https://svl.stanford.edu/igibson/' },
    ],
    featured: true,
  },
  {
    title: 'Wireless closed-loop smart bandage',
    year: '2023',
    description:
      'Flexible bioelectronic system with wireless sensing and stimulation that accelerated wound healing in preclinical models. I contributed the ML models that predict healing trajectories from sensor data.',
    tags: ['Bioelectronics', 'Sensors'],
    links: [{ label: 'Paper', href: 'https://www.nature.com/articles/s41587-022-01528-3' }],
    featured: true,
  },
  {
    title: 'Gait-correcting insole for Parkinson\u2019s',
    year: '2023',
    description:
      'Smart insole that measures gait parameters and delivers haptic cues as continuous physical therapy.',
    tags: ['Wearables'],
    links: [{ label: 'US Patent 17/407,615', href: 'https://patents.google.com/patent/US20230060150A1' }],
    featured: true,
  },
  {
    title: 'Unstable-approach detection in aircraft',
    year: '2022',
    description:
      'Deep-learning model that classifies in-flight approach trajectories in real time from flight-recorder telemetry. Triggers go-around warnings before landing, where the margin for correction is smallest.',
    tags: ['Aviation', 'Time series'],
    links: [{ label: 'Paper', href: 'https://arc.aiaa.org/doi/10.2514/1.I011086' }],
    featured: true,
  },
  {
    title: 'Online Link Prediction with Graph Neural Networks',
    year: '2021',
    description:
      'Walk-through of GraphSAGE on the ogb-ddi drug\u2013drug interaction graph. Covers sampling strategies, negative sampling, and evaluation trade-offs.',
    tags: ['GNNs'],
    links: [
      {
        label: 'Blog post',
        href: 'https://medium.com/stanford-cs224w/online-link-prediction-with-graph-neural-networks-46c1054f2aa4',
      },
    ],
    featured: true,
  },
  {
    title: 'Evaluating ML-based skin cancer diagnosis',
    year: '2024',
    description:
      'Evaluated two deep-learning skin-lesion classifiers for explainability and fairness on the HAM10000 dataset. Found significant false-positive / false-negative disparities between light and dark skin tones, and showed a Calibrated Equalized Odds postprocessing step narrows the gap.',
    tags: ['Fairness', 'Medical imaging'],
    links: [{ label: 'arXiv preprint', href: 'https://arxiv.org/abs/2409.03794' }],
    featured: false,
  },
  {
    title: 'Classification of cellular states for image-based microfluidic sorting',
    year: '2022',
    description:
      'Trained cell-type classifiers on ~2M images from the Steinmetz lab\u2019s Image Cell Sorting (ICS) platform, demonstrating feasibility of deep learning on high-speed (15k cells/s) microfluidic imagery.',
    tags: ['Computer Vision', 'Biology'],
    links: [
      {
        label: 'Project report',
        href: 'https://cs231n.stanford.edu/reports/2022/pdfs/158.pdf',
      },
    ],
    featured: false,
  },
  {
    title: 'Indianajones.ai: mapping water-management features in the South Indian Neolithic',
    year: '2020',
    description:
      'Fully convolutional networks on multi-temporal PlanetScope imagery, detecting the seasonal spectral signature of water to surface candidate Neolithic\u2013Iron Age water-management sites in the Deccan.',
    tags: ['Remote sensing', 'Archaeology'],
    links: [
      {
        label: 'Project report',
        href: 'http://cs230.stanford.edu/projects_fall_2020/reports/55818344.pdf',
      },
    ],
    featured: false,
  },
  {
    title: 'Protectionism in defense aerospace: a comparative analysis of India and Israel',
    year: '2019',
    description:
      'Six-month comparative policy analysis of India\u2019s and Israel\u2019s defense-aerospace postures in a multipolar world, co-written with Shlok Misra. Finalist team at the USAIRE Student Award, presented in Paris.',
    tags: ['Policy', 'Aerospace'],
    links: [
      {
        label: 'UCSD news writeup',
        href: 'https://jacobsschool.ucsd.edu/news/release/2979?id=2979',
      },
    ],
    featured: false,
  },
];
