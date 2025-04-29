import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/animations"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaNpm } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPython } from "react-icons/si"
import { GitBranch } from "lucide-react"

const Skills = () => {
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
    { icon: <FaGithub className="text-4xl text-white" />, name: "GitHub" },
    { icon: <GitBranch className="text-4xl text-[#ff6262]" />, name: "Git" },
    { icon: <FaNpm className="text-4xl text-[#CB3837]" />, name: "npm" },
  ]

  return (
    <section id='technologies' className="container mx-auto px-4 py-16 md:py-24">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
      
        <motion.h2 variants={itemVariants} className="text-center ">
          <button className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            SKILLS
          </button>
          <p className="mt-3 font-medium text-xl">
            The skills, tools and technologies i use:
          </p>
        </motion.h2>

        <motion.div variants={containerVariants} className="max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-10 text-center">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              {skill.icon}
              <span className="text-base font-semibold mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
      </motion.div>
    </section>
  )
}

export default Skills
