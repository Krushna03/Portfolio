import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/animations"
import { useState } from "react"
import { Skeleton } from "./ui/Skeleton"

interface Project {
  img: string;
  name: string;
  link: string;
  description: string;
  TechUsed: string;
  category: 'client' | 'personal';
}

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<'all' | 'client' | 'personal'>('all');

  const handleImageLoad = (imgSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imgSrc));
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="mx-6 lg:container lg:mx-auto md:mx-8 py-16 md:py-16">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">

        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            PROJECTS
          </button>
          <p className="mt-3 font-light text-lg sm:text-xl">
            See all my projects
          </p>
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'client', 'personal'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize ${activeFilter === filter
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-transparent text-white shadow-lg'
                : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                }`}
            >
              {filter === 'all' ? 'All Projects' : `${filter} projects`}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 relative">
          {
            filteredProjects.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl shadow-2xl bg-[#16161bdc]"
                aria-label={`View ${item.name} project`}
              >
                <motion.div key={item.name} variants={itemVariants} className="bg-[#16161bdc] rounded-lg overflow-hidden group hover:translate-y-[-5px] transition-all duration-300 cursor-pointer">
                  <div className="relative h-56">
                    {!loadedImages.has(item.img) && (
                      <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
                    )}
                    <img
                      src={item.img}
                      alt={`${item.name} - ${item.description}`}
                      className={`object-fit w-full h-full transition-opacity duration-300 ${loadedImages.has(item.img) ? 'opacity-100' : 'opacity-0'
                        }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(item.img)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/logo.png';
                        handleImageLoad(item.img);
                      }}
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-3 mt-2">{item.name}</h3>
                    <h3 className="font-normal text-sm text-gray-100 mb-4">{item.description}</h3>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {item.TechUsed.split(",")
                        .map((t) => t.trim())
                        .filter(Boolean)
                        .map((tech) => (
                          <span
                            key={`${item.name}-${tech}`}
                            className="px-2.5 py-1 text-gray-100 bg-white/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

const projects: Project[] = [
  {
    img: "/align-with-blossom.png",
    name: "Align With Blossom",
    link: "https://align-with-glossom.vercel.app",
    description: "A website for a sacred sanctuary for souls seeking mindset transformation, spiritual alignment, and manifestation.",
    TechUsed: "React, Framer Motion, Tailwind CSS",
    category: 'client'
  },
  {
    img: "/tds-avenue-codeforge.png",
    name: "TDS Avenue CodeForge",
    link: "https://tdsavenuecodeforge.in/",
    description: "Enterprise-grade web, mobile, cloud, data & AI solutions built to scale.",
    TechUsed: "Next.js, Tailwind CSS, AI Integration",
    category: 'client'
  },
  {
    img: "/anju.png",
    name: "Anju Shahani Portfolio",
    link: "https://anjushahani.com",
    description: "A Portfolio Website of a Dubai based Laughter Yoga Coach. I contributed to multiple UI component.",
    TechUsed: "React, Tailwind Css, Shadcn Ui",
    category: 'client'
  },
  {
    img: "/akw-advisory.png",
    name: "AKW Advisory",
    link: "https://akw-advisors.com/",
    description: "A Website for a Financial Advisory Company",
    TechUsed: "Nextjs, Tailwind CSS, Nodejs, Express, MongoDB, Google Analytics",
    category: 'client'
  },
  {
    img: "/pro-sport.png",
    name: "Pro Sport India Pvt. Ltd.",
    link: "https://www.proatheletesports.com",
    description: "A Company Website of a Sport Management Company",
    TechUsed: "React, Tailwind Css, Shadcn Ui",
    category: 'client'
  },
  {
    img: "/ColdMailer.Ai.png",
    name: "ColdMailer.Ai",
    link: "https://coldmailer-ai.vercel.app/",
    description: "An Ai based cold email generator",
    TechUsed: "Gemini Api, React, Nodejs, Express, MongoDB",
    category: 'personal'
  },
  {
    img: "/Hirrd.png",
    name: "Hirrd",
    link: "https://hirrd-1.vercel.app/",
    description: "An hiring platfrom for job seeker and recruiter",
    TechUsed: "React, Nodejs, Express, MongoDB",
    category: 'personal'
  },
  {
    img: "/Kloset.png",
    name: "Kloset",
    link: "https://kloset-app.vercel.app/",
    description: "An E-commerce platform for the seamless shopping experience",
    TechUsed: "Gemini Api, React, Nodejs, Express, MongoDB",
    category: 'personal'
  },
]
