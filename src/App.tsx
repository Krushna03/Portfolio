import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Header from "./components/Header"


export default function App() {


  return (
    <div className="min-h-screen bg-[#0a0a14] text-white sm:px-20">
      
      {/* Navigation */}
      <Header />

      {/* Sections */}
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
