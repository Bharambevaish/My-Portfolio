import { motion } from 'framer-motion'
import { LuAward } from 'react-icons/lu'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import Icon from './Icon'
import { education, certifications } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" eyebrow="Education" title="Education & certifications" />

        <div className="grid gap-10 md:ml-[220px] lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <TiltCard intensity={4} className="group flex items-center gap-5 rounded-2xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-xl text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={e.icon} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">{e.title}</h3>
                    <p className="text-sm text-zinc-500">{e.place}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold tabular-nums">{e.score}</div>
                    <div className="font-mono text-xs text-zinc-500">{e.period}</div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl border border-dashed border-zinc-300 p-5 dark:border-zinc-700"
                >
                  <LuAward className="absolute -right-3 -top-3 text-7xl text-accent opacity-10" />
                  <div className="font-mono text-xs uppercase tracking-widest text-accent">{c.date} · {c.detail}</div>
                  <h3 className="mt-2 font-semibold">{c.title}</h3>
                  <p className="text-sm text-zinc-500">{c.issuer}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
