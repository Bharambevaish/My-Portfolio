import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Counter from './Counter'
import TiltCard from './TiltCard'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading icon="about" eyebrow="About" title="A little about me" />
        <div className="grid gap-12 md:grid-cols-[180px_1fr] md:gap-10">
          <div />
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}><p>{p}</p></Reveal>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 0.08}>
                  <TiltCard className="h-full rounded-2xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/60">
                    <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                      <Counter value={h.value} decimals={h.decimals} suffix={h.suffix} />
                    </div>
                    <div className="mt-2 text-sm text-zinc-500">{h.label}</div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
