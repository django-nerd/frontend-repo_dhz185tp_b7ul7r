import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inventory from './components/Inventory'
import Blogs from './components/Blogs'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Inventory />
        <div id="blogs">
          <Blogs />
        </div>
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-center text-white/50">
        <p>© {new Date().getFullYear()} Flames Auto. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
