import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Inventory() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/cars`)
        const data = await res.json()
        setCars(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="inventory" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 text-3xl font-semibold sm:text-4xl">
          Featured Inventory
        </motion.h2>

        {loading ? (
          <p className="text-white/70">Loading cars...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car, idx) => (
              <motion.article
                key={car.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={car.image} alt={`${car.make} ${car.model}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {car.is_featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-medium">Featured</span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold">{car.make} {car.model}</h3>
                    <p className="text-red-400">${Number(car.price).toLocaleString()}</p>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{car.year} • {car.fuel || '—'} • {car.transmission || '—'}</p>
                  <div className="mt-4 flex gap-3">
                    <button className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm text-black transition hover:bg-red-500 hover:text-white">Enquire</button>
                    <button className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/10">Details</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
