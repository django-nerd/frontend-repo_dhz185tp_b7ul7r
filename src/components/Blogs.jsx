import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blogs() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 text-3xl font-semibold sm:text-4xl">
          Insights & Stories
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={post.cover_image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/70">{post.excerpt}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                  <span>By {post.author}</span>
                  {post.tags && post.tags.length > 0 && (
                    <span className="inline-flex gap-1">
                      {post.tags.slice(0, 2).map((t) => (
                        <span key={t} className="rounded-full bg-white/10 px-2 py-0.5">{t}</span>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
