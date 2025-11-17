import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-semibold sm:text-4xl">
          Ready to experience it in person?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mt-3 max-w-xl text-white/70">
          Book a test drive today. Our specialists will tailor a session to your preferences and schedule.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          href="#"
          className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 text-black shadow-lg shadow-red-500/10 transition hover:bg-red-500 hover:text-white"
        >
          Book a Test Drive
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-5 w-5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3" strokeWidth="1.5" stroke="currentColor" fill="none"/></svg>
        </motion.a>
      </div>
    </section>
  )
}
