import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/animations"
import SpotlightCard from "./ui/SpotlightCard"
import { CgWebsite } from "react-icons/cg"
import React from "react"
import { AiOutlineCode } from "react-icons/ai"
import { GoDatabase } from "react-icons/go"
import { SiCodesignal } from "react-icons/si"
import { VscBug } from "react-icons/vsc"
import { TbWriting } from "react-icons/tb"
// import SpotlightCard from "./ui/SpotlightCard"

const Services = () => {
  return (
    <section id='services' className="mt-10 sm:mt-0 lg:container lg:mx-auto md:mx-7 py-16 px-4 md:py-24">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
        
        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            MY SERVICES
          </button>
          <p className="mt-3 font-light text-lg sm:text-xl">
          Offering end-to-end web solutions, <br /> from design and development to optimization and documentation.
          </p>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
        <div className="absolute inset-0 rounded-full blur-xl opacity-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
          {
            services.map((item) => (
              <SpotlightCard className="sm:mt-4 custom-spotlight-card cursor-pointer" spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="flex items-center gap-3">
                  {React.createElement(item.image, { className: "mb-2 h-5 w-5" })}
                  <h3 className="text-xl text-white font-bold mb-3">{item.title}</h3>
                </div>
                <p className="text-white/80">{item.description}</p>
              </SpotlightCard>
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Services



const services = [
  { 
    image: CgWebsite,
    title: "Fullstack Web Development", 
    description: "Building powerful and scalable web applications using the MERN stack and Next.js."
  },
  { 
    image: AiOutlineCode,
    title: "Frontend Development", 
    description: "Creating responsive and modern user interfaces with React.js and Next.js."
  },
  { 
    image: GoDatabase,
    title: "Backend API Development", 
    description: "Designing and developing secure RESTful APIs using Node.js and Express.js."
  },
  { 
    image: SiCodesignal,
    title: "Website Design and Redesign", 
    description: "Designing beautiful, user-friendly websites with a focus on performance and SEO."
  },
  { 
    image: VscBug,
    title: "Bug Fixing and Code Optimization", 
    description: "Fixing bugs, improving code quality, and optimizing website performance."
  },
  { 
    image: TbWriting,
    title: "Technical Content Writing", 
    description: "Writing technical blogs, tutorials, and documentation focused on web development topics."
  }
];
