import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-lg font-semibold tracking-wide">FLAMES AUTO</a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#inventory" className="text-white/80 transition hover:text-white">Inventory</a>
          <a href="#blogs" className="text-white/80 transition hover:text-white">Blogs</a>
          <a href="#contact" className="text-white/80 transition hover:text-white">Contact</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-black/80 text-white md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              <a href="#inventory" className="py-2 text-white/80 transition hover:text-white" onClick={() => setOpen(false)}>Inventory</a>
              <a href="#blogs" className="py-2 text-white/80 transition hover:text-white" onClick={() => setOpen(false)}>Blogs</a>
              <a href="#contact" className="py-2 text-white/80 transition hover:text-white" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
