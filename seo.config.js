// ─────────────────────────────────────────────────────────────
//  SEO: at build time this writes real, crawlable HTML into
//  index.html (title, meta tags, structured data and a text
//  version of the page) from src/data/portfolio.js.
//  React replaces the text version as soon as the app loads.
// ─────────────────────────────────────────────────────────────
import { profile, about, projects, experience, education, certifications, skills } from './src/data/portfolio.js'

export const SITE_URL = 'https://vaishnavibharambe.me/'

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const title = 'Vaishnavi Bharambe | Data Analyst & AI Developer · Portfolio'
const description =
  'Vaishnavi Bharambe is a B.Tech Information Technology student at Walchand College of Engineering, Sangli, and a Siemens Scholar. Portfolio of data analysis, machine learning and AI projects: RAG, NLP, customer segmentation and phishing detection.'

function jsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: profile.name,
    alternateName: ['Vaishnavi Kailas Bharambe', 'Bharambevaish'],
    url: SITE_URL,
    image: `${SITE_URL}vaishnavi-bharambe.jpg`,
    email: `mailto:${profile.email}`,
    jobTitle: 'Data Analyst & AI Developer',
    description,
    address: { '@type': 'PostalAddress', addressRegion: 'Maharashtra', addressCountry: 'IN' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Walchand College of Engineering, Sangli',
      sameAs: 'https://www.walchandsangli.ac.in/',
    },
    affiliation: { '@type': 'Organization', name: 'Siemens' },
    award: ['Siemens Scholar (Batch 11), Siemens Scholarship Program'],
    hasCredential: certifications
      .filter((c) => c.featured)
      .map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c.title, recognizedBy: { '@type': 'Organization', name: c.issuer } })),
    knowsAbout: [...new Set(skills.flatMap((g) => g.items.map((i) => i.name)))],
    sameAs: [profile.github, profile.linkedin],
  }
  const site = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: 'Vaishnavi Bharambe',
    alternateName: 'Vaishnavi Bharambe Portfolio',
    author: { '@id': `${SITE_URL}#person` },
  }
  const page = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: SITE_URL,
    name: title,
    mainEntity: { '@id': `${SITE_URL}#person` },
    dateModified: new Date().toISOString().slice(0, 10),
  }
  return [person, site, page].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n    ')
}

function headTags() {
  return `
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="author" content="${esc(profile.name)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="keywords" content="Vaishnavi Bharambe, Vaishnavi Kailas Bharambe, Bharambevaish, Walchand College of Engineering Sangli, Siemens Scholar, data analyst, AI, machine learning, RAG, portfolio" />
    <link rel="canonical" href="${SITE_URL}" />
    <meta name="theme-color" content="#18181b" />

    <meta property="og:type" content="profile" />
    <meta property="og:site_name" content="Vaishnavi Bharambe" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${SITE_URL}" />
    <meta property="og:image" content="${SITE_URL}og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Vaishnavi Bharambe, Data Analyst and AI Developer" />
    <meta property="profile:first_name" content="Vaishnavi" />
    <meta property="profile:last_name" content="Bharambe" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${SITE_URL}og-image.png" />

    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
    <link rel="manifest" href="./site.webmanifest" />
    ${jsonLd()}`
}

// Plain, semantic HTML of the whole page for crawlers and no-JS visitors.
function staticBody() {
  const li = (items) => items.map((x) => `<li>${x}</li>`).join('')
  return `
      <main style="max-width:760px;margin:0 auto;padding:48px 20px;font-family:system-ui,sans-serif;line-height:1.6">
        <header>
          <h1>Vaishnavi Bharambe</h1>
          <p><strong>Data Analyst &amp; AI Developer</strong> · B.Tech Information Technology, Walchand College of Engineering, Sangli · Siemens Scholar</p>
          <p>${esc(profile.tagline)}</p>
          <p><a href="${profile.github}">GitHub</a> · <a href="${profile.linkedin}">LinkedIn</a> · <a href="mailto:${profile.email}">${esc(profile.email)}</a></p>
        </header>
        <section id="about-static"><h2>About Vaishnavi Bharambe</h2>${about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}</section>
        <section id="projects-static"><h2>Projects</h2>
          ${projects.map((p) => `<article><h3>${esc(p.title)}: ${esc(p.subtitle)}</h3><p>${esc(p.summary)}</p><p>Tech: ${esc(p.stack.join(', '))}</p>${p.links.github ? `<p><a href="${p.links.github}">Source code</a>${p.links.live ? ` · <a href="${p.links.live}">Live demo</a>` : ''}</p>` : ''}</article>`).join('')}
        </section>
        <section id="experience-static"><h2>Experience</h2>
          ${experience.map((e) => `<article><h3>${esc(e.role)}, ${esc(e.org)}</h3><p>${esc(e.period)}</p><ul>${li(e.points.map(esc))}</ul></article>`).join('')}
        </section>
        <section id="skills-static"><h2>Skills</h2><ul>${li(skills.map((g) => `${esc(g.group)}: ${esc(g.items.map((i) => i.name).join(', '))}`))}</ul></section>
        <section id="education-static"><h2>Education</h2><ul>${li(education.map((e) => `${esc(e.title)}, ${esc(e.place)} (${esc(e.score)})`))}</ul></section>
        <section id="certifications-static"><h2>Certifications</h2><ul>${li(certifications.map((c) => `${esc(c.title)}, ${esc(c.issuer)} (${esc(c.date)})`))}</ul></section>
      </main>`
}

export default function seoPlugin() {
  return {
    name: 'portfolio-seo',
    transformIndexHtml(html) {
      return html
        .replace('<!--SEO_HEAD-->', headTags())
        .replace('<div id="root"></div>', `<div id="root">${staticBody()}</div>`)
    },
  }
}
