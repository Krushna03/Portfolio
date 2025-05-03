import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/animations"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaNpm } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPython, SiDjango } from "react-icons/si"
import { Asterisk, GitBranch } from "lucide-react"
import { GiExtraLucid } from "react-icons/gi"

const Skills = () => {

  return (
    <section id='technologies' className="container mx-auto px-4 py-16 md:py-24">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
      
        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            SKILLS
          </button>
          <p className="mt-3 font-light text-lg sm:text-xl">
            The skills, tools and technologies i use:
          </p>
        </motion.h2>

        <motion.div variants={containerVariants} className="relative max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-10 text-center">
        <div className="absolute inset-0 rounded-full blur-xl opacity-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              {skill.icon}
              <span className="text-sm sm:text-lg font-semibold mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
      </motion.div>
    </section>
  )
}

export default Skills



const skills = [
  { icon: <FaHtml5 className="text-4xl text-[#E44D26]" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-4xl text-[#1572B6]" />, name: "CSS3" },
  { icon: <FaJs className="text-4xl text-[#F7DF1E]" />, name: "JavaScript" },
  { icon: <FaReact className="text-4xl text-[#61DAFB]" />, name: "React" },
  { icon: <SiNextdotjs className="text-4xl text-white" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-4xl text-[#38B2AC]" />, name: "Tailwind" },
  { icon: <SiTypescript className="text-4xl text-[#3178C6]" />, name: "TypeScript" },
  { icon: <SiPython className="text-4xl text-[#74cf50]" />, name: "Python" },
  { icon: <FaNodeJs className="text-4xl text-[#339933]" />, name: "Node.js" },
  { icon: <SiDjango className="text-4xl text-[#339933]" />, name: "Django" },
  { icon: <FaGithub className="text-4xl text-white" />, name: "GitHub" },
  { icon: <GitBranch className="text-4xl text-[#ff6262]" />, name: "Git" },
  { icon: <FaNpm className="text-4xl text-[#CB3837]" />, name: "npm" },
  { icon: <Asterisk size="35px" className="mt-1 text-4xl text-[#ffffff]" />, name: "Many Other...." },
]