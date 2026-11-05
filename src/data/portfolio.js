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
  photo: 'vaishnavi-bharambe.jpg', // in public/
  photoSmall: 'vaishnavi-bharambe-sm.jpg',
  resume: '', // TODO: paste a public link to your resume PDF to show a "Resume" button
}

export const about = {
  paragraphs: [
    "I'm a B.Tech Information Technology student at Walchand College of Engineering, Sangli, and a Siemens Scholar (Batch 11). I like questions that a dataset can answer: who your most valuable customers are, which ones are about to become valuable, and what to do about each group.",
    'This summer I interned with the cybersecurity team at Siemens, working across governance and risk, Zero Trust and vulnerability management, and building compliance dashboards and automated workflows with Power BI, Excel, Power Automate and SharePoint. Outside class I build end-to-end projects in Python, and I am now moving into AI with retrieval-augmented generation (RAG) and transformer models.',
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
      'Upload PDFs and ask questions in plain English. Answers come only from your documents, with the file and page cited for every fact.',
    metrics: [
      { value: 'Cited', label: 'file + page' },
      { value: '2', label: 'LLM providers' },
      { value: '0.25', label: 'relevance gate' },
    ],
    problem:
      'Large language models answer confidently but can make things up, and they know nothing about your own documents. Searching long documentation by hand is slow.',
    approach: [
      'Reads PDFs page by page (plus TXT and Markdown) and splits them into 800-character chunks with 150 characters of overlap.',
      'Embeds each chunk with all-MiniLM-L6-v2 and stores text, vector, file name and page number in ChromaDB.',
      'For each question, retrieves the top-K chunks by cosine similarity. If the best match scores below 0.25, it replies "not found" without calling the LLM.',
      'Otherwise a strict prompt sends the cited context to the LLM (Groq in the cloud or Ollama locally), which must cite every fact.',
    ],
    results: [
      'Every answer cites its source, e.g. [company_leave_policy.pdf, p.2], with a sources panel showing the snippet and similarity score.',
      'Two layers against hallucination: a similarity threshold and a strict prompt.',
      'Skips duplicate uploads with SHA-256 hashing and replaces changed files automatically.',
      'Logs every query and includes an evaluation script for retrieval hit rate, citation accuracy and response time.',
    ],
    pipeline: ['Upload', 'Chunk', 'Embed', 'ChromaDB', 'Retrieve', 'LLM + citations'],
    stack: ['Python', 'Streamlit', 'ChromaDB', 'Sentence Transformers', 'Groq', 'Ollama', 'pypdf'],
    links: { github: 'https://github.com/Bharambevaish/documind-rag' },
  },
  {
    id: 'legal',
    title: 'Legal Case Outcome Prediction',
    subtitle: 'NLP for Indian law',
    category: 'NLP · Explainable AI',
    team: {
      label: 'Team project · Group F, Project IV',
      members: 'Ankita Kamble, Vaishnavi Bharambe, Shrutika Pagare',
      guide: 'Dr. Shefali Sonavane',
      place: 'Dept. of Information Technology, Walchand College of Engineering, Sangli (2026–27)',
    },
    status: 'Completed',
    icon: 'scale',
    accent: 'from-amber-500/20 to-orange-500/10',
    summary:
      'Upload an Indian court judgment and a fine-tuned InLegalBERT model predicts its jurisdiction and appellate outcome, with SHAP showing which phrases drove the decision.',
    metrics: [
      { value: '89.7%', label: 'case-type acc.' },
      { value: '71.6%', label: 'outcome acc.' },
      { value: '120', label: 'SC cases tested' },
    ],
    problem:
      'Court judgments are long, unstructured PDFs, far beyond what a standard transformer can read at once. Deep learning predictions are also a "black box", which is hard to trust in law.',
    approach: [
      'Parses judgment PDFs with PyMuPDF and regex to strip administrative metadata (coram, headers) and keep the legal facts.',
      'Slices long texts (over 4,000 words) into overlapping 512-token chunks so nothing is lost to token limits.',
      'Runs a dual-inference pipeline: fine-tuned InLegalBERT models predict jurisdiction (civil, criminal, constitutional) and outcome (allowed or dismissed) with a confidence score.',
      'Hosts the fine-tuned checkpoints on Hugging Face (vaishnavi1011/legal-case-outcome-predictor), pulled automatically on first run.',
      'Uses SHAP to compute each token\'s contribution and render a visual heatmap of the decision drivers.',
    ],
    results: [
      'Case type (civil, criminal, constitutional): 89.7% validation accuracy, F1 0.895, after 3 epochs of fine-tuning.',
      'Case outcome (allowed or dismissed): 71.6% validation accuracy, F1 0.764.',
      'On a separate benchmark of 120 Supreme Court judgments: 76.7% accuracy on case type and 67.5% on outcome.',
      'Streamlit dashboard with drag-and-drop upload, prediction with confidence, and a SHAP force plot.',
    ],
    pipeline: ['PDF upload', 'Clean & chunk', 'InLegalBERT', 'SHAP', 'Dashboard'],
    stack: ['Python', 'InLegalBERT', 'Hugging Face', 'SHAP', 'PyMuPDF', 'Streamlit', 'Supabase'],
    links: { github: 'https://github.com/Bharambevaish/AI-for-Legal-Case' },
  },
  {
    id: 'safelinker',
    title: 'SafeLinker',
    subtitle: 'Phishing URL detection',
    category: 'Security · ML',
    status: 'Completed',
    icon: 'shield',
    accent: 'from-emerald-500/20 to-teal-500/10',
    summary:
      'A real-time phishing URL detector that combines rule-based checks with a soft-voting ensemble of XGBoost and Random Forest, and explains why a link was flagged.',
    metrics: [
      { value: '95%+', label: 'accuracy' },
      { value: '15+', label: 'URL features' },
      { value: 'Live', label: 'on Streamlit' },
    ],
    problem:
      'Phishing links look almost identical to real ones, and one wrong click can expose passwords or payment details.',
    approach: [
      'Engineered 15+ features from each URL, including entropy, brand mimicry and structural patterns.',
      'Trained a soft-voting ensemble of XGBoost and Random Forest, combined with rule-based heuristics for a hybrid risk score.',
      'Built a Streamlit dashboard with Plotly feature-importance charts and a "Reasoning" panel that explains each verdict.',
    ],
    results: [
      'The ensemble classifies URLs with 95%+ accuracy.',
      'Gives a weighted risk assessment in real time, with a plain explanation of why a link looks suspicious.',
      'Deployed live on Streamlit Community Cloud.',
    ],
    pipeline: ['URL in', 'Feature extraction', 'XGBoost + RF vote', 'Rules check', 'Risk + reasoning'],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Streamlit', 'Plotly'],
    links: {
      github: 'https://github.com/Bharambevaish/Safe-Linker-Phishing-Detector',
      live: 'https://safe-linker-phishing-detector-cj7snqhuhm7lxko4n7x72b.streamlit.app/',
    },
  },
]

