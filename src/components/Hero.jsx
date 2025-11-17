import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-24 sm:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/70 backdrop-blur"
        >
          New Release
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl"
        >
          Performance Meets Elegance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl text-white/80"
        >
          Discover meticulously curated vehicles with next‑gen technology, crafted for drivers who demand more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 flex flex-wrap gap-3"
        >
          <a href="#inventory" className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-black shadow-lg shadow-red-500/10 transition hover:bg-red-500 hover:text-white">
            Browse Inventory
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3" strokeWidth="1.5" stroke="currentColor" fill="none"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:border-white/40 hover:bg-white/10">Book a Test Drive</a>
        </motion.div>
      </div>
    </section>
  )
}
