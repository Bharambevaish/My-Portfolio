// ─────────────────────────────────────────────────────────────
//  FAQ knowledge base for the portfolio chatbot.
//  It runs entirely in the browser: no API key, no server.
//  Each intent has keywords; the reply with the most keyword
//  matches wins. Edit the replies here to change what it says.
// ─────────────────────────────────────────────────────────────
import { profile, projects, certifications } from './portfolio'

const byId = Object.fromEntries(projects.map((p) => [p.id, p]))
const gh = (id) => byId[id]?.links?.github
const live = (id) => byId[id]?.links?.live

export const starterChips = [
  'Who is Vaishnavi?',
  'What are her skills?',
  'Show me her projects',
  'Tell me about Siemens',
  'How can I contact her?',
]

const intents = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'namaste', 'hii', 'good morning', 'good evening'],
    reply: () => ({
      text: `Hi there! 👋 I'm Vaishnavi's portfolio assistant. Ask me about her projects, skills, internship, education or how to reach her.`,
      chips: starterChips,
    }),
  },
  {
    id: 'about',
    keywords: ['who', 'about', 'yourself', 'introduce', 'introduction', 'vaishnavi', 'herself', 'summary', 'background'],
    reply: () => ({
      text: `Vaishnavi Bharambe is a B.Tech Information Technology student at Walchand College of Engineering, Sangli (2023–2027, CGPA 8.5) and a Siemens Scholar (Batch 11).\n\nShe builds data analysis and AI projects in Python, from customer segmentation to RAG assistants, and interned at Siemens in 2026. She's looking for Data Analyst and AI roles.`,
      chips: ['What are her skills?', 'Show me her projects', 'Is she available?'],
    }),
  },
  {
    id: 'skills',
    keywords: ['skill', 'skills', 'tech', 'stack', 'tools', 'language', 'languages', 'know', 'python', 'sql', 'technologies', 'expertise', 'good at'],
    reply: () => ({
      text: `Here's her toolkit:\n\n• Languages: Python, SQL, C\n• Data & ML: Pandas, NumPy, scikit-learn, XGBoost, K-Means, Matplotlib, Seaborn\n• AI & NLP: RAG, LLMs (Groq, Ollama), ChromaDB, Hugging Face, InLegalBERT, SHAP\n• BI & tools: Power BI, Excel, Power Automate, SharePoint, Streamlit, Supabase, Git`,
      links: [{ label: 'See the Skills section', href: '#skills' }],
      chips: ['Show me her projects', 'Does she have AI experience?'],
    }),
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'built', 'build', 'portfolio', 'made', 'work samples', 'show'],
    reply: () => ({
      text: `She has 4 main projects:\n\n1. High-Value Customer Identification: K-Means segmentation of 10,000 bank customers\n2. DocuMind: a RAG assistant that answers from your PDFs with page citations\n3. Legal Case Outcome Prediction: InLegalBERT + SHAP, 89.7% case-type accuracy\n4. SafeLinker: phishing URL detector, 95%+ accuracy, live on Streamlit\n\nAsk about any one for details.`,
      links: [{ label: 'Open the Projects section', href: '#projects' }],
      chips: ['Fintech project', 'DocuMind RAG', 'Legal AI project', 'SafeLinker'],
    }),
  },
  {
    id: 'fintech',
    keywords: ['fintech', 'customer', 'segmentation', 'bank', 'kmeans', 'k-means', 'cluster', 'clustering', 'high-value', 'value score', 'data analysis project'],
    reply: () => ({
      text: `High-Value Customer Identification: she analysed 10,000 bank customers (26 attributes), built a weighted Customer Value Score from 7 dimensions, and clustered customers with K-Means (k = 4) into Standard, Silver, Gold and Premium.\n\nThe clusters matched existing Premium labels 94.5% of the time. Premium customers are 11% of the base but 30.5% of monthly spend. She also prioritised 1,338 high-potential customers with an action for each.`,
      links: [{ label: 'Source code', href: gh('fintech') }],
      chips: ['DocuMind RAG', 'What are her skills?'],
    }),
  },
  {
    id: 'documind',
    keywords: ['rag', 'documind', 'document', 'documents', 'pdf', 'llm', 'chroma', 'chromadb', 'retrieval', 'groq', 'ollama', 'generative', 'genai'],
    reply: () => ({
      text: `DocuMind is a RAG (retrieval-augmented generation) assistant. You upload PDFs, TXT or Markdown files and ask questions; it answers only from your documents and cites the file and page for every fact.\n\nUnder the hood: 800-character chunks, all-MiniLM-L6-v2 embeddings, ChromaDB, and Groq or Ollama as the LLM. If nothing relevant is found it says so instead of guessing. It's in active development.`,
      links: [{ label: 'Source code', href: gh('documind') }],
      chips: ['Legal AI project', 'Does she have AI experience?'],
    }),
  },
  {
    id: 'legal',
    keywords: ['legal', 'law', 'court', 'case', 'judgment', 'inlegalbert', 'bert', 'shap', 'explainable', 'nlp'],
    reply: () => ({
      text: `AI for Legal Case Outcome Prediction reads Indian court judgment PDFs and uses fine-tuned InLegalBERT models to predict the jurisdiction and the appellate outcome (allowed or dismissed).\n\nLong texts are split into overlapping 512-token chunks, and SHAP highlights the phrases that drove each prediction. On validation it reached 89.7% accuracy (F1 0.895) for case type and 71.6% (F1 0.764) for outcome, and it was also tested on a separate set of 120 Supreme Court judgments.\n\nIt's a team project (Group F, Project IV) at Walchand College of Engineering with Ankita Kamble and Shrutika Pagare, guided by Dr. Shefali Sonavane.`,
      links: [{ label: 'Source code', href: gh('legal') }],
      chips: ['SafeLinker', 'Show me her projects'],
    }),
  },
  {
    id: 'safelinker',
    keywords: ['safelinker', 'safe linker', 'phishing', 'url', 'link', 'security', 'cyber', 'xgboost', 'random forest', 'demo', 'live'],
    reply: () => ({
      text: `SafeLinker detects phishing URLs in real time. It extracts 15+ features from a link (entropy, brand mimicry, structure) and combines rule-based checks with a soft-voting ensemble of XGBoost and Random Forest, reaching 95%+ accuracy.\n\nIt also explains why a link was flagged, and you can try it live.`,
      links: [
        { label: 'Try the live demo', href: live('safelinker') },
        { label: 'Source code', href: gh('safelinker') },
      ],
      chips: ['Fintech project', 'Tell me about Siemens'],
    }),
  },
  {
    id: 'experience',
    keywords: ['experience', 'intern', 'internship', 'siemens', 'zero trust', 'iso 27001', 'governance', 'compliance', 'vulnerability', 'worked', 'company', 'work experience', 'job experience', 'power bi'],
    reply: () => ({
      text: `She was a Cybersecurity Summer Intern at Siemens (June–July 2026), working in three areas:\n\n• Governance & risk: the Asset Classification and Protection (ACP) process, and vendor risk evaluation using C-SCRM guidelines\n• Architecture & vulnerability management: Zero Trust Architecture (identity, micro-segmentation, device trust) and the vulnerability lifecycle, aligned with ISO 27001 and IEC 62443\n• Automation & dashboards: compliance-tracking dashboards and automated workflows with Excel, Power BI, Power Automate and SharePoint\n\nShe's also a Siemens Scholar (Batch 11).`,
      links: [{ label: 'See Experience', href: '#experience' }],
      chips: ['Education', 'What are her skills?'],
    }),
  },
  {
    id: 'education',
    keywords: ['education', 'college', 'university', 'cgpa', 'gpa', 'degree', 'marks', 'walchand', 'wce', '12th', '10th', 'hsc', 'ssc', 'study', 'studying', 'btech', 'b.tech', 'graduate', 'graduation'],
    reply: () => ({
      text: `• B.Tech in Information Technology, Walchand College of Engineering, Sangli (2023–2027), CGPA 8.5\n• HSC (12th): 94.83%, Shri Samarth Junior College, Akola\n• SSC (10th): 79.60%, Maharashtra State Board\n\nShe graduates in 2027.`,
      links: [{ label: 'See Education', href: '#education' }],
      chips: ['Certifications', 'Is she available?'],
    }),
  },
  {
    id: 'certifications',
    keywords: ['nvidia', 'cuda', 'hackerrank', 'aws', 'certificate', 'certificates', 'certification', 'certifications', 'course', 'courses', 'scholarship', 'scholar', 'award', 'awards', 'achievement', 'achievements'],
    reply: () => ({
      text: `She has ${certifications.length} certifications. Highlights:\n\n• NVIDIA: Fundamentals of Accelerated Computing with CUDA Python, and with Modern CUDA C++ (Certificates of Competency)\n• HackerRank: Python (Basic) skill certification\n• Siemens: Scholar (Batch 11), SITRAIN Basic Mechatronics, Basics of Electrical & Mechanical training\n• Data Science and Applied Maths, Techademy (40 hours)\n• AI: Generative Adversarial Networks, Prompt Engineering with ChatGPT & GPT-4\n• Data: Microsoft SQL Server, Relational Database Design (MySQL)\n• Programming: Data Structures & Algorithms, Java, JavaScript, HTML, CSS\n• IoT: Concepts, Protocols, Design Methodology, Security, Embedded Systems\n• Cloud & software: AWS Cloud Practitioner Essentials, Linux, Agile, CCNA 01 Network Fundamentals`,
      links: [{ label: 'See all certificates', href: '#certifications' }],
      chips: ['Education', 'Show me her projects'],
    }),
  },
  {
    id: 'ai',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'transformer', 'model', 'models'],
    reply: () => ({
      text: `Yes. AI is where she's heading. She has built:\n\n• A RAG assistant (DocuMind) with ChromaDB, embeddings and LLMs\n• A transformer model project (InLegalBERT) with explainable AI (SHAP)\n• ML classifiers (XGBoost + Random Forest) and clustering (K-Means)\n\nShe's targeting roles in the AI domain.`,
      chips: ['DocuMind RAG', 'Legal AI project', 'Is she available?'],
    }),
  },
  {
    id: 'availability',
    keywords: ['available', 'availability', 'open', 'looking', 'role', 'roles', 'opportunity', 'opportunities', 'hiring', 'placement', 'job', 'full-time', 'fulltime', 'internship opportunity', 'join'],
    reply: () => ({
      text: `Yes, she's open to Data Analyst and AI roles, including campus placements for the 2026–27 season. She graduates in 2027.`,
      links: [{ label: 'Contact her', href: '#contact' }],
      chips: ['How can I contact her?', 'Why should we hire her?'],
    }),
  },
  {
    id: 'whyhire',
    keywords: ['why', 'hire', 'strength', 'strengths', 'best', 'stand out', 'unique', 'fit', 'good candidate'],
    reply: () => ({
      text: `A few reasons:\n\n• She ships complete projects, from raw data to a working app, and two are deployed or open-source.\n• She pairs analytics (Power BI, Excel, K-Means) with modern AI (RAG, transformers).\n• Strong academics: CGPA 8.5 and selected as a Siemens Scholar.\n• Real industry exposure from her Siemens internship.`,
      chips: ['Show me her projects', 'How can I contact her?'],
    }),
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'mail', 'reach', 'connect', 'message', 'talk', 'phone', 'call', 'get in touch'],
    reply: () => ({
      text: `The best way is email: ${profile.email}\n\nYou can also connect on LinkedIn or use the contact form on this page.`,
      links: [
        { label: 'Send an email', href: `mailto:${profile.email}` },
        { label: 'LinkedIn', href: profile.linkedin },
        { label: 'Contact form', href: '#contact' },
      ],
      copy: profile.email,
    }),
  },
  {
    id: 'links',
    keywords: ['github', 'linkedin', 'social', 'profile', 'profiles', 'code', 'repo', 'repository', 'source'],
    reply: () => ({
      text: `Here are her profiles:`,
      links: [
        { label: 'GitHub', href: profile.github },
        { label: 'LinkedIn', href: profile.linkedin },
      ],
      chips: ['Show me her projects'],
    }),
  },
  {
    id: 'resume',
    keywords: ['resume', 'cv', 'biodata'],
    reply: () =>
      profile.resume
        ? { text: `Here's her resume:`, links: [{ label: 'Open resume', href: profile.resume }] }
        : { text: `You can request her resume by email at ${profile.email}. She'll be happy to share it.`, links: [{ label: 'Email her', href: `mailto:${profile.email}` }], copy: profile.email },
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'city', 'based', 'live', 'from', 'relocate', 'relocation', 'remote'],
    reply: () => ({
      text: `She's based in ${profile.location} and studies at Walchand College of Engineering, Sangli. For questions about relocation or remote work, email her directly.`,
      chips: ['How can I contact her?'],
    }),
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank', 'thank you', 'bye', 'goodbye', 'great', 'awesome', 'cool', 'nice'],
    reply: () => ({
      text: `You're welcome! 😊 If you'd like to talk to Vaishnavi directly, email her at ${profile.email}.`,
      chips: ['Show me her projects', 'How can I contact her?'],
    }),
  },
]