export const experience = [
  {
    role: 'Cybersecurity Summer Intern',
    org: 'Siemens',
    period: 'Jun 2026 – Jul 2026',
    type: 'Internship',
    icon: 'briefcase',
    points: [
      'Governance & risk: worked on the Asset Classification and Protection (ACP) process and evaluated vendor risk using C-SCRM (cyber supply chain risk management) guidelines.',
      'Architecture & vulnerability management: analysed Zero Trust Architecture (identity, micro-segmentation, device trust) and the vulnerability management lifecycle, aligned with ISO 27001 and IEC 62443 standards.',
      'Automation & dashboarding: built compliance-tracking dashboards and automated workflows with Microsoft Excel, Power BI, Power Automate and SharePoint.',
    ],
    tools: ['Zero Trust', 'ISO 27001', 'IEC 62443', 'C-SCRM', 'Power BI', 'Excel', 'Power Automate', 'SharePoint'],
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
      { name: 'XGBoost', icon: 'chart' },
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
      { name: 'ChromaDB', icon: 'sql' },
      { name: 'InLegalBERT', icon: 'scale' },
      { name: 'SHAP (Explainable AI)', icon: 'sparkles' },
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

// Certificates: `file` is a PDF in public/certificates/ (leave it out if there's no PDF).
// `category` must match one of certificationCategories below.
export const certificationCategories = ['AI & Data', 'Programming & Web', 'Cloud & Software', 'IoT & Embedded', 'Industry Training']

export const certifications = [
  // ── Featured (shown as large cards at the top) ──
  { title: 'Fundamentals of Accelerated Computing with CUDA Python', issuer: 'NVIDIA', date: 'Feb 2026', category: 'AI & Data', icon: 'nvidia', featured: true, detail: 'Certificate of Competency', file: 'nvidia-accelerated-computing-cuda-python' },
  { title: 'Fundamentals of Accelerated Computing with Modern CUDA C++', issuer: 'NVIDIA', date: 'Feb 2026', category: 'Programming & Web', icon: 'nvidia', featured: true, detail: 'Certificate of Competency', file: 'nvidia-accelerated-computing-cuda-cpp' },
  { title: 'Python (Basic) Skill Certification', issuer: 'HackerRank', date: 'Oct 2024', category: 'Programming & Web', icon: 'hackerrank', featured: true, detail: 'Skill test passed', file: 'hackerrank-python-basic', verify: 'https://www.hackerrank.com/certificates/9bbafed16d3b' },
  { title: 'Siemens Scholarship Program', issuer: 'Siemens', date: 'Batch 11', category: 'Industry Training', icon: 'award', featured: true, detail: 'Scholar' },
  { title: 'Basic Mechatronics', issuer: 'Siemens SITRAIN Digital Industry Academy, Nashik', date: 'May–Jun 2025', category: 'Industry Training', icon: 'factory', featured: true, detail: 'Industry training', file: 'siemens-sitrain-basic-mechatronics' },
  { title: 'Data Science and Applied Maths', issuer: 'Techademy Learning Solutions', date: 'Apr 2026', category: 'AI & Data', icon: 'chart', featured: true, detail: '40 hours' },

  // ── Industry training ──
  { title: 'Basics of Electrical & Mechanical (practical training)', issuer: 'Siemens Technical Academy, Navi Mumbai', date: 'Jul 2024', category: 'Industry Training', icon: 'wrench', file: 'siemens-basics-electrical-mechanical' },

  { title: 'Data Science Training: Post-Assessment', issuer: 'Techademy Learning Solutions', date: 'Mar 2026', category: 'AI & Data', icon: 'chart', detail: 'Assessment', file: 'data-science-training-assessment' },

  // ── AI & Data ──
  { title: 'Learning Generative Adversarial Networks', issuer: 'Techademy', date: 'Dec 2025', category: 'AI & Data', icon: 'brain', file: 'generative-adversarial-networks' },
  { title: 'Prompt Engineering for Everybody with ChatGPT and GPT-4', issuer: 'Techademy', date: 'Dec 2025', category: 'AI & Data', icon: 'sparkles', file: 'prompt-engineering-chatgpt-gpt4' },
  { title: 'How to Use ChatGPT and Generative AI to Help Create Content', issuer: 'Techademy', date: 'Dec 2025', category: 'AI & Data', icon: 'sparkles', file: 'chatgpt-generative-ai-content' },
  { title: 'How to Use ChatGPT and Generative AI for Passive Income', issuer: 'Techademy', date: 'Dec 2025', category: 'AI & Data', icon: 'sparkles', file: 'chatgpt-generative-ai-passive-income' },
  { title: 'ChatGPT and Prompt Engineering for Software Development', issuer: 'Techademy', date: 'Dec 2025', category: 'AI & Data', icon: 'sparkles', file: 'chatgpt-prompt-engineering-software-dev' },
  { title: 'Microsoft SQL Server Development for Everyone', issuer: 'Techademy', date: 'Dec 2025', category: 'AI & Data', icon: 'sql', file: 'microsoft-sql-server' },
  { title: 'Basic Relational Database Design, MySQL', issuer: 'Techademy', date: 'Dec 2025', category: 'AI & Data', icon: 'sql', file: 'relational-database-mysql' },

  // ── Programming & Web ──
  { title: 'Introduction to Data Structures & Algorithms', issuer: 'Techademy', date: 'Dec 2025', category: 'Programming & Web', icon: 'code', file: 'data-structures-algorithms' },
  { title: 'Java for Beginners: Your Easy Guide to Java Programming', issuer: 'Techademy', date: 'Dec 2025', category: 'Programming & Web', icon: 'java', file: 'java-for-beginners' },
  { title: 'JavaScript for Beginners: Fundamental JavaScript Concepts', issuer: 'Techademy', date: 'Dec 2025', category: 'Programming & Web', icon: 'javascript', file: 'javascript-for-beginners' },
  { title: 'Fundamentals of Programming Using Flowchart and Pseudocode', issuer: 'Techademy', date: 'Dec 2025', category: 'Programming & Web', icon: 'code', file: 'programming-flowchart-pseudocode' },
  { title: 'Introduction to HTML', issuer: 'Techademy', date: 'Dec 2025', category: 'Programming & Web', icon: 'html', file: 'introduction-to-html' },
  { title: 'An Introduction to CSS: A Complete Beginner to Expert Course', issuer: 'Techademy', date: 'Dec 2025', category: 'Programming & Web', icon: 'css', file: 'introduction-to-css' },

  // ── IoT & Embedded ──
  { title: 'Internet of Things: Concepts', issuer: 'Techademy', date: 'Dec 2025', category: 'IoT & Embedded', icon: 'iot', file: 'internet-of-things-concepts' },
  { title: 'IoT: Design Methodology', issuer: 'Techademy', date: 'Dec 2025', category: 'IoT & Embedded', icon: 'iot', file: 'iot-design-methodology' },
  { title: 'IoT Protocols', issuer: 'Techademy', date: 'Dec 2025', category: 'IoT & Embedded', icon: 'network', file: 'iot-protocols' },
  { title: 'Security in IoT', issuer: 'Techademy', date: 'Dec 2025', category: 'IoT & Embedded', icon: 'shield', file: 'security-in-iot' },
  { title: 'Embedded System for IoT', issuer: 'Techademy', date: 'Dec 2025', category: 'IoT & Embedded', icon: 'chip', file: 'embedded-systems-for-iot' },

  { title: 'Cloud Platforms for IoT, AWS', issuer: 'Techademy', date: 'Dec 2025', category: 'IoT & Embedded', icon: 'cloud', file: 'cloud-platforms-iot-aws' },

  // ── Cloud & Software ──
  { title: 'AWS Cloud Practitioner Essentials Course', issuer: 'Techademy', date: 'Dec 2025', category: 'Cloud & Software', icon: 'aws', file: 'aws-cloud-practitioner-essentials' },
  { title: 'Linux Crash Course for Beginners', issuer: 'Techademy', date: 'Dec 2025', category: 'Cloud & Software', icon: 'linux', file: 'linux-crash-course' },
  { title: 'Agile Software Development', issuer: 'Techademy', date: 'Dec 2025', category: 'Cloud & Software', icon: 'workflow', file: 'agile-software-development' },
  { title: 'CCNA 01: Network Fundamentals Course', issuer: 'Techademy', date: 'Dec 2025', category: 'Cloud & Software', icon: 'network', file: 'ccna-network-fundamentals' },
  { title: 'Software Development Processes and Methodologies', issuer: 'Techademy', date: 'Dec 2025', category: 'Cloud & Software', icon: 'workflow', file: 'software-development-methodologies' },
]
