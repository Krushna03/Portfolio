import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import ScrollToTop from "./components/ScrollToTop"


export default function App() {


  return (
    <div className="min-h-screen bg-[#0a0a14] text-white lg:px-16">
      
      {/* Navigation */}
        <Header />

      {/* Sections */}
        <Hero />
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
        <Contact />

      {/* Footer */}
        <Footer />

      {/* Scroll to Top Button */}
        <ScrollToTop />
    </div>
  )
}
