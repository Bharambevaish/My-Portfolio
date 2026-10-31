// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site; components read from it and never hard-code text.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Vaishnavi Bharambe',
  shortName: 'Vaishnavi',
  initials: 'VB',
  roles: ['Data Analyst', 'ML Enthusiast', 'AI Builder'],
  tagline:
    'I turn raw data into decisions: from segmenting 10,000 bank customers to building an AI assistant that answers questions from your documents.',
  location: 'Maharashtra, India',
  status: 'Open to Data Analyst & AI roles · 2027 graduate',
  email: 'vaishnavibharambe99@gmail.com',
  github: 'https://github.com/Bharambevaish',
  linkedin: 'https://www.linkedin.com/in/vaishnavi-bharambe-646783293/',
  resume: '', // TODO: paste a public link to your resume PDF to show a "Resume" button
}

export const about = {
  paragraphs: [
    "I'm a B.Tech Information Technology student at Walchand College of Engineering, Sangli, and a Siemens Scholar (Batch 11). I like questions that a dataset can answer: who your most valuable customers are, which ones are about to become valuable, and what to do about each group.",
    'This summer I interned with the cybersecurity team at Siemens, where I built reports and automated workflows with Excel, Power BI, SharePoint and Power Automate. Outside class I build end-to-end projects in Python, and I am now moving into AI with retrieval-augmented generation (RAG) and transformer models.',
  ],
  highlights: [
    { value: 8.5, decimals: 1, suffix: '', label: 'CGPA at WCE Sangli' },
    { value: 4, decimals: 0, suffix: '', label: 'Projects shipped or in progress' },
    { value: 10000, decimals: 0, suffix: '', label: 'Customers analysed in one project' },
    { value: 94.83, decimals: 2, suffix: '%', label: 'HSC (12th) score' },
  ],
}

