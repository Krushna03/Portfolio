import { useEffect, useRef } from "react"
import { Button } from "./components/ui/button"
import { MoonIcon, ArrowRightIcon, Send } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

// Tech stack icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaGithub, FaNpm } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"
import Footer from "./components/Footer"

export default function Portfolio() {
  // Refs for scroll animations
  const servicesRef = useRef(null)
  const skillsRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  // Animation controls
  const servicesControls = useAnimation()
  const skillsControls = useAnimation()
  const portfolioControls = useAnimation()
  const contactControls = useAnimation()

  // Check if sections are in view
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 })
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (servicesInView) {
      servicesControls.start("visible")
    }
    if (skillsInView) {
      skillsControls.start("visible")
    }
    if (portfolioInView) {
      portfolioControls.start("visible")
    }
    if (contactInView) {
      contactControls.start("visible")
    }
  }, [
    servicesInView,
    skillsInView,
    portfolioInView,
    contactInView,
    servicesControls,
    skillsControls,
    portfolioControls,
    contactControls,
  ])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Scroll to section function
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef?.current.offsetTop - 100,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center sticky top-0 z-50 bg-[#0a0a14]/90 backdrop-blur-sm">
        <div className="text-sm font-medium uppercase tracking-wider">Tatiana Dmitrienko</div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-white/80 hover:text-[#ff2a8d] text-sm transition-colors duration-300"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-white/80 hover:text-[#ff2a8d] text-sm transition-colors duration-300"
            >
              TECHNOLOGIES
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="text-white/80 hover:text-[#ff2a8d] text-sm transition-colors duration-300"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-white/80 hover:text-[#ff2a8d] text-sm transition-colors duration-300"
            >
              CONTACT
            </button>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
            <MoonIcon className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#ff2a8d] mb-6">
            FRONTEND
            <br />
            DEVELOPER
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-md">
            I am Tatiana — a <span className="text-[#ff2a8d]">frontend developer</span> with a passion for creating
            beautiful and responsive websites.
          </p>
          <Button
            onClick={() => scrollToSection(servicesRef)}
            className="bg-[#ff2a8d] hover:bg-[#ff2a8d]/90 text-white rounded-full px-8 py-2 h-auto transition-transform duration-300 hover:translate-y-[-2px]"
          >
            Learn more
          </Button>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-VOcSFHqx07hq2qJfJndlRluTUG0LGp.png"
              alt="Frontend Developer"
              // fill
              className="object-cover object-center"
              // priority
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="container mx-auto px-4 py-16 md:py-24">
        <motion.div variants={containerVariants} initial="hidden" animate={servicesControls} className="space-y-12">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#ff2a8d]">
            MY SERVICES
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-[#111122] p-6 rounded-lg border border-[#222233] hover:border-[#ff2a8d]/30 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <h3 className="text-xl font-semibold mb-3">Website Development</h3>
              <p className="text-white/70">
                Creating responsive and performant websites using modern technologies and best practices for optimal
                user experience.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-[#111122] p-6 rounded-lg border border-[#222233] hover:border-[#ff2a8d]/30 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <h3 className="text-xl font-semibold mb-3">Web Design</h3>
              <p className="text-white/70">
                Designing beautiful and intuitive user interfaces that provide excellent user experience across all
                devices.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-[#111122] p-6 rounded-lg border border-[#222233] hover:border-[#ff2a8d]/30 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <h3 className="text-xl font-semibold mb-3">WordPress Development</h3>
              <p className="text-white/70">
                Building custom WordPress themes and plugins to create content-managed websites with powerful
                functionality.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="container mx-auto px-4 py-16 md:py-24">
        <motion.div variants={containerVariants} initial="hidden" animate={skillsControls} className="space-y-12">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#ff2a8d]">
            SKILLS
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-white/80">
            The skills, tools and technologies I use:
          </motion.p>
          <motion.div variants={containerVariants} className="grid grid-cols-3 md:grid-cols-6 gap-8 text-center">
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaHtml5 className="text-4xl text-[#E44D26] mb-2" />
              <span className="text-sm">HTML5</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaCss3Alt className="text-4xl text-[#1572B6] mb-2" />
              <span className="text-sm">CSS3</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaJs className="text-4xl text-[#F7DF1E] mb-2" />
              <span className="text-sm">JavaScript</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaReact className="text-4xl text-[#61DAFB] mb-2" />
              <span className="text-sm">React</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <SiNextdotjs className="text-4xl text-white mb-2" />
              <span className="text-sm">Next.js</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl text-[#38B2AC] mb-2" />
              <span className="text-sm">Tailwind</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <SiTypescript className="text-4xl text-[#3178C6] mb-2" />
              <span className="text-sm">TypeScript</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaNodeJs className="text-4xl text-[#339933] mb-2" />
              <span className="text-sm">Node.js</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaWordpress className="text-4xl text-[#21759B] mb-2" />
              <span className="text-sm">WordPress</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaGithub className="text-4xl text-white mb-2" />
              <span className="text-sm">GitHub</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <FaNpm className="text-4xl text-[#CB3837] mb-2" />
              <span className="text-sm">npm</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="container mx-auto px-4 py-16 md:py-24">
        <motion.div variants={containerVariants} initial="hidden" animate={portfolioControls} className="space-y-12">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#ff2a8d]">
            PORTFOLIO
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="bg-[#111122] rounded-lg overflow-hidden group hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={`/placeholder.svg?height=300&width=500`}
                    alt={`Project ${item}`}
                    // fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#ff2a8d]/0 group-hover:bg-[#ff2a8d]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ArrowRightIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Project Title {item}</h3>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-[#222233] rounded">HTML</span>
                    <span className="px-2 py-1 bg-[#222233] rounded">CSS</span>
                    <span className="px-2 py-1 bg-[#222233] rounded">JS</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="container mx-auto px-4 py-16 md:py-24">
        <motion.div variants={containerVariants} initial="hidden" animate={contactControls} className="space-y-12">
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[#ff2a8d] mb-4">DO YOU HAVE A PROJECT TO DISCUSS?</h2>
            <p className="text-lg text-white/80 mb-2">GET IN TOUCH</p>
            <ArrowRightIcon className="w-5 h-5 mx-auto text-[#ff2a8d]" />
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">CONTACT</h3>
              <p className="text-white/70 mb-8">
                Feel free to reach out if you want to collaborate with me, or simply have a chat.
              </p>

              <h3 className="text-xl font-semibold mb-4">SOCIAL MEDIA</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a8d]/50 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a8d]/50 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a8d]/50 focus:border-transparent"
                ></textarea>
              </div>
              <Button className="bg-[#ff2a8d] hover:bg-[#ff2a8d]/90 text-white rounded-md px-6 py-2 h-auto transition-transform duration-300 hover:translate-y-[-2px] w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      {/* <footer className="container mx-auto px-4 py-8 border-t border-[#222233] mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Tatiana Dmitrienko. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-[#ff2a8d] text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-[#ff2a8d] text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  )
}

