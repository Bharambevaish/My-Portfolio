import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div className="mb-14 grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-accent">{index}</span>
          <motion.span
            className="h-px w-10 origin-left bg-zinc-300 dark:bg-zinc-700"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <div>
        <Reveal delay={0.08}>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        </Reveal>
        {children && (
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">{children}</p>
          </Reveal>
        )}
      </div>
    </div>
  )
}