export const projects = [
  {
    id: 'fintech',
    title: 'High-Value Customer Identification',
    subtitle: 'Fintech customer segmentation',
    category: 'Data Analysis · ML',
    status: 'Completed',
    icon: 'chart',
    accent: 'from-indigo-500/20 to-sky-500/10',
    summary:
      'A weighted Customer Value Score and K-Means segmentation that finds the most valuable bank customers today, and the ones most likely to grow.',
    metrics: [
      { value: '10K', label: 'customers' },
      { value: '94.5%', label: 'Premium match' },
      { value: '1,338', label: 'prioritised' },
    ],
    problem:
      'A bank had 10,000 customers across 26 attributes and existing segment labels, but no clear way to tell who was truly high-value or who had untapped potential.',
    approach: [
      'Explored the Customer 360 dataset (no missing values or duplicates) and found strong links between income and spend (r = 0.75), balance (0.71) and investment (0.71).',
      'Built a Customer Value Score from 7 min-max-scaled dimensions: financial strength 25%, transactions 15%, spending 15%, credit 15%, engagement 10%, relationship 10%, future potential 10%.',
      'Clustered customers with K-Means (k = 4) on 12 standardised features and mapped clusters to Standard, Silver, Gold and Premium.',
    ],
    results: [
      'The clusters agreed with existing Premium labels 94.5% of the time (60.37% overall).',
      'Premium customers are 11% of the base but drive 30.5% of monthly spend.',
      'Flagged 292 top-10%-income customers who were not Premium.',
      'Ranked 1,338 low-value, high-potential customers into 335 High, 334 Medium and 669 Low priority, each with a recommended action.',
    ],
    weights: [
      ['Financial strength', 25],
      ['Transactions', 15],
      ['Spending', 15],
      ['Credit', 15],
      ['Engagement', 10],
      ['Relationship', 10],
      ['Future potential', 10],
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Excel'],
    links: { github: 'https://github.com/Bharambevaish/Fintech-Customer-Segmentation' },
  },
  {
    id: 'documind',
    title: 'DocuMind',
    subtitle: 'RAG document assistant',
    category: 'AI · LLM · RAG',
    status: 'In progress',
    icon: 'brain',
    accent: 'from-violet-500/20 to-fuchsia-500/10',
    summary:
      'Ask questions about your documentation in plain English and get answers grounded in the exact passages they came from.',
    metrics: [
      { value: 'RAG', label: 'architecture' },
      { value: 'LLM', label: 'powered' },
      { value: 'WIP', label: 'status' },
    ],
    problem:
      'Large language models answer confidently but can make things up, and they know nothing about your own documents. Searching long documentation by hand is slow.',
    approach: [
      'Load documents and split them into overlapping chunks.',
      'Turn each chunk into an embedding vector and store it in a searchable index.',
      'For each question, retrieve the most relevant chunks by similarity.',
      'Pass those chunks to an LLM so the answer is grounded in your content.',
    ],
    results: ['Currently in development. Follow progress on GitHub.'],
    pipeline: ['Ingest', 'Chunk', 'Embed', 'Retrieve', 'Generate'],
    stack: ['Python', 'LLMs', 'Embeddings', 'Vector search'],
    links: { github: 'https://github.com/Bharambevaish/documind-rag' },
  },
  {
    id: 'legal',
    title: 'Legal Case Outcome Prediction',
    subtitle: 'NLP for Indian law',
    category: 'NLP · Transformers',
    status: 'Completed',
    icon: 'scale',
    accent: 'from-amber-500/20 to-orange-500/10',
    summary:
      'A web app that reads the text of an Indian legal case and predicts its likely outcome using InLegalBERT.',
    metrics: [
      { value: 'BERT', label: 'transformer' },
      { value: 'Web', label: 'app' },
      { value: 'DB', label: 'backed' },
    ],
    problem:
      'Legal documents are long and dense. Predicting how similar cases were decided can help researchers and students find patterns faster.',
    approach: [
      'Used InLegalBERT, a language model pre-trained on Indian legal text, to understand case documents.',
      'Built an interactive Streamlit interface where users submit case text and see the predicted outcome.',
      'Stored records in Supabase.',
    ],
    results: ['End-to-end app from case text to predicted outcome.'],
    pipeline: ['Case text', 'InLegalBERT', 'Prediction', 'Streamlit UI', 'Supabase'],
    stack: ['Python', 'InLegalBERT', 'Hugging Face', 'Streamlit', 'Supabase'],
    links: {},
  },
  {
    id: 'safelinker',
    title: 'SafeLinker',
    subtitle: 'Phishing URL detection',
    category: 'Security · ML',
    status: 'Completed',
    icon: 'shield',
    accent: 'from-emerald-500/20 to-teal-500/10',
    summary: 'A tool that checks whether a URL is likely to be a phishing link before you click it.',
    metrics: [
      { value: 'URL', label: 'analysis' },
      { value: 'ML', label: 'classifier' },
      { value: 'Safe', label: 'browsing' },
    ],
    problem:
      'Phishing links look almost identical to real ones, and one wrong click can expose passwords or payment details.',
    approach: [
      'Analyses a URL and classifies it as likely safe or likely phishing.',
    ],
    results: ['Gives users a quick check before opening a suspicious link.'],
    pipeline: ['URL in', 'Analyse', 'Classify', 'Verdict'],
    stack: ['Python', 'Machine learning'],
    links: {},
  },
]

export const experience = [
  {
    role: 'Cybersecurity Summer Intern',
    org: 'Siemens',
    period: 'Jun 2026 – Jul 2026',
    type: 'Internship',
    icon: 'siemens',
    points: [
      'Built data analysis and reports for the team with Excel pivot tables and Power BI dashboards.',
      'Automated routine workflows with Power Automate and organised team content in SharePoint.',
      'Learned the foundations of security practice, including Zero Trust and CVSS-based vulnerability management.',
    ],
    tools: ['Power BI', 'Excel', 'Power Automate', 'SharePoint'],
  },
  {
    role: 'Siemens Scholar, Batch 11',
    org: 'Siemens Scholarship Program',
    period: 'Scholarship',
    type: 'Award',
    icon: 'award',
    points: [
      'Selected for the Siemens Scholarship Program, which supports engineering students with merit-based scholarships and mentoring.',
    ],
    tools: [],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'SQL', icon: 'sql' },
      { name: 'C', icon: 'c' },
    ],
  },
  {
    group: 'Data & ML',
    items: [
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'scikit-learn', icon: 'sklearn' },
      { name: 'Jupyter', icon: 'jupyter' },
      { name: 'Matplotlib & Seaborn', icon: 'chart' },
    ],
  },
  {
    group: 'AI & NLP',
    items: [
      { name: 'RAG', icon: 'brain' },
      { name: 'LLMs', icon: 'sparkles' },
      { name: 'Hugging Face', icon: 'huggingface' },
      { name: 'InLegalBERT', icon: 'scale' },
    ],
  },
  {
    group: 'BI & Tools',
    items: [
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'Excel', icon: 'excel' },
      { name: 'Power Automate', icon: 'powerautomate' },
      { name: 'SharePoint', icon: 'sharepoint' },
      { name: 'Streamlit', icon: 'streamlit' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Git & GitHub', icon: 'github' },
    ],
  },
]

export const education = [
  {
    title: 'B.Tech, Information Technology',
    place: 'Walchand College of Engineering, Sangli',
    period: '2023 – 2027',
    score: 'CGPA 8.5',
    icon: 'grad',
  },
  {
    title: 'Higher Secondary (HSC, 12th)',
    place: 'Shri Samarth Junior College, Akola · Maharashtra Board',
    period: 'HSC',
    score: '94.83%',
    icon: 'book',
  },
  {
    title: 'Secondary (SSC, 10th)',
    place: 'Maharashtra State Board',
    period: 'SSC',
    score: '79.60%',
    icon: 'book',
  },
]

export const certifications = [
  {
    title: 'Data Science and Applied Maths',
    issuer: 'Techademy Learning Solutions',
    date: 'Apr 2026',
    detail: '40 hours',
  },
  {
    title: 'Siemens Scholarship Program',
    issuer: 'Siemens',
    date: 'Batch 11',
    detail: 'Scholar',
  },
]