// Chip labels that should map straight to an intent.
const chipMap = {
  'Fintech project': 'fintech',
  'DocuMind RAG': 'documind',
  'Legal AI project': 'legal',
  SafeLinker: 'safelinker',
  'Tell me about Siemens': 'experience',
  Education: 'education',
  Certifications: 'certifications',
  'Is she available?': 'availability',
  'Why should we hire her?': 'whyhire',
  'Does she have AI experience?': 'ai',
}

const normalize = (s) => ` ${s.toLowerCase().replace(/[^a-z0-9.+\- ]/g, ' ').replace(/\s+/g, ' ')} `

export function getReply(input) {
  if (chipMap[input]) return intents.find((i) => i.id === chipMap[input]).reply()

  const text = normalize(input)
  let best = null
  let bestScore = 0
  for (const intent of intents) {
    let score = 0
    for (const k of intent.keywords) {
      // whole-word match counts more than a partial one; longer phrases count more
      if (text.includes(` ${k} `)) score += 2 + k.split(' ').length
      else if (k.length > 4 && text.includes(k)) score += 1
    }
    if (score > bestScore) { bestScore = score; best = intent }
  }

  if (best) return best.reply()
  return {
    text: `I'm not sure about that one. I'm a simple assistant that knows about Vaishnavi's projects, skills, internship and education. For anything else, email her at ${profile.email}.`,
    chips: starterChips,
    copy: profile.email,
  }
}
